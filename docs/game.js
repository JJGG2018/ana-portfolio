/**
 * 24 HORAS CON ANA — Motor de Renderizado 2.5D + Puente FFI con Rust/WASM
 * Portfolio Interactivo de Diseño de Producto — Ana Galilea (2025)
 */

const PROJECTS_DATA = [
  {
    floor: 0,
    num: "04",
    code: "//Cafeliko",
    timeLabel: "08:00 AM · La Cocina",
    title: "Cafeliko",
    subtitle: "Producto, packaging, servicio",
    question: "¿Se podrían crear grados de cafeína?",
    statBig: "55% / 80%",
    statText: "55% no bebe café por la tarde porque le quita el sueño · 80% considera la cafetera italiana un proceso sucio e incómodo.",
    summary:
      "Sistema de dosis de café previamente compactadas en tira dispensadora con 3 grados exactos de cafeína (LIGHT, CLASSICO y SUPER). Permite seguir disfrutando del ritual de la cafetera italiana a cualquier hora del día sin ensuciar ni desperdiciar café.",
    phases: {
      investigacion:
        "El 55% de los usuarios renuncia al café vespertino por insomnio, mientras que el 80% percibe rellenar y limpiar el cacillo de la cafetera italiana como un gesto engorroso.",
      proceso:
        "Diseño de una escala intuitiva de concentración de cafeína en 3 niveles (1 punto = LIGHT, 2 puntos = CLASSICO, 3 puntos = SUPER) en envases cilíndricos de cartón prensado.",
      desarrollo:
        "Tira continua de papel filtro biodegradable con pastillas de café pre-compactadas. Basta con desenroscar la cafetera, arrancar la dosis deseada e introducirla limpia en el embudo.",
      producto:
        "Dispensador de 30 dosis combinable en un pack vertical personalizado de 3 cilindros para la encimera de la cocina.",
    },
    images: [
      { src: "assets/portfolio/cafeliko_kitchen.jpg", caption: "Pack vertical Cafeliko (Light, Classico, Super) junto a la cafetera italiana" },
      { src: "assets/portfolio/cafeliko_box.jpg", caption: "Estuche de 3 grados de cafeína: LIGHT, CLASSICO y SUPER" },
      { src: "assets/portfolio/cafeliko_strip.jpg", caption: "Tira dispensadora con dosis compactas listas para arrancar" },
      { src: "assets/portfolio/cafeliko_pack.jpg", caption: "Dispensadores cilíndricos de 30 dosis" },
    ],
  },
  {
    floor: 1,
    num: "00",
    code: "//Tacto",
    timeLabel: "09:30 AM · El Kiosco Urbano",
    title: "tacto (TFG | IED Madrid)",
    subtitle: "Producto, servicio",
    question: "¿Cómo tangibilizar tu pantalla?",
    statBig: "63%",
    statText: "de los jóvenes de entre 18 y 34 años pasa más de 2 horas al día en redes sociales (hipermediación digital y fatiga mental).",
    summary:
      "Un periódico físico y soporte urbano que recupera la lectura en papel y la experiencia tangible sin renunciar al lenguaje actual de internet: memes, cultura digital, diccionario de jerga, talento emergente y pasatiempos. «No hagas scroll. Pasa página.»",
    phases: {
      investigacion:
        "El exceso de consumo digital genera saturación, fatiga mental, aislamiento y pérdida de contacto con los objetos físicos en el espacio público.",
      proceso:
        "¿Qué pasaría si todo lo que consumes deslizando el dedo por una pantalla apareciera en papel? Para leer despacio, doblar una esquina o prestárselo a alguien.",
      desarrollo:
        "Diseño editorial completo en papel prensa (Clases de jerga actual: FOMO, NPC, PEC, SLAY; Ventana al talento @unkiid; rutinas Gymrats; DIY y pasatiempos) junto a un buzón dispensador metálico con rejilla de cannage.",
      producto:
        "Un espacio de tregua visual en paradas de transporte y cafeterías que devuelve rituales pausados y conscientes.",
    },
    images: [
      { src: "assets/portfolio/tacto_kiosco.jpg", caption: "Lectura en papel y buzón dispensador urbano de Tacto" },
      { src: "assets/portfolio/tacto_spread_pasatiempos.jpg", caption: "¿Dónde está Mariano Rajoy? y pasatiempos en papel" },
      { src: "assets/portfolio/tacto_spread_jerga.jpg", caption: "Clases de jerga actual (FOMO, Main Character, Factos, PEC, NPC)" },
      { src: "assets/portfolio/tacto_spread_talento.jpg", caption: "Ventana al talento emergente (@unkiid) y cultura urbana" },
      { src: "assets/portfolio/tacto_spread_diy.jpg", caption: "Sección Gymrats y guía ilustrada D.I.Y." },
    ],
  },
  {
    floor: 2,
    num: "01",
    code: "//Tom",
    timeLabel: "11:00 AM · Oficina Telefónica",
    title: "Telefónica con Tom",
    subtitle: "Experiencia VR, Onboarding",
    question: "¿Cómo integrar a un nuevo empleado joven sin abrumarlo?",
    statBig: "75% / 31%",
    statText: "75% de profesionales sintió soledad durante su llegada · 31% abandona la empresa debido a un mal proceso de onboarding.",
    summary:
      "Experiencia de Onboarding en Realidad Virtual para Telefónica donde el nuevo empleado explora una maqueta arquitectónica de su futura oficina de 3 plantas acompañado por Tom, un asistente virtual amigable que transforma el aprendizaje corporativo en una aventura gamificada.",
    phases: {
      investigacion:
        "Un empleado joven sin experiencia laboral previa debe comprender la estructura y herramientas de Telefónica evitando sentirse abrumado en sus primeros días.",
      proceso:
        "Creación del personaje guía «Tom» y gamificación del recorrido por plantas: recoger los 9 ítems interactivos (acreditación, canales de Teams, soporte) y superar breves retos para desbloquear la siguiente planta.",
      desarrollo:
        "Diseño espacial del edificio en sección de 3 niveles e interfaz diegética en Realidad Virtual con contador de progreso (9/9 ítems).",
      producto:
        "Integración rápida, acompañada y memorable bajo el lema «Trabajamos para ti».",
    },
    images: [
      { src: "assets/portfolio/tom_building_city.jpg", caption: "Edificio en sección de 3 plantas para el Onboarding VR de Telefónica" },
      { src: "assets/portfolio/tom_vr_hello.jpg", caption: "El asistente virtual Tom guiando al usuario en Realidad Virtual" },
      { src: "assets/portfolio/tom_vr_items.jpg", caption: "Interfaz VR con mando y recolección de los 9/9 ítems por planta" },
      { src: "assets/portfolio/tom_building_cutout.jpg", caption: "Maqueta arquitectónica de las 3 plantas desbloqueables" },
      { src: "assets/portfolio/tom_avatar.jpg", caption: "Diseño de personaje del asistente virtual Tom" },
    ],
  },
  {
    floor: 3,
    num: "02",
    code: "//Focus",
    timeLabel: "04:00 PM · El Estudio",
    title: "focus",
    subtitle: "Producto, experiencia",
    question: "¿Cómo podemos limitar el uso de redes sociales?",
    statBig: "70%",
    statText: "de los jóvenes de entre 12 y 30 años en países desarrollados tiene una media de consumo diario del móvil superior a 5 horas.",
    summary:
      "Cabina portátil y ligera con estructura interior Pop-Up de fibra de vidrio que crea un refugio de concentración en cualquier escritorio o biblioteca. Incorpora el «Bolsillo Focus», que bloquea físicamente el móvil mediante ciclos Pomodoro (20 min de concentración / 5 min de descanso).",
    phases: {
      investigacion:
        "La hiperconectividad fragmenta la atención en entornos de estudio y trabajo compartido. Se busca un límite físico y tangible frente al hábito automático de mirar el móvil.",
      proceso:
        "Exploración de geometrías envolventes y mecanismos plegables tipo Pop-Up que permitan pasar de un disco plano de transporte a una cúpula autoportante en segundos.",
      desarrollo:
        "Estructura interior de varillas de fibra de vidrio, cuerpo textil con ventana lateral de nylon, rejilla de ventilación superior en malla, paso de cableado trasero y bolsillo bloqueador con temporizador digital.",
      producto:
        "Un espacio personal portátil bajo el lema «Céntrate en ti».",
    },
    images: [
      { src: "assets/portfolio/focus_library.jpg", caption: "Cabina Focus en uso dentro de una biblioteca («Céntrate en ti»)" },
      { src: "assets/portfolio/focus_desk.jpg", caption: "Geometría envolvente y reloj Pomodoro integrado (18:43)" },
      { src: "assets/portfolio/focus_portable.jpg", caption: "Plegado compacto con asa para transporte diario" },
      { src: "assets/portfolio/focus_pomodoro.jpg", caption: "Bolsillo Focus basado en el Método Pomodoro (20 min bloqueo / 5 min descanso)" },
      { src: "assets/portfolio/focus_structure.jpg", caption: "Detalle de ventilación superior en malla, ventana de nylon y abertura de cableado" },
    ],
  },
  {
    floor: 4,
    num: "03",
    code: "//Chile",
    timeLabel: "07:30 PM · La Azotea",
    title: "Chile",
    subtitle: "Experiencia, infraestructura",
    question: "¿Aprovechar la naturaleza de un ave para la distribución del chile?",
    statBig: "75%",
    statText: "de las emisiones globales se deben a combustibles fósiles · El ave «fío-fío» (Elaenia albiceps) se encarga de la dispersión natural del chile.",
    summary:
      "Sistema de infraestructura verde para azoteas urbanas inspirado en San Luis Potosí. Atrae al ave «fío-fío» mediante refugios biodegradables con agua y alimento sobre una estructura Voronoi; al degradarse el refugio, las semillas dispersadas por el ave germinan en la cubierta evitando el transporte con combustibles fósiles.",
    phases: {
      investigacion:
        "San Luis Potosí ocupa el segundo lugar mundial en producción de chile. El ave migratoria Elaenia albiceps («fío-fío») dispersa de forma natural las semillas sin dañar su capacidad germinativa.",
      proceso:
        "¿Cómo atraer a los pájaros a las azoteas de la ciudad y generar allí mismo cultivos de chile de kilómetro cero sin emisiones de transporte?",
      desarrollo:
        "Sistema en 3 estratos: (1) Refugios biodegradables donde las aves encuentran agua y alimento, (2) Estructura Voronoi protectora de espacio natural y (3) Sustrato de tierra fértil en la cubierta.",
      producto:
        "Nuevos corredores ecológicos en lo alto de los edificios donde los vecinos recogen el chile directamente en su azotea («Alimenta el vuelo»).",
    },
    images: [
      { src: "assets/portfolio/chile_hero.jpg", caption: "Aves fío-fío sobre los refugios biodegradables y la estructura Voronoi" },
      { src: "assets/portfolio/chile_exploded.jpg", caption: "Vista explosionada: Refugios biodegradables + Estructura Voronoi + Tierra fértil" },
      { src: "assets/portfolio/chile_sunset.jpg", caption: "Cubierta verde al atardecer («Alimenta el vuelo»)" },
      { src: "assets/portfolio/chile_rooftops.jpg", caption: "Red de azoteas cultivadas tras la degradación natural de los refugios" },
    ],
  },
];

