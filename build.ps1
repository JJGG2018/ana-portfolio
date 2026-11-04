# Script de compilación y empaquetado de "24 Horas con Ana" (Rust -> WebAssembly)
$ErrorActionPreference = "Stop"

Write-Host "==> Compilando motor Rust a WebAssembly (wasm32-unknown-unknown)..." -ForegroundColor Cyan

$SysrootLib = "target\sysroot\lib\rustlib\wasm32-unknown-unknown\lib"
$ToolchainDir = "$env:USERPROFILE\.rustup\toolchains\stable-x86_64-pc-windows-msvc"

New-Item -ItemType Directory -Force -Path $SysrootLib | Out-Null
$env:RUSTC_BOOTSTRAP = "1"

if (-not (Test-Path "$SysrootLib\libcore.rlib")) {
    Write-Host "   -> Generando sysroot local libcore.rlib desde rust-src..." -ForegroundColor Yellow
    rustc --edition=2024 --crate-name core --crate-type rlib -C opt-level=2 -C panic=abort `
        --target wasm32-unknown-unknown `
        "$ToolchainDir\lib\rustlib\src\rust\library\core\src\lib.rs" `
        -o "$SysrootLib\libcore.rlib"
}

if (-not (Test-Path "$SysrootLib\libcompiler_builtins.rlib")) {
    Write-Host "   -> Generando libcompiler_builtins.rlib..." -ForegroundColor Yellow
    $cbSrc = "target\sysroot\cb_stub.rs"
    Set-Content -Path $cbSrc -Value '#![no_std] #![feature(compiler_builtins)] #![compiler_builtins]'
    rustc --edition=2021 --crate-name compiler_builtins --crate-type rlib -C opt-level=2 -C panic=abort `
        --target wasm32-unknown-unknown `
        --sysroot "target\sysroot" `
        $cbSrc -o "$SysrootLib\libcompiler_builtins.rlib"
}

New-Item -ItemType Directory -Force -Path "web" | Out-Null
New-Item -ItemType Directory -Force -Path "docs" | Out-Null

# Copiar el enlazador rust-lld al sysroot local para que rustc lo invoque directamente
$HostBinDir = "target\sysroot\lib\rustlib\x86_64-pc-windows-msvc\bin"
if (-not (Test-Path "$HostBinDir\rust-lld.exe")) {
    New-Item -ItemType Directory -Force -Path "$HostBinDir\gcc-ld" | Out-Null
    Copy-Item "$ToolchainDir\lib\rustlib\x86_64-pc-windows-msvc\bin\rust-lld.exe" "$HostBinDir\rust-lld.exe" -Force
    Copy-Item "$ToolchainDir\lib\rustlib\x86_64-pc-windows-msvc\bin\gcc-ld\*" "$HostBinDir\gcc-ld\" -Force
}

rustc --edition=2021 --crate-type cdylib -C opt-level=z -C lto=fat -C panic=abort `
    --target wasm32-unknown-unknown `
    --sysroot "target\sysroot" `
    src\lib.rs -o web\ana_portfolio.wasm

Copy-Item "web\ana_portfolio.wasm" "docs\ana_portfolio.wasm" -Force

$WasmBytes = [System.IO.File]::ReadAllBytes("$PWD\web\ana_portfolio.wasm")
$WasmBase64 = [Convert]::ToBase64String($WasmBytes)
$bundleContent = "// Auto-generado por build.ps1 a partir de web/ana_portfolio.wasm ($($WasmBytes.Length) bytes)`nwindow.ANA_WASM_BASE64 = '$WasmBase64';"
Set-Content -Path "web\wasm_bundle.js" -Value $bundleContent -Encoding UTF8
Set-Content -Path "docs\wasm_bundle.js" -Value $bundleContent -Encoding UTF8

Copy-Item "web\index.html" "docs\index.html" -Force
Copy-Item "web\styles.css" "docs\styles.css" -Force
Copy-Item "web\game.js" "docs\game.js" -Force
New-Item -ItemType Directory -Force -Path "docs\assets" | Out-Null
Copy-Item "web\assets\*" "docs\assets\" -Recurse -Force

Write-Host "==> ¡Compilación exitosa! web\ y docs\ actualizados ($($WasmBytes.Length) bytes) listos para GitHub Pages." -ForegroundColor Green
