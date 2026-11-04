# 24 Horas con Ana — Portfolio Interactivo en Rust + WebAssembly

Experiencia digital interactiva tipo videojuego (**Opción 1: El Edificio / Diorama Arquitectónico**) creada a partir del portfolio de Diseño de Producto (2025) de **Ana Galilea** (IED Madrid).

---

## Estructura del Proyecto en `c:\Users\jgali\Ana`

* [`Cargo.toml`](file:///c:/Users/jgali/Ana/Cargo.toml): Configuración del paquete Rust (`ana_portfolio_wasm`, compilable como `cdylib` a WebAssembly y como `rlib` para tests nativos).
* [`src/lib.rs`](file:///c:/Users/jgali/Ana/src/lib.rs): **Motor de físicas 2.5D, sistema de partículas y máquina de estados en Rust (`#![no_std]` en WASM)** para las 5 plantas del edificio:
  * **Planta 0 (08:00 AM · La Cocina — `04. Cafeliko`):** Selección de los 3 grados de cafeína (`LIGHT`, `CLASSICO`, `SUPER`), ritual de cafetera italiana en 6 pasos y emisión de partículas de vapor en tiempo real.
  * **Planta 1 (09:30 AM · El Kiosco — `00. Tacto`):** Simulador de saturación digital vs. tregua visual en papel, paso de páginas del periódico físico, sopa de letras de jerga Gen-Z y mini-juego *«¿Dónde está Mariano Rajoy?»*.
  * **Planta 2 (11:00 AM · Oficina Telefónica — `01. Telefónica con Tom`):** Físicas de muelle para el robot asistente **Tom**, recolección de los 9 ítems formativos de Telefónica y desbloqueo progresivo de las 3 sub-plantas.
  * **Planta 3 (04:00 PM · El Estudio — `02. Focus`):** Simulación del desplegado elástico Pop-Up de fibra de vidrio y temporizador Pomodoro (20 min) al introducir el móvil en el *Bolsillo Focus*.
  * **Planta 4 (07:30 PM · La Azotea — `03. Chile`):** Físicas de vuelo del ave *fío-fío* (*Elaenia albiceps*), vista explosionada interactiva de los 3 estratos (Refugios biodegradables + Estructura Voronoi + Tierra fértil) y germinación de los 8 brotes de chile.
* [`build.ps1`](file:///c:/Users/jgali/Ana/build.ps1): Script de compilación que genera [`web/ana_portfolio.wasm`](file:///c:/Users/jgali/Ana/web/ana_portfolio.wasm) (11.8 KB) directamente con `rustc` y `rust-lld` sin requerir descargas externas, además de actualizar [`web/wasm_bundle.js`](file:///c:/Users/jgali/Ana/web/wasm_bundle.js).
* [`web/`](file:///c:/Users/jgali/Ana/web/index.html): Carpeta lista para publicar en cualquier hosting estático (GitHub Pages, Cloudflare Pages, Vercel o Netlify):
  * [`web/index.html`](file:///c:/Users/jgali/Ana/web/index.html)
  * [`web/styles.css`](file:///c:/Users/jgali/Ana/web/styles.css)
  * [`web/game.js`](file:///c:/Users/jgali/Ana/web/game.js)
  * [`web/ana_portfolio.wasm`](file:///c:/Users/jgali/Ana/web/ana_portfolio.wasm)
  * `web/assets/portfolio/`: 33 imágenes y renders en alta resolución extraídos y organizados desde `PORTFOLIO_SINTERMINAR.pdf`.

---

## Cómo probarlo y compilarlo desde Antigravity IDE

1. **Abrir directamente la experiencia interactiva:**
   * Puedes abrir [`web/index.html`](file:///c:/Users/jgali/Ana/web/index.html) directamente en el navegador (funciona incluso con doble clic `file://` gracias al bundle WASM embebido) o servir la carpeta `web` con Python:
     ```powershell
     python -m http.server 8080 --directory web
     ```
     y visitar `http://localhost:8080`.

2. **Modificar el motor en Rust ([`src/lib.rs`](file:///c:/Users/jgali/Ana/src/lib.rs)) y recompilar a WebAssembly:**
   ```powershell
   .\build.ps1
   ```

3. **Para publicarlo en Internet:**
   * Sube el contenido de la carpeta `web/` a **GitHub Pages**, **Cloudflare Pages**, **Vercel** o **Netlify**. Al ser un binario `.wasm` estático de solo ~12 KB más las imágenes optimizadas, carga de forma instantánea y no necesita servidor de backend.