let wasm = null;
let wasmMemory = null;
let selectedImageIndex = 0;

// Decodifica Base64 a Uint8Array para carga instantánea sin bloqueo CORS en file://
function base64ToBytes(b64) {
  const bin = atob(b64);
  const len = bin.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = bin.charCodeAt(i);
  }
  return bytes;
}

async function loadRustWasm() {
  try {
    if (window.location.protocol !== "file:") {
      const resp = await fetch("ana_portfolio.wasm");
      const bytes = await resp.arrayBuffer();
      const { instance } = await WebAssembly.instantiate(bytes, {});
      return instance.exports;
    }
  } catch (_) {
    // Fallback automático al bundle compilado de Rust
  }
  if (window.ANA_WASM_BASE64) {
    const bytes = base64ToBytes(window.ANA_WASM_BASE64);
    const { instance } = await WebAssembly.instantiate(bytes, {});
    return instance.exports;
  }
  throw new Error("No se pudo cargar ana_portfolio.wasm");
}

// ============================================================================
// UI & PANEL LATERAL INTERACTIVO DE MINI-JUEGOS
// ============================================================================

function selectFloor(floorIdx) {
  if (!wasm) return;
  wasm.set_target_floor(floorIdx);
  selectedImageIndex = 0;
  renderSidebar(floorIdx);
  updateTopNav(floorIdx);
}
window.selectFloor = selectFloor;

function updateTopNav(activeFloor) {
  const mask = wasm ? wasm.get_completed_mask() : 0;
  // Map floor index to project bit in mask:
  // Floor 0 -> Project 04 (bit 4)
  // Floor 1 -> Project 00 (bit 0)
  // Floor 2 -> Project 01 (bit 1)
  // Floor 3 -> Project 02 (bit 2)
  // Floor 4 -> Project 03 (bit 3)
  const floorBitMap = [4, 0, 1, 2, 3];

  document.querySelectorAll(".floor-pill").forEach((btn, idx) => {
    btn.classList.toggle("active", idx === activeFloor);
    const bit = floorBitMap[idx];
    btn.classList.toggle("completed", (mask & (1 << bit)) !== 0);
  });

  const completedCount =
    ((mask >> 0) & 1) +
    ((mask >> 1) & 1) +
    ((mask >> 2) & 1) +
    ((mask >> 3) & 1) +
    ((mask >> 4) & 1);
  const progEl = document.getElementById("globalProgressText");
  if (progEl) {
    progEl.textContent = `${completedCount}/5 Hecho`;
  }
}

function renderSidebar(floorIdx) {
  const proj = PROJECTS_DATA[floorIdx];
  if (!proj) return;

  document.getElementById("labNum").textContent = `${proj.num} · ${proj.subtitle}`;
  document.getElementById("labCode").textContent = proj.code;
  document.getElementById("labTitle").textContent = proj.title;
  document.getElementById("labQuestion").textContent = proj.question;
  document.getElementById("labStatBig").textContent = proj.statBig;
  document.getElementById("labStatDesc").textContent = proj.statText;
  document.getElementById("labSummary").textContent = proj.summary;

  renderMinigameControls(floorIdx);
  renderGalleryPreview(proj);
}

function renderGalleryPreview(proj) {
  const heroImg = document.getElementById("sidebarHeroImg");
  const heroCap = document.getElementById("sidebarHeroCaption");
  const strip = document.getElementById("sidebarThumbStrip");

  const activeImg = proj.images[selectedImageIndex] || proj.images[0];
  heroImg.src = activeImg.src;
  heroCap.textContent = activeImg.caption;

  strip.innerHTML = "";
  proj.images.forEach((imgObj, idx) => {
    const div = document.createElement("div");
    div.className = `thumb-item ${idx === selectedImageIndex ? "active" : ""}`;
    div.innerHTML = `<img src="${imgObj.src}" alt="${imgObj.caption}">`;
    div.onclick = () => {
      selectedImageIndex = idx;
      renderGalleryPreview(proj);
    };
    strip.appendChild(div);
  });
}

function renderMinigameControls(floorIdx) {
  const container = document.getElementById("minigameContent");
  if (!wasm || !container) return;

  if (floorIdx === 0) {
    // PLANTA 0: 04. CAFELIKO
    const grade = wasm.get_cafeliko_grade();
    const step = wasm.get_cafeliko_step();
    const stepNames = [
      "Pulsa para iniciar el ritual limpio de Cafeliko",
      "1/6 · Cafetera italiana desenroscada",
      "2/6 · Dosis de cafeína arrancada de la tira",
      "3/6 · Dosis limpia introducida en el filtro",
      "4/6 · Base llena de agua y cafetera enroscada",
      "5/6 · Infusionando al fuego sin ensuciar la encimera...",
      "6/6 · ¡Cafeliko servido y listo para disfrutar!",
    ];
    container.innerHTML = `
      <div class="minigame-header">
        <span class="minigame-badge">Planta 0 · 08:00 AM · La Cocina</span>
        <span class="minigame-status" id="cafelikoStatusBadge">${step === 6 ? "✓ ¡Café servido!" : step === 5 ? "⏳ Calentando..." : `Paso ${step}/6`}</span>
      </div>
      <p style="font-size:0.8rem; color:#222; margin-bottom:8px;">
        <strong>1. Selecciona el grado de cafeína deseado:</strong>
      </p>
      <div class="game-btn-row">
        <button class="game-btn ${grade === 0 ? "active" : ""}" onclick="window.handleCafelikoGrade(0)">●○○ LIGHT (Suave)</button>
        <button class="game-btn ${grade === 1 ? "active" : ""}" onclick="window.handleCafelikoGrade(1)">●●○ CLASSICO (Equilibrado)</button>
        <button class="game-btn ${grade === 2 ? "active" : ""}" onclick="window.handleCafelikoGrade(2)">●●● SUPER (Intenso)</button>
      </div>
      <p style="font-size:0.8rem; color:#222; margin:12px 0 6px;">
        <strong>2. Ritual de preparación limpia:</strong> ${stepNames[step]}
      </p>
      <div class="game-btn-row">
        <button class="game-btn" style="background:var(--klein-blue); color:#fff; border-color:var(--klein-blue);" onclick="window.handleCafelikoStep()">
          ${step === 0 ? "▶ Iniciar Ritual (Paso 1/6)" : step < 5 ? `▶ Siguiente Paso (${step + 1}/6)` : step === 5 ? "⏳ Infusionando en el diorama..." : "↻ Preparar otra taza"}
        </button>
      </div>
    `;
  } else if (floorIdx === 1) {
    // PLANTA 1: 00. TACTO
    const isOpen = wasm.get_tacto_open() === 1;
    const page = wasm.get_tacto_page();
    const rajoyFound = wasm.get_tacto_rajoy_found() === 1;
    const wordsMask = wasm.get_tacto_words_mask();
    const pageTitles = [
      "Portada · TACTO vol. 01",
      "Pág. 2-3 · Clases de jerga actual (FOMO, PEC, NPC)",
      "Pág. 4-5 · Ventana al talento: @unkiid",
      "Pág. 6-7 · ¿Dónde está Mariano Rajoy? + Sopa de letras",
      "Pág. 8-9 · Para los GYMRATS + D.I.Y. Cenicero Express",
    ];
    const words = ["RANDOM", "CRUSH", "NPC", "CHILL"];

    container.innerHTML = `
      <div class="minigame-header">
        <span class="minigame-badge">Planta 1 · 09:30 AM · Kiosco Urbano</span>
        <span class="minigame-status">${rajoyFound || wordsMask === 15 ? "✓ Tregua visual conseguida" : "«No hagas scroll. Pasa página.»"}</span>
      </div>
      <p style="font-size:0.8rem; color:#222; margin-bottom:8px;">
        <strong>1. Interactúa con el soporte físico:</strong>
      </p>
      <div class="game-btn-row" style="margin-bottom:10px;">
        <button class="game-btn ${isOpen ? "active" : ""}" onclick="window.handleTactoToggle()">
          ${isOpen ? "📖 Periódico Desplegado (Guardar en buzón)" : "📰 Sacar Periódico Físico del Buzón"}
        </button>
      </div>
      <p style="font-size:0.79rem; font-weight:700; color:var(--klein-blue); margin-bottom:6px;">
        <strong>2. Hojea la publicación:</strong> ${pageTitles[page]}
      </p>
      <div class="game-btn-row">
        <button class="game-btn" onclick="window.handleTactoPage(-1)">← Pág. Anterior</button>
        <button class="game-btn" onclick="window.handleTactoPage(1)">Pasar Página →</button>
      </div>
      <div style="margin-top:12px; padding-top:10px; border-top:1px dashed var(--border);">
        <p style="font-size:0.76rem; color:#444; margin-bottom:6px;">
          <strong>Pasatiempos en papel prensa:</strong> Busca jerga juvenil o localiza a Mariano Rajoy:
        </p>
        <div class="word-pills">
          ${words
            .map(
              (w, idx) =>
                `<span class="word-pill ${(wordsMask & (1 << idx)) !== 0 ? "found" : ""}" onclick="window.handleTactoWord(${idx})">${(wordsMask & (1 << idx)) !== 0 ? "✓ " : ""}${w}</span>`
            )
            .join("")}
          <span class="word-pill ${rajoyFound ? "found" : ""}" onclick="window.handleTactoRajoy()">
            ${rajoyFound ? "✓ ¡Rajoy encontrado!" : "🔍 Buscar a Mariano Rajoy"}
          </span>
        </div>
      </div>
    `;
  } else if (floorIdx === 2) {
    // PLANTA 2: 01. TELEFÓNICA CON TOM
    const count = wasm.get_tom_items_collected();
    const level = wasm.get_tom_unlocked_level();
    container.innerHTML = `
      <div class="minigame-header">
        <span class="minigame-badge">Planta 2 · 11:00 AM · Oficina Telefónica</span>
        <span class="minigame-status">${count}/9 Ítems Recogidos · Nivel ${level}/3</span>
      </div>
      <p style="font-size:0.8rem; color:#222; margin-bottom:8px;">
        <strong>1. Explora el Onboarding en Realidad Virtual:</strong> Haz clic en el diorama para mover a Ana o pulsa para recoger los ítems formativos con Tom:
      </p>
      <div class="game-btn-row">
        <button class="game-btn" style="background:var(--tom-orange); color:#fff; border-color:var(--tom-orange);" onclick="window.handleTomNextItem()">
          ${count < 9 ? `🟠 Recoger Ítem de Telefónica (${count + 1}/9)` : "✓ ¡9/9 Ítems Completados!"}
        </button>
        <button class="game-btn" onclick="window.handleTomQuiz()">
          🎓 Superar Test de Bienvenida
        </button>
      </div>
    `;
  } else if (floorIdx === 3) {
    // PLANTA 3: 02. FOCUS
    const stage = wasm.get_focus_popup_stage();
    const locked = wasm.get_focus_phone_locked() === 1;
    const secs = Math.ceil(wasm.get_focus_pomodoro_secs());
    const mins = String(Math.floor(secs / 60)).padStart(2, "0");
    const remS = String(secs % 60).padStart(2, "0");
    const stageNames = ["0 · Disco plegado portátil", "1 · Varillas Pop-Up abriéndose", "2 · Cabina Pop-Up desplegada"];

    container.innerHTML = `
      <div class="minigame-header">
        <span class="minigame-badge">Planta 3 · 04:00 PM · El Estudio</span>
        <span class="minigame-status" id="focusTimerBadge">${locked ? `⏱ Pomodoro ${mins}:${remS}` : stageNames[stage]}</span>
      </div>
      <p style="font-size:0.8rem; color:#222; margin-bottom:8px;">
        <strong>1. Mecanismo Pop-Up y bloqueo de notificaciones:</strong> Despliega la cabina y guarda el móvil en el Bolsillo Focus:
      </p>
      <div class="game-btn-row">
        <button class="game-btn ${stage === 2 ? "active" : ""}" onclick="window.handleFocusPopup()">
          🔄 Mecanismo Pop-Up (Fase ${stage}/2)
        </button>
        <button class="game-btn ${locked ? "active" : ""}" style="${locked ? "background:var(--focus-green); border-color:var(--focus-green); color:#fff;" : ""}" onclick="window.handleFocusLock()">
          ${locked ? "🔒 Móvil Bloqueado (Modo Concentración)" : "📵 Guardar Móvil en Bolsillo Focus"}
        </button>
      </div>
    `;
  } else if (floorIdx === 4) {
    // PLANTA 4: 03. CHILE
    const exploded = wasm.get_chile_exploded_view() > 0.5;
    let grownCount = 0;
    for (let i = 0; i < 8; i++) {
      if (wasm.get_chile_sprout(i) > 0.7) grownCount++;
    }
    container.innerHTML = `
      <div class="minigame-header">
        <span class="minigame-badge">Planta 4 · 07:30 PM · La Azotea</span>
        <span class="minigame-status" id="chileSproutsBadge">${grownCount}/8 Brotes Germinados</span>
      </div>
      <p style="font-size:0.8rem; color:#222; margin-bottom:8px;">
        <strong>1. Dispersión natural con el ave «fío-fío» (<em>Elaenia albiceps</em>):</strong> Haz clic en el cielo de la azotea o atrae al ave hacia los refugios biodegradables:
      </p>
      <div class="game-btn-row">
        <button class="game-btn" style="background:var(--chile-clay); color:#fff; border-color:var(--chile-clay);" onclick="window.handleChileWater()">
          🐦 Atraer Ave y Germinar Semillas
        </button>
        <button class="game-btn ${exploded ? "active" : ""}" onclick="window.handleChileExplode()">
          ${exploded ? "⬇ Ensamblar Capas en Azotea" : "⬆ Vista Explosionada (3 Capas)"}
        </button>
      </div>
    `;
  }
}

// Handlers globales conectados con el motor Rust WASM
window.handleCafelikoGrade = (g) => {
  wasm.cafeliko_select_grade(g);
  renderMinigameControls(0);
};
window.handleCafelikoStep = () => {
  wasm.cafeliko_advance_step();
  renderMinigameControls(0);
  updateTopNav(wasm.get_target_floor());
};
window.handleTactoToggle = () => {
  const cur = wasm.get_tacto_open();
  wasm.tacto_toggle_newspaper(cur === 1 ? 0 : 1);
  renderMinigameControls(1);
};
window.handleTactoPage = (delta) => {
  wasm.tacto_toggle_newspaper(1);
  const newPage = wasm.tacto_turn_page(delta);
  selectedImageIndex = Math.min(newPage, PROJECTS_DATA[1].images.length - 1);
  renderSidebar(1);
};
window.handleTactoWord = (idx) => {
  wasm.tacto_mark_word_found(idx);
  renderMinigameControls(1);
  updateTopNav(wasm.get_target_floor());
};
window.handleTactoRajoy = () => {
  wasm.tacto_mark_rajoy_found();
  selectedImageIndex = 1; // Mostrar lámina de ¿Dónde está Mariano Rajoy?
  renderSidebar(1);
  updateTopNav(wasm.get_target_floor());
};
window.handleTomNextItem = () => {
  const mask = wasm.get_tom_items_mask();
  for (let i = 0; i < 9; i++) {
    if ((mask & (1 << i)) === 0) {
      wasm.tom_collect_item(i);
      break;
    }
  }
  renderMinigameControls(2);
  updateTopNav(wasm.get_target_floor());
};
window.handleTomQuiz = () => {
  wasm.tom_pass_quiz();
  for (let i = 0; i < 9; i++) wasm.tom_collect_item(i);
  renderMinigameControls(2);
  updateTopNav(wasm.get_target_floor());
};
window.handleFocusPopup = () => {
  wasm.focus_advance_popup();
  renderMinigameControls(3);
};
window.handleFocusLock = () => {
  wasm.focus_toggle_phone_lock();
  renderMinigameControls(3);
  updateTopNav(wasm.get_target_floor());
};
window.handleChileWater = () => {
  wasm.chile_fly_bird_to(0.38 + Math.random() * 0.34, 0.42);
  wasm.chile_water_rooftop();
  renderMinigameControls(4);
  updateTopNav(wasm.get_target_floor());
};
window.handleChileExplode = () => {
  wasm.chile_toggle_exploded();
  selectedImageIndex = 1; // Mostrar render de vista explosionada
  renderSidebar(4);
};

// ============================================================================
// MODAL DOSSIER TÉCNICO COMPLETO & MANIFIESTO DE ANA GALILEA
// ============================================================================

window.openDossierModal = (mode = "project") => {
  const modal = document.getElementById("dossierModalBackdrop");
  const titleEl = document.getElementById("dossierModalTitle");
  const bodyEl = document.getElementById("dossierModalContent");
  modal.classList.add("open");

  if (mode === "help") {
    titleEl.textContent = "Guía: ¿En qué consiste este Portfolio Jugable?";
    bodyEl.innerHTML = `
      <div style="grid-column: span 2;">
        <h2 style="font-family:var(--font-serif); font-size:1.85rem; color:var(--klein-blue); margin-bottom:12px; line-height:1.15;">
          24 Horas con el Diseño de Producto de Ana Galilea
        </h2>
        <p style="font-size:1.02rem; line-height:1.68; color:#1c1e22; margin-bottom:18px;">
          Este portfolio no es una galería estática de fotos: es un <strong>edificio interactivo</strong> en sección arquitectónica. Cada una de sus 5 plantas representa una hora del día (de 08:00 a 19:30) y un <strong>problema cotidiano real</strong> que Ana abordó mediante el diseño de producto, servicios o experiencias tangibles.
        </p>

        <div class="phase-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:14px; margin-bottom:24px;">
          <div class="phase-card" style="border-left: 4px solid var(--cafeliko-classico);">
            <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--ink-muted); font-weight:700;">PLANTA 0 · 08:00 AM</div>
            <h4 style="font-size:1.05rem; margin:4px 0 6px;">04. Cafeliko · La Cocina</h4>
            <p style="font-size:0.84rem; line-height:1.5;">
              <strong>Problema:</strong> 55% de usuarios no toman café por la tarde por miedo al insomnio, y preparar la cafetera italiana tradicional ensucia.<br>
              <strong>Solución de Ana:</strong> Monodosis solubles pre-compactadas en tira dispensadora con 3 grados exactos de cafeína (Light, Classico, Super).
            </p>
          </div>

          <div class="phase-card" style="border-left: 4px solid var(--klein-blue);">
            <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--ink-muted); font-weight:700;">PLANTA 1 · 09:30 AM</div>
            <h4 style="font-size:1.05rem; margin:4px 0 6px;">00. Tacto · El Kiosco Urbano</h4>
            <p style="font-size:0.84rem; line-height:1.5;">
              <strong>Problema:</strong> 63% de jóvenes sufre saturación y fatiga por scroll compulsivo en redes sociales.<br>
              <strong>Solución de Ana:</strong> Periódico físico de edición limitada con cultura digital, memes y pasatiempos, más buzón urbano cannage. «No hagas scroll. Pasa página.»
            </p>
          </div>

          <div class="phase-card" style="border-left: 4px solid var(--tom-orange);">
            <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--ink-muted); font-weight:700;">PLANTA 2 · 11:00 AM</div>
            <h4 style="font-size:1.05rem; margin:4px 0 6px;">01. Telefónica con Tom · Oficina</h4>
            <p style="font-size:0.84rem; line-height:1.5;">
              <strong>Problema:</strong> 75% de nuevos empleados se siente solo o abrumado durante su incorporación a una gran corporación.<br>
              <strong>Solución de Ana:</strong> Experiencia de Realidad Virtual donde el avatar «Tom» guía al usuario por una maqueta interactiva recolectando los 9 ítems formativos.
            </p>
          </div>

          <div class="phase-card" style="border-left: 4px solid var(--focus-green);">
            <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--ink-muted); font-weight:700;">PLANTA 3 · 16:00 PM</div>
            <h4 style="font-size:1.05rem; margin:4px 0 6px;">02. Focus · El Estudio</h4>
            <p style="font-size:0.84rem; line-height:1.5;">
              <strong>Problema:</strong> Las notificaciones del móvil fragmentan la concentración en bibliotecas y mesas de trabajo.<br>
              <strong>Solución de Ana:</strong> Cabina portátil Pop-Up con estructura de fibra de vidrio y «Bolsillo Focus» que bloquea físicamente el smartphone en ciclos Pomodoro.
            </p>
          </div>

          <div class="phase-card" style="border-left: 4px solid var(--chile-clay);">
            <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--ink-muted); font-weight:700;">PLANTA 4 · 19:30 PM</div>
            <h4 style="font-size:1.05rem; margin:4px 0 6px;">03. Chile · La Azotea</h4>
            <p style="font-size:0.84rem; line-height:1.5;">
              <strong>Problema:</strong> 75% de emisiones provienen de combustibles fósiles, incluyendo el transporte y distribución agrícola.<br>
              <strong>Solución de Ana:</strong> Cubierta verde con refugios biodegradables que atraen al ave «fío-fío» para dispersar semillas de chile naturalmente sin transporte contaminante.
            </p>
          </div>
        </div>

        <h3 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px;">¿Cómo interactuar con el portfolio?</h3>
        <ul style="font-size:0.92rem; line-height:1.7; padding-left:20px; color:#333; margin-bottom:20px;">
          <li><strong>Moverte por el edificio:</strong> Puedes pulsar las plantas en el menú superior (08:00 a 19:30), hacer clic directamente en cualquier planta del dibujo, o usar las teclas <span class="kbd">W</span> / <span class="kbd">S</span> / <span class="kbd">A</span> / <span class="kbd">D</span>.</li>
          <li><strong>Probar los productos:</strong> En el panel derecho («Laboratorio»), acciona los controles interactivos para ver en directo cómo funciona cada objeto en el diorama.</li>
          <li><strong>Ver el trabajo real:</strong> Pulsa el botón <strong>«📋 Dossier»</strong> o haz clic en las imágenes para ver las fotos reales, bocetos de proceso y planos técnicos extraídos del portfolio original de Ana.</li>
        </ul>

        <div style="text-align:right;">
          <button class="btn-editorial primary" onclick="window.closeDossierModal()">
            ¡Entendido, volver a la experiencia!
          </button>
        </div>
      </div>
    `;
    return;
  }

  if (mode === "manifesto") {
    titleEl.textContent = "Ana Galilea · Manifiesto y Contacto (Diseño de Producto 2025)";
    bodyEl.innerHTML = `
      <div>
        <p style="font-family:var(--font-serif); font-size:2.4rem; color:var(--klein-blue); line-height:1.05; margin-bottom:18px;">
          Ana Galilea
        </p>
        <p style="font-size:1.02rem; line-height:1.68; color:#1c1e22; margin-bottom:14px;">
          «Me interesa cómo las personas interactúan entre sí y con su entorno, y cómo el diseño puede intervenir para enriquecer esas interacciones. No me detengo en el producto en sí: me importa todo lo que sucede alrededor, el servicio que lo sostiene y la forma en que se integra en la vida cotidiana.»
        </p>
        <p style="font-size:1.02rem; line-height:1.68; color:#1c1e22; margin-bottom:22px;">
          «Diseñar es, para mí, entrar en la vida de las personas con respeto y responsabilidad: observar sus rutinas, entender sus necesidades y proponer soluciones que acompañen su día a día. Cada diseño tiene el poder de mejorar gestos cotidianos y con ello transformar pequeñas rutinas en experiencias significativas.»
        </p>
        <div class="phase-grid">
          <div class="phase-card">
            <h4>Teléfono</h4>
            <p style="font-family:var(--font-mono); font-weight:700;">+34 638 277 531</p>
          </div>
          <div class="phase-card">
            <h4>Instagram</h4>
            <p style="font-family:var(--font-mono); font-weight:700;">@anagalilea.design</p>
          </div>
          <div class="phase-card" style="grid-column:span 2;">
            <h4>Correo Electrónico</h4>
            <p style="font-family:var(--font-mono); font-weight:700;">
              <a href="mailto:agalilea.design@gmail.com" style="color:var(--klein-blue); text-decoration:none;">agalilea.design@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
      <div class="dossier-gallery-grid">
        <img class="wide" src="assets/portfolio/tom_building_city.jpg" alt="Telefónica con Tom">
        <img src="assets/portfolio/focus_library.jpg" alt="Focus">
        <img src="assets/portfolio/chile_sunset.jpg" alt="Chile">
      </div>
    `;
    return;
  }

  const floorIdx = wasm ? wasm.get_target_floor() : 0;
  const proj = PROJECTS_DATA[floorIdx];
  titleEl.textContent = `${proj.num}. ${proj.title} — Dossier Técnico Completo (Textos Revisados)`;

  bodyEl.innerHTML = `
    <div>
      <div style="font-family:var(--font-mono); font-size:0.78rem; color:var(--klein-blue); font-weight:700; margin-bottom:6px;">
        ${proj.code} · ${proj.subtitle}
      </div>
      <h2 style="font-family:var(--font-serif); font-size:2.1rem; margin-bottom:6px;">${proj.title}</h2>
      <p style="font-family:var(--font-serif); font-style:italic; font-size:1.15rem; color:var(--klein-blue); margin-bottom:14px;">
        ${proj.question}
      </p>
      <p style="font-size:0.9rem; line-height:1.6; color:#222;">${proj.summary}</p>
      <div class="phase-grid">
        <div class="phase-card">
          <h4>01 · Investigación</h4>
          <p>${proj.phases.investigacion}</p>
        </div>
        <div class="phase-card">
          <h4>02 · Proceso</h4>
          <p>${proj.phases.proceso}</p>
        </div>
        <div class="phase-card">
          <h4>03 · Desarrollo</h4>
          <p>${proj.phases.desarrollo}</p>
        </div>
        <div class="phase-card">
          <h4>04 · Producto</h4>
          <p>${proj.phases.producto}</p>
        </div>
      </div>
    </div>
    <div class="dossier-gallery-grid">
      ${proj.images
        .map(
          (img, i) =>
            `<img class="${i === 0 ? "wide" : ""}" src="${img.src}" alt="${img.caption}" title="${img.caption}">`
        )
        .join("")}
    </div>
  `;
};

window.closeDossierModal = () => {
  document.getElementById("dossierModalBackdrop").classList.remove("open");
};

window.openHelpModal = () => {
  window.openDossierModal("help");
};

window.dismissWelcomeGuide = () => {
  const card = document.getElementById("welcomeGuideCard");
  if (card) {
    card.classList.add("dismissed");
    try {
      sessionStorage.setItem("ana_guide_dismissed", "1");
    } catch (_) {}
  }
};

// ============================================================================
// PANTALLA COMPLETA & MODO DIORAMA INMERSIVO
// ============================================================================

window.toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    const el = document.documentElement;
    if (el.requestFullscreen) {
      el.requestFullscreen().catch((err) => console.warn("Fullscreen no permitido:", err));
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch((err) => console.warn("Exit fullscreen error:", err));
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
};

window.toggleDioramaWide = () => {
  const stage = document.querySelector(".main-stage");
  if (!stage) return;
  const isWide = stage.classList.toggle("diorama-wide");
  const btn = document.getElementById("expandDioramaBtn");
  if (btn) {
    btn.innerHTML = isWide ? "⇱ Mostrar Panel Lateral" : "⇲ Expandir Diorama";
  }
  // Forzar redibujado inmediato del canvas adaptado al nuevo ancho
  setTimeout(() => {
    window.dispatchEvent(new Event("resize"));
  }, 50);
};

document.addEventListener("fullscreenchange", () => {
  const isFs = !!document.fullscreenElement;
  const fsBtn = document.getElementById("fullscreenBtn");
  if (fsBtn) {
    fsBtn.title = isFs ? "Salir de Pantalla Completa (F)" : "Pantalla Completa (F)";
    fsBtn.innerHTML = isFs
      ? '<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M4 14h6m0 0v6m0-6L3 21m17-7h-6m0 0v6m0-6l7 7M14 4h6m-6 0v6m0-6l7-7M4 10h6m0 0V4m0 6L3 3"/></svg>'
      : '<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>';
  }
  window.dispatchEvent(new Event("resize"));
});

// ============================================================================
// RENDERIZADOR 2.5D DEL EDIFICIO-DIORAMA EN CANVAS (60 FPS + RUST WASM)
// ============================================================================

function formatClock(hourDecimal) {
  const h = Math.floor(hourDecimal);
  const m = Math.floor((hourDecimal - h) * 60);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function drawDiorama(ctx, width, height) {
  if (!wasm) return;

  const t = wasm.get_time();
  const hour = wasm.get_hour_of_day();
  const activeFloor = wasm.get_target_floor();
  const playerX = wasm.get_player_x();
  const playerY = wasm.get_player_y();
  const walkPhase = wasm.get_walk_phase();
  const facing = wasm.get_facing_dir();

  // 1. Cielo dinámico según la hora del día (08:00 AM -> 19:30 PM)
  const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
  if (hour < 10.2) {
    // Mañana clara (08:00 - 09:30)
    skyGrad.addColorStop(0, "#cfdbe6");
    skyGrad.addColorStop(1, "#e8e4dc");
  } else if (hour < 14.0) {
    // Mediodía corporativo Telefónica (11:00)
    skyGrad.addColorStop(0, "#b9cde0");
    skyGrad.addColorStop(1, "#e2e5e8");
  } else if (hour < 17.8) {
    // Tarde cálida de biblioteca (16:00)
    skyGrad.addColorStop(0, "#d8cab8");
    skyGrad.addColorStop(1, "#e6dfd5");
  } else {
    // Atardecer dorado en las azoteas de Chile (19:30)
    skyGrad.addColorStop(0, "#c87d55");
    skyGrad.addColorStop(0.55, "#e6ad73");
    skyGrad.addColorStop(1, "#dfd3c3");
  }
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, width, height);

  // Silueta urbana de fondo (inspirada en Telefónica y Chile)
  ctx.fillStyle = hour > 17.5 ? "rgba(68, 48, 40, 0.16)" : "rgba(35, 55, 78, 0.09)";
  const buildings = [
    { x: 0.02, w: 0.09, h: 0.62 },
    { x: 0.12, w: 0.07, h: 0.48 },
    { x: 0.81, w: 0.08, h: 0.71 },
    { x: 0.90, w: 0.08, h: 0.54 },
  ];
  buildings.forEach((b) => {
    ctx.fillRect(b.x * width, height * (1 - b.h), b.w * width, height * b.h);
  });

  // Marca de agua editorial gigante "Ana Galilea" en el cielo
  ctx.save();
  ctx.font = `800 ${Math.round(width * 0.095)}px 'Playfair Display', Georgia, serif`;
  ctx.fillStyle = "rgba(0, 24, 255, 0.055)";
  ctx.textAlign = "center";
  ctx.fillText("Ana Galilea", width * 0.5, height * 0.14);
  ctx.restore();

  // Geometría del Edificio Seccionado (5 niveles: P0 abajo .. P4 azotea arriba)
  const bLeft = Math.round(width * 0.12);
  const bRight = Math.round(width * 0.88);
  const bWidth = bRight - bLeft;
  const bBottom = Math.round(height * 0.91);
  const bTop = Math.round(height * 0.13);
  const totalH = bBottom - bTop;
  const floorH = totalH / 5;
  const stairColW = Math.round(bWidth * 0.15);

  // Sombra arquitectónica e isometría lateral derecha
  const isoDepth = 18;
  ctx.fillStyle = "rgba(18, 22, 30, 0.12)";
  ctx.fillRect(bLeft - 10, bBottom, bWidth + 30, 14);

  // Pared lateral 2.5D (derecha)
  ctx.fillStyle = "#234b6e";
  ctx.beginPath();
  ctx.moveTo(bRight, bTop + floorH * 0.6);
  ctx.lineTo(bRight + isoDepth, bTop + floorH * 0.6 - 12);
  ctx.lineTo(bRight + isoDepth, bBottom - 12);
  ctx.lineTo(bRight, bBottom);
  ctx.closePath();
  ctx.fill();

  // Dibujar cada una de las 5 plantas (de abajo 0 hacia arriba 4)
  for (let f = 0; f < 5; f++) {
    const fyBottom = bBottom - f * floorH;
    const fyTop = fyBottom - floorH;
    const isSelected = f === activeFloor;

    // Fondo de cada estancia
    if (f === 4) {
      // Planta 4: Azotea abierta al cielo (03. Chile)
      ctx.fillStyle = isSelected ? "rgba(255, 248, 236, 0.55)" : "rgba(240, 232, 220, 0.35)";
      ctx.fillRect(bLeft, fyTop + floorH * 0.35, bWidth, floorH * 0.65);
    } else if (f === 2) {
      // Planta 2: Oficina Telefónica con Tom (Azul arquitectónico del render)
      ctx.fillStyle = isSelected ? "#244c70" : "#1d3d59";
      ctx.fillRect(bLeft, fyTop, bWidth, floorH);
    } else if (f === 3) {
      // Planta 3: Biblioteca / Estudio Focus
      ctx.fillStyle = isSelected ? "#e9e2d6" : "#dad3c7";
      ctx.fillRect(bLeft, fyTop, bWidth, floorH);
    } else if (f === 1) {
      // Planta 1: Kiosco Urbano Tacto
      ctx.fillStyle = isSelected ? "#e4e7ea" : "#d5d8dc";
      ctx.fillRect(bLeft, fyTop, bWidth, floorH);
    } else {
      // Planta 0: Cocina Cafeliko
      ctx.fillStyle = isSelected ? "#efe9dd" : "#e2dccf";
      ctx.fillRect(bLeft, fyTop, bWidth, floorH);
    }

    // Columna izquierda: Núcleo de escaleras azules (inspirado en el edificio de Tom)
    if (f < 4) {
      ctx.fillStyle = f === 2 ? "#183652" : "#2b5478";
      ctx.fillRect(bLeft, fyTop, stairColW, floorH);

      // Peldaños diagonales de la escalera
      ctx.strokeStyle = "#8cb4d8";
      ctx.lineWidth = 2;
      for (let s = 0; s < 7; s++) {
        const sx = bLeft + 10 + (s / 7) * (stairColW - 22);
        const sy = fyBottom - 6 - (s / 7) * (floorH - 14);
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx + 10, sy);
        ctx.stroke();
      }
    }

    // Contenido interactivo específico de cada planta
    drawFloorInterior(ctx, f, bLeft + stairColW, fyTop, bWidth - stairColW, floorH, t);

    // Forjado / Losa arquitectónica de hormigón cálido
    ctx.fillStyle = isSelected ? "#0018ff" : "#c8c2b6";
    ctx.fillRect(bLeft - 4, fyBottom - 6, bWidth + 8, 6);

    // Etiqueta de planta a la izquierda del edificio
    ctx.save();
    const tagY = fyTop + floorH * 0.52;
    ctx.fillStyle = isSelected ? "#0018ff" : "rgba(18, 19, 22, 0.72)";
    ctx.beginPath();
    ctx.roundRect(14, tagY - 16, bLeft - 24, 32, 6);
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.font = "700 11px 'JetBrains Mono', monospace";
    ctx.textAlign = "center";
    const labels = ["P0 · 04 CAFELIKO", "P1 · 00 TACTO", "P2 · 01 TOM VR", "P3 · 02 FOCUS", "P4 · 03 CHILE"];
    ctx.fillText(labels[f], 14 + (bLeft - 24) / 2, tagY + 4);
    ctx.restore();
  }

  // Dibujar al personaje (Ana Galilea) caminando por el edificio
  const charX = bLeft + playerX * bWidth;
  const charFloorBaseY = bBottom - playerY * floorH - 6;
  const bob = Math.abs(Math.sin(walkPhase)) * 4;

  ctx.save();
  ctx.translate(charX, charFloorBaseY - bob);
  // Sombra bajo los pies
  ctx.fillStyle = "rgba(0,0,0,0.22)";
  ctx.beginPath();
  ctx.ellipse(0, bob, 11, 4, 0, 0, Math.PI * 2);
  ctx.fill();
  // Piernas animadas
  const legSwing = Math.sin(walkPhase) * 5;
  ctx.strokeStyle = "#121316";
  ctx.lineWidth = 3.5;
  ctx.beginPath();
  ctx.moveTo(-3, -12);
  ctx.lineTo(-3 - legSwing, 0);
  ctx.moveTo(3, -12);
  ctx.lineTo(3 + legSwing, 0);
  ctx.stroke();
  // Cuerpo (Jersey azul eléctrico Klein de su identidad)
  ctx.fillStyle = "#0018ff";
  ctx.beginPath();
  ctx.roundRect(-8, -30, 16, 19, 5);
  ctx.fill();
  // Cabeza
  ctx.fillStyle = "#f4cbb2";
  ctx.beginPath();
  ctx.arc(0, -37, 7, 0, Math.PI * 2);
  ctx.fill();
  // Pelo castaño
  ctx.fillStyle = "#2b1d16";
  ctx.beginPath();
  ctx.arc(0, -39, 7.2, Math.PI, Math.PI * 2);
  ctx.fill();
  // Etiqueta flotante "ANA"
  ctx.fillStyle = "#0018ff";
  ctx.font = "800 10px 'Plus Jakarta Sans', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("ANA", 0, -49);
  ctx.restore();

  // Dibujar partículas reales desde la memoria lineal de Rust WASM
  if (wasmMemory) {
    const ptr = wasm.get_particles_ptr();
    const len = wasm.get_particles_len();
    // struct Particle: 7 floats (28 bytes) + u8 kind + 3 padding = 32 bytes
    const f32View = new Float32Array(wasmMemory.buffer, ptr, len * 8);
    const u8View = new Uint8Array(wasmMemory.buffer, ptr, len * 32);

    for (let i = 0; i < len; i++) {
      const kind = u8View[i * 32 + 28];
      if (kind === 0) continue;
      const px = f32View[i * 8 + 0];
      const py = f32View[i * 8 + 1];
      const life = f32View[i * 8 + 4];
      const maxLife = f32View[i * 8 + 5];
      const sz = f32View[i * 8 + 6];
      const alpha = Math.max(0, Math.min(1, life / maxLife));

      const screenX = bLeft + px * bWidth;
      const screenY = bBottom - py * floorH;

      ctx.save();
      if (kind === 1) {
        // Vapor aromático de Cafeliko
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.75})`;
      } else if (kind === 2) {
        // Ruido digital en Tacto
        ctx.fillStyle = `rgba(255, 45, 85, ${alpha * 0.85})`;
      } else if (kind === 3) {
        // Orbes naranjas de Telefónica con Tom
        ctx.fillStyle = `rgba(255, 122, 26, ${alpha})`;
      } else if (kind === 4) {
        // Aura Zen Pomodoro de Focus
        ctx.fillStyle = `rgba(31, 157, 98, ${alpha * 0.65})`;
      } else {
        // Semillas de Chile del fío-fío
        ctx.fillStyle = `rgba(176, 78, 54, ${alpha})`;
      }
      ctx.beginPath();
      ctx.arc(screenX, screenY, sz, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // Actualizar reloj HUD
  const clockEl = document.getElementById("hudClockTime");
  const routineEl = document.getElementById("hudClockRoutine");
  if (clockEl && routineEl) {
    clockEl.textContent = formatClock(hour);
    routineEl.textContent = PROJECTS_DATA[activeFloor].timeLabel.split("·")[1].trim();
  }
}

function drawInteractiveBeacon(ctx, x, y, label, color = "#0018ff") {
  const t = performance.now() / 1000;
  const pulse = Math.sin(t * 3.5) * 0.5 + 0.5;

  ctx.save();
  // Halo pulsante
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.25 + pulse * 0.35;
  ctx.beginPath();
  ctx.arc(x, y, 7 + pulse * 4, 0, Math.PI * 2);
  ctx.fill();

  ctx.globalAlpha = 1.0;
  ctx.beginPath();
  ctx.arc(x, y, 4, 0, Math.PI * 2);
  ctx.fill();

  // Etiqueta flotante con borde sutil
  ctx.font = "700 9px 'Plus Jakarta Sans', sans-serif";
  const metrics = ctx.measureText(label);
  const pw = metrics.width + 12;
  const ph = 17;
  const px = x - pw / 2;
  const py = y - 24;

  ctx.fillStyle = "rgba(18, 19, 22, 0.90)";
  ctx.beginPath();
  ctx.roundRect(px, py, pw, ph, 4);
  ctx.fill();

  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, x, py + ph / 2);
  ctx.restore();
}

function drawFloorInterior(ctx, floor, rx, ry, rw, rh, t) {
  if (floor === 0) {
    // PLANTA 0: COCINA CAFELIKO (Encimera, 3 cilindros dispensadores y Cafetera Italiana)
    const grade = wasm.get_cafeliko_grade();
    const step = wasm.get_cafeliko_step();
    const brew = wasm.get_cafeliko_brew_progress();

    // Azulejos de cocina sutiles
    ctx.strokeStyle = "rgba(0,0,0,0.05)";
    ctx.lineWidth = 1;
    for (let gx = rx; gx < rx + rw; gx += 28) {
      ctx.beginPath();
      ctx.moveTo(gx, ry);
      ctx.lineTo(gx, ry + rh);
      ctx.stroke();
    }
    // Encimera
    const counterY = ry + rh * 0.68;
    ctx.fillStyle = "#d5c7b2";
    ctx.fillRect(rx + 18, counterY, rw - 36, rh * 0.32 - 6);

    // Pack vertical de 3 cilindros Cafeliko (LIGHT, CLASSICO, SUPER)
    const packX = rx + rw * 0.25;
    const packY = counterY - 58;
    ctx.fillStyle = "#c7b699";
    ctx.fillRect(packX, packY, 64, 58);
    const colors = ["#d7c39d", "#c98859", "#8c9a7c"];
    const names = ["LIGHT", "CLASSICO", "SUPER"];
    for (let c = 0; c < 3; c++) {
      ctx.fillStyle = colors[c];
      ctx.fillRect(packX + 5, packY + 4 + c * 18, 54, 15);
      if (grade === c) {
        ctx.strokeStyle = "#0018ff";
        ctx.lineWidth = 2;
        ctx.strokeRect(packX + 4, packY + 3 + c * 18, 56, 17);
      }
      ctx.fillStyle = "#1f2226";
      ctx.font = "700 8px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      ctx.fillText(names[c], packX + 32, packY + 14 + c * 18);
    }

    // Tira dispensadora saliendo si step >= 2
    if (step >= 2) {
      ctx.fillStyle = colors[grade];
      ctx.fillRect(packX + 20, counterY, 24, 18);
    }

    // Cafetera Italiana octogonal
    const mokaX = rx + rw * 0.56;
    const mokaY = counterY;
    ctx.fillStyle = "#9da1a6";
    // Base octogonal
    ctx.beginPath();
    ctx.moveTo(mokaX - 14, mokaY);
    ctx.lineTo(mokaX + 14, mokaY);
    ctx.lineTo(mokaX + 10, mokaY - 22);
    ctx.lineTo(mokaX - 10, mokaY - 22);
    ctx.closePath();
    ctx.fill();
    // Cuerpo superior (desenroscado si step === 1 || step === 3)
    const lift = step === 1 || step === 3 ? -12 : 0;
    ctx.fillStyle = "#b8bcc2";
    ctx.beginPath();
    ctx.moveTo(mokaX - 10, mokaY - 22 + lift);
    ctx.lineTo(mokaX + 10, mokaY - 22 + lift);
    ctx.lineTo(mokaX + 15, mokaY - 46 + lift);
    ctx.lineTo(mokaX - 15, mokaY - 46 + lift);
    ctx.closePath();
    ctx.fill();

    // Indicador visual interactivo sobre la cafetera
    drawInteractiveBeacon(ctx, mokaX, mokaY - 58, "☕ Cafetera Cafeliko", "#c98859");

    // Etiqueta de estado
    ctx.fillStyle = "#121316";
    ctx.font = "700 11px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(
      step === 6
        ? "☕ ¡Cafeliko servido! (Haz clic para probar otro grado)"
        : step === 5
        ? `🔥 Infusionando Cafeliko (${Math.round(brew * 100)}%)...`
        : `04. Cafeliko · Paso ${step}/6 (${names[grade]})`,
      rx + 22,
      ry + 22
    );
  } else if (floor === 1) {
    // PLANTA 1: KIOSCO URBANO TACTO (Buzón metálico con cannage + Periódico físico)
    const isOpen = wasm.get_tacto_open() === 1;
    const stress = wasm.get_tacto_stress();
    const page = wasm.get_tacto_page();

    // Franja azul de marquesina de autobús (como en la foto de la página 7)
    ctx.fillStyle = "rgba(0, 72, 180, 0.25)";
    ctx.fillRect(rx, ry + rh * 0.42, rw, 14);

    // Buzón metálico de Tacto con ventana de rejilla cannage
    const rackX = rx + rw * 0.28;
    const rackY = ry + rh * 0.34;
    ctx.fillStyle = "#8a99a4";
    ctx.beginPath();
    ctx.moveTo(rackX - 24, rackY);
    ctx.lineTo(rackX + 26, rackY);
    ctx.lineTo(rackX + 16, rackY + 52);
    ctx.lineTo(rackX - 16, rackY + 52);
    ctx.closePath();
    ctx.fill();
    // Detalle cannage beige
    ctx.fillStyle = "#d9c89e";
    ctx.beginPath();
    ctx.arc(rackX, rackY + 32, 11, 0, Math.PI * 2);
    ctx.fill();
    // Rollos de periódico TACTO asomando
    ctx.fillStyle = "#ffffff";
    ctx.save();
    ctx.translate(rackX + 6, rackY - 4);
    ctx.rotate(-0.3);
    ctx.fillRect(-6, -18, 12, 24);
    ctx.fillStyle = "#111";
    ctx.font = "800 6px sans-serif";
    ctx.fillText("TACTO", -5, -4);
    ctx.restore();

    // Indicador visual interactivo sobre el buzón cannage
    drawInteractiveBeacon(ctx, rackX, rackY - 18, "📰 Buzón Tacto", "#0018ff");

    // Si el periódico está abierto, mostrar doble página desplegada
    if (isOpen) {
      const npX = rx + rw * 0.62;
      const npY = ry + rh * 0.22;
      ctx.fillStyle = "#fdfdfb";
      ctx.strokeStyle = "#121316";
      ctx.lineWidth = 1.5;
      ctx.fillRect(npX - 48, npY, 96, 56);
      ctx.strokeRect(npX - 48, npY, 96, 56);
      ctx.beginPath();
      ctx.moveTo(npX, npY);
      ctx.lineTo(npX, npY + 56);
      ctx.stroke();
      ctx.fillStyle = "#0018ff";
      ctx.font = "800 10px 'Playfair Display', serif";
      ctx.textAlign = "center";
      const spreadShort = ["TACTO vol.01", "JERGA GEN-Z", "@UNKIID", "¿MARIANO RAJOY?", "GYMRATS & DIY"];
      ctx.fillText(spreadShort[page], npX, npY + 30);
    }

    ctx.fillStyle = stress > 0.5 && !isOpen ? "#c91e3a" : "#121316";
    ctx.font = "700 11px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(
      isOpen
        ? `00. Tacto · Leyendo pág. ${page + 1}/5 (Tregua visual activa)`
        : `00. Tacto · Saturación digital ${Math.round(stress * 100)}% — ¡Coge el periódico del buzón!`,
      rx + 22,
      ry + 22
    );
  } else if (floor === 2) {
    // PLANTA 2: TELEFÓNICA CON TOM (Robot flotante Tom + 9 Ítems naranjas + Mesa corporativa)
    const tomX = wasm.get_tom_x();
    const itemsMask = wasm.get_tom_items_mask();
    const collected = wasm.get_tom_items_collected();
    const unlocked = wasm.get_tom_unlocked_level();

    // Ventanales corporativos
    ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
    for (let w = 0; w < 4; w++) {
      ctx.fillRect(rx + rw * 0.55 + w * 42, ry + 14, 32, rh - 24);
    }

    // Ítems naranjas flotantes de Telefónica (los puntos naranjas con los círculos de Telefónica de la pág. 14)
    const itemNorms = [0.24, 0.38, 0.54, 0.30, 0.48, 0.68, 0.26, 0.58, 0.80];
    const maxItems = unlocked * 3;
    for (let i = 0; i < maxItems; i++) {
      if ((itemsMask & (1 << i)) !== 0) continue;
      const ix = rx + (itemNorms[i] - 0.12) * rw;
      const iy = ry + rh * 0.52 + Math.sin(t * 4 + i) * 5;
      ctx.fillStyle = "#ff7a1a";
      ctx.beginPath();
      ctx.arc(ix, iy, 9, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.font = "800 8px monospace";
      ctx.textAlign = "center";
      ctx.fillText("T", ix, iy + 3);
    }

    // Dibujar al robot asistente virtual TOM (azul eléctrico con antenas y ojos expresivos)
    const tx = rx + (tomX - 0.12) * rw;
    const ty = ry + rh * 0.54 + Math.sin(t * 3.4) * 6;
    ctx.save();
    ctx.translate(tx, ty);
    // Cuerpo flotante
    ctx.fillStyle = "#1d3bff";
    ctx.beginPath();
    ctx.ellipse(0, 8, 11, 14, 0, 0, Math.PI * 2);
    ctx.fill();
    // Cabeza ovalada
    ctx.beginPath();
    ctx.ellipse(0, -12, 15, 12, 0, 0, Math.PI * 2);
    ctx.fill();
    // Antenas laterales
    ctx.strokeStyle = "#6e85ff";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(-15, -12);
    ctx.lineTo(-17, -23);
    ctx.moveTo(15, -12);
    ctx.lineTo(17, -23);
    ctx.stroke();
    // Ojos negros
    ctx.fillStyle = "#0a0c12";
    ctx.beginPath();
    ctx.ellipse(-5, -12, 2.5, 4.5, 0, 0, Math.PI * 2);
    ctx.ellipse(5, -12, 2.5, 4.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Indicador visual interactivo sobre el asistente virtual Tom
    drawInteractiveBeacon(ctx, tx, ty - 34, "🟠 Asistente Tom VR", "#ff7a1a");

    ctx.fillStyle = "#ffffff";
    ctx.font = "700 11px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(
      `01. Telefónica con Tom · ${collected}/9 ítems recogidos (Planta ${unlocked}/3 activa)`,
      rx + 22,
      ry + 22
    );
  } else if (floor === 3) {
    // PLANTA 3: ESTUDIO / BIBLIOTECA FOCUS (Estantería, Mesa de estudio y Cúpula Pop-Up Focus)
    const deploy = wasm.get_focus_deploy_anim();
    const locked = wasm.get_focus_phone_locked() === 1;
    const secs = Math.ceil(wasm.get_focus_pomodoro_secs());
    const mins = String(Math.floor(secs / 60)).padStart(2, "0");
    const remS = String(secs % 60).padStart(2, "0");

    // Estantería de biblioteca al fondo
    ctx.fillStyle = "rgba(110, 78, 46, 0.18)";
    ctx.fillRect(rx + 20, ry + 28, rw * 0.28, rh - 36);

    // Mesa de estudio
    const deskX = rx + rw * 0.52;
    const deskY = ry + rh * 0.68;
    ctx.fillStyle = "#5c402c";
    ctx.fillRect(deskX - 70, deskY, 140, 7);
    ctx.fillRect(deskX - 58, deskY + 7, 6, rh * 0.32 - 13);
    ctx.fillRect(deskX + 52, deskY + 7, 6, rh * 0.32 - 13);

    // Cabina Pop-Up Focus sobre la mesa (escala según deploy 0.0 -> 1.0)
    ctx.save();
    ctx.translate(deskX, deskY);
    if (deploy < 0.25) {
      // Disco plegado con correa y puntos rojos (pág. 23)
      ctx.fillStyle = "#efeee9";
      ctx.strokeStyle = "#222";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, -18, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#d91b1b";
      ctx.beginPath();
      ctx.arc(0, -24, 3, 0, Math.PI * 2);
      ctx.arc(0, -12, 3, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Cúpula parabólica Focus desplegada con reloj digital 18:43 / Pomodoro
      const scale = Math.min(1, deploy);
      ctx.scale(scale, scale);
      ctx.fillStyle = locked ? "#f4f5f0" : "#e3e1da";
      ctx.beginPath();
      ctx.moveTo(-44, 0);
      ctx.quadraticCurveTo(-40, -68, 4, -64);
      ctx.quadraticCurveTo(42, -58, 46, 0);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = locked ? "#1f9d62" : "#0018ff";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Bolsillo Focus con pantalla digital verde
      ctx.fillStyle = "#26332c";
      ctx.beginPath();
      ctx.roundRect(6, -24, 30, 14, 4);
      ctx.fill();
      ctx.fillStyle = "#48ff9b";
      ctx.font = "700 8px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      ctx.fillText(locked ? `${mins}:${remS}` : "18:43", 21, -14);
    }
    ctx.restore();

    // Indicador visual interactivo sobre la cabina Focus
    drawInteractiveBeacon(ctx, deskX, deskY - 65, "🔒 Cabina Focus", "#1f9d62");

    ctx.fillStyle = "#121316";
    ctx.font = "700 11px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(
      locked
        ? `02. Focus · Céntrate en ti — Móvil bloqueado (${mins}:${remS})`
        : "02. Focus · Despliega la cabina Pop-Up y bloquea el móvil en el Bolsillo Focus",
      rx + 22,
      ry + 22
    );
  } else if (floor === 4) {
    // PLANTA 4: AZOTEA CHILE (3 Refugios biodegradables + Estructura Voronoi + Tierra fértil + Ave fío-fío)
    const birdX = wasm.get_bird_x();
    const birdY = wasm.get_bird_y();
    const wing = wasm.get_bird_wing_phase();
    const exploded = wasm.get_chile_exploded_view();

    const baseY = ry + rh - 8;
    const voronoiOffset = exploded * 22;
    const shelterOffset = exploded * 44;

    // Capa 1 (Inferior): Sustrato de tierra fértil + Brotes de chile
    ctx.fillStyle = "#4e3222";
    ctx.fillRect(rx + rw * 0.22, baseY - 14, rw * 0.58, 14);
    for (let i = 0; i < 8; i++) {
      const growth = wasm.get_chile_sprout(i);
      const sx = rx + rw * (0.26 + i * 0.068);
      const sh = 4 + growth * 18;
      ctx.strokeStyle = "#3ca846";
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(sx, baseY - 14);
      ctx.lineTo(sx, baseY - 14 - sh);
      ctx.stroke();
      // Hojitas
      ctx.fillStyle = "#4cd158";
      ctx.beginPath();
      ctx.ellipse(sx - 4, baseY - 14 - sh, 4, 2, -0.4, 0, Math.PI * 2);
      ctx.ellipse(sx + 4, baseY - 14 - sh, 4, 2, 0.4, 0, Math.PI * 2);
      ctx.fill();
    }

    // Capa 2 (Intermedia): Estructura Voronoi terracota
    const vy = baseY - 18 - voronoiOffset;
    ctx.fillStyle = "#b04e36";
    ctx.fillRect(rx + rw * 0.24, vy, rw * 0.54, 5);

    // Capa 3 (Superior): 3 Refugios biodegradables ovoides con entrada circular (pág. 26 y 29)
    const sy = baseY - 18 - shelterOffset;
    const shelterPositions = [0.36, 0.50, 0.64];
    shelterPositions.forEach((norm) => {
      const sx = rx + rw * norm;
      ctx.fillStyle = "#cbb592";
      ctx.beginPath();
      ctx.ellipse(sx, sy - 16, 18, 20, 0, 0, Math.PI * 2);
      ctx.fill();
      // Cavidad de entrada para el fío-fío
      ctx.fillStyle = "#4a3728";
      ctx.beginPath();
      ctx.arc(sx - 3, sy - 13, 8, 0, Math.PI * 2);
      ctx.fill();
    });

    // Indicador visual interactivo sobre los refugios de la azotea
    drawInteractiveBeacon(ctx, rx + rw * 0.50, sy - 38, "🐦 Refugios Chile", "#b04e36");

    // Dibujar al ave "fío-fío" (Elaenia albiceps) en vuelo sobre la azotea
    const bx = rx + birdX * rw;
    const by = ry + (1 - birdY) * (rh - 24);
    const wingY = Math.sin(wing) * 9;
    ctx.save();
    ctx.translate(bx, by);
    ctx.fillStyle = "#463d33";
    ctx.beginPath();
    ctx.ellipse(0, 0, 10, 5, -0.15, 0, Math.PI * 2);
    ctx.fill();
    // Alas animadas
    ctx.strokeStyle = "#2c251e";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(-2, -1);
    ctx.quadraticCurveTo(-8, -10 - wingY, -14, -4 - wingY);
    ctx.moveTo(2, -1);
    ctx.quadraticCurveTo(8, -10 - wingY, 14, -4 - wingY);
    ctx.stroke();
    ctx.restore();

    ctx.fillStyle = "#121316";
    ctx.font = "700 11px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(
      exploded > 0.3
        ? "03. Chile · Vista Explosionada: (1) Refugios Biodegradables + (2) Voronoi + (3) Tierra Fértil"
        : "03. Chile · Alimenta el vuelo — Haz clic en la azotea para volar con el ave fío-fío",
      rx + 22,
      ry + 20
    );
  }
}

// ============================================================================
// INICIALIZACIÓN E INTERACCIÓN EN EL CANVAS Y TECLADO
// ============================================================================

async function startApp() {
  wasm = await loadRustWasm();
  wasmMemory = wasm.memory;
  wasm.init_world();

  const canvas = document.getElementById("dioramaCanvas");
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  // Clic directo sobre el edificio-diorama: cambiar de planta, mover a Ana o volar el ave fío-fío
  canvas.addEventListener("pointerdown", (ev) => {
    const rect = canvas.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;

    const bTop = rect.height * 0.13;
    const bBottom = rect.height * 0.91;
    const bLeft = rect.width * 0.12;
    const bRight = rect.width * 0.88;

    if (y >= bTop && y <= bBottom) {
      const floorH = (bBottom - bTop) / 5;
      const clickedFloor = Math.max(0, Math.min(4, Math.floor((bBottom - y) / floorH)));
      const prevFloor = wasm.get_target_floor();

      if (clickedFloor !== prevFloor) {
        selectFloor(clickedFloor);
      }

      if (x >= bLeft && x <= bRight) {
        const normX = (x - bLeft) / (bRight - bLeft);
        wasm.move_player_to(normX);

        // Acciones contextuales al hacer clic en cada planta
        if (clickedFloor === 4) {
          const floorLocalY = 1 - (y - (bBottom - 5 * floorH)) / floorH;
          wasm.chile_fly_bird_to(normX, floorLocalY);
        } else if (clickedFloor === 0 && normX > 0.45) {
          window.handleCafelikoStep();
        } else if (clickedFloor === 1 && normX > 0.25) {
          window.handleTactoToggle();
        } else if (clickedFloor === 3 && normX > 0.45) {
          window.handleFocusPopup();
        }
      }
    }
  });

  // Controles de teclado (Flechas / WASD para caminar y cambiar de planta)
  window.addEventListener("keydown", (ev) => {
    if (!wasm) return;
    if (ev.key === "ArrowUp" || ev.key === "w" || ev.key === "W") {
      const next = Math.min(4, wasm.get_target_floor() + 1);
      selectFloor(next);
    } else if (ev.key === "ArrowDown" || ev.key === "s" || ev.key === "S") {
      const prev = Math.max(0, wasm.get_target_floor() - 1);
      selectFloor(prev);
    } else if (ev.key === "ArrowLeft" || ev.key === "a" || ev.key === "A") {
      wasm.move_player_to(wasm.get_player_x() - 0.12);
    } else if (ev.key === "ArrowRight" || ev.key === "d" || ev.key === "D") {
      wasm.move_player_to(wasm.get_player_x() + 0.12);
    } else if (ev.key === "Escape") {
      window.closeDossierModal();
    } else if (ev.key === "f" || ev.key === "F") {
      window.toggleFullscreen();
    }
  });

  // Comprobar si el usuario ya cerró la guía de bienvenida en esta sesión
  try {
    if (sessionStorage.getItem("ana_guide_dismissed") === "1") {
      const card = document.getElementById("welcomeGuideCard");
      if (card) card.classList.add("dismissed");
    }
  } catch (_) {}

  // Render inicial en Planta 0 (08:00 AM)
  selectFloor(0);

  let lastTime = performance.now();
  let lastCafelikoStep = -1;
  let lastFocusSecs = -1;
  let lastGrownCount = -1;

  function frame(now) {
    const dt = (now - lastTime) / 1000;
    lastTime = now;

    wasm.tick_world(dt);
    const rect = canvas.parentElement.getBoundingClientRect();
    drawDiorama(ctx, rect.width, rect.height);

    // Actualizaciones dinámicas ligeras de texto SIN destruir el DOM:
    const af = wasm.get_target_floor();
    if (af === 0) {
      const curStep = wasm.get_cafeliko_step();
      if (curStep !== lastCafelikoStep) {
        lastCafelikoStep = curStep;
        renderMinigameControls(0);
        updateTopNav(0);
      } else if (curStep === 5) {
        const brew = wasm.get_cafeliko_brew_progress();
        const badge = document.getElementById("cafelikoStatusBadge");
        if (badge) badge.textContent = `🔥 Infusionando (${Math.round(brew * 100)}%)...`;
      }
    } else if (af === 3) {
      const locked = wasm.get_focus_phone_locked() === 1;
      if (locked) {
        const secs = Math.ceil(wasm.get_focus_pomodoro_secs());
        if (secs !== lastFocusSecs) {
          lastFocusSecs = secs;
          const mins = String(Math.floor(secs / 60)).padStart(2, "0");
          const remS = String(secs % 60).padStart(2, "0");
          const timerEl = document.getElementById("focusTimerBadge");
          if (timerEl) {
            timerEl.textContent = `⏱ Pomodoro ${mins}:${remS}`;
          }
        }
      }
    } else if (af === 4) {
      let grownCount = 0;
      for (let i = 0; i < 8; i++) {
        if (wasm.get_chile_sprout(i) > 0.7) grownCount++;
      }
      if (grownCount !== lastGrownCount) {
        lastGrownCount = grownCount;
        const statusEl = document.getElementById("chileSproutsBadge");
        if (statusEl) {
          statusEl.textContent = `${grownCount}/8 Brotes Germinados`;
        }
      }
    }

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

window.addEventListener("DOMContentLoaded", startApp);
