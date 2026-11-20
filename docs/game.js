/**
 * ANA GALILEA · DISEÑO DE PRODUCTO (PORTFOLIO 2025)
 * Editorial Studio Experience (Garaje de Ideas-inspired) + Motor 2.5D Rust/WASM
 */

const PROJECTS_DATA = [
  {
    floor: 0,
    num: "04",
    code: "//Cafeliko",
    hourShort: "08:00",
    place: "La Cocina",
    timeLabel: "08:00 AM · La Cocina",
    title: "Cafeliko",
    subtitle: "Producto · Packaging · Servicio",
    question: "¿Se podrían crear grados de cafeína?",
    statBig: "55% / 80%",
    statText:
      "55% no bebe café por la tarde porque le quita el sueño · 80% considera la cafetera italiana un proceso sucio e incómodo.",
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
    hourShort: "09:30",
    place: "El Kiosco Urbano",
    timeLabel: "09:30 AM · El Kiosco Urbano",
    title: "tacto (TFG | IED Madrid)",
    subtitle: "Producto · Editorial · Servicio",
    question: "¿Cómo tangibilizar tu pantalla?",
    statBig: "63%",
    statText:
      "de los jóvenes de entre 18 y 34 años pasa más de 2 horas al día en redes sociales (hipermediación digital y fatiga mental).",
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
    hourShort: "11:00",
    place: "Oficina Telefónica",
    timeLabel: "11:00 AM · Oficina Telefónica",
    title: "Telefónica con Tom",
    subtitle: "Experiencia VR · Onboarding",
    question: "¿Cómo integrar a un nuevo empleado joven sin abrumarlo?",
    statBig: "75% / 31%",
    statText:
      "75% de profesionales sintió soledad durante su llegada · 31% abandona la empresa debido a un mal proceso de onboarding.",
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
    hourShort: "16:00",
    place: "El Estudio",
    timeLabel: "04:00 PM · El Estudio",
    title: "focus",
    subtitle: "Producto · Experiencia",
    question: "¿Cómo podemos limitar el uso de redes sociales?",
    statBig: "70%",
    statText:
      "de los jóvenes de entre 12 y 30 años en países desarrollados tiene una media de consumo diario del móvil superior a 5 horas.",
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
    hourShort: "19:30",
    place: "La Azotea",
    timeLabel: "07:30 PM · La Azotea",
    title: "Chile",
    subtitle: "Experiencia · Infraestructura",
    question: "¿Aprovechar la naturaleza de un ave para la distribución del chile?",
    statBig: "75%",
    statText:
      "de las emisiones globales se deben a combustibles fósiles · El ave «fío-fío» (Elaenia albiceps) se encarga de la dispersión natural del chile.",
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
let activeSwitcherIdx = 0;

// ============================================================================
// 1. PRELOADER CINÉTICO (Inspirado en la entrada de Garaje de Ideas)
// ============================================================================
function initPreloader() {
  const preloader = document.getElementById("preloader");
  const wordEl = document.getElementById("preloaderWord");
  const progressEl = document.getElementById("preloaderProgress");
  const skipBtn = document.getElementById("preloaderSkipBtn");
  if (!preloader || !wordEl) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let alreadySeen = false;
  try {
    alreadySeen = sessionStorage.getItem("ana_preloader_seen") === "1";
  } catch (_) {}

  const hasDeepLink = Boolean(window.location.hash) || window.location.search.includes("skip=1");
  if (prefersReduced || alreadySeen || hasDeepLink) {
    preloader.classList.add("instant-done");
    return;
  }

  const sequence = [
    { text: "DISEÑO TANGIBLE", accent: false },
    { text: "RITUALES COTIDIANOS", accent: false },
    { text: "PRODUCTO & SERVICIO", accent: false },
    { text: "ANA GALILEA", accent: true },
  ];

  let idx = 0;
  let timer = null;
  let finished = false;

  function closePreloader() {
    if (finished) return;
    finished = true;
    clearTimeout(timer);
    preloader.classList.add("done");
    try {
      sessionStorage.setItem("ana_preloader_seen", "1");
    } catch (_) {}
  }

  function renderWord(item) {
    wordEl.className = `preloader-word ${item.accent ? "is-accent" : ""}`;
    wordEl.innerHTML = item.text
      .split("")
      .map((ch, i) => {
        const display = ch === " " ? "&nbsp;" : ch;
        return `<span class="char" style="animation-delay:${i * 22}ms">${display}</span>`;
      })
      .join("");
    if (progressEl) {
      progressEl.style.width = `${((idx + 1) / sequence.length) * 100}%`;
    }
  }

  function step() {
    if (finished) return;
    renderWord(sequence[idx]);
    idx++;
    if (idx < sequence.length) {
      timer = setTimeout(step, 380);
    } else {
      timer = setTimeout(closePreloader, 520);
    }
  }

  if (skipBtn) {
    skipBtn.addEventListener("click", closePreloader);
  }

  step();
}

// ============================================================================
// 2. MENÚ FULLSCREEN "+" & RELOJ DE MADRID
// ============================================================================
function initNavOverlay() {
  const btn = document.getElementById("menuToggleBtn");
  const overlay = document.getElementById("navOverlay");
  const clockEl = document.getElementById("madridLiveClock");
  if (!btn || !overlay) return;

  function updateClock() {
    if (!clockEl) return;
    try {
      const now = new Date();
      const fmt = new Intl.DateTimeFormat("es-ES", {
        timeZone: "Europe/Madrid",
        hour: "2-digit",
        minute: "2-digit",
      }).format(now);
      clockEl.textContent = `MADRID · ${fmt}`;
    } catch (_) {
      clockEl.textContent = "MADRID · CET";
    }
  }
  updateClock();
  setInterval(updateClock, 30000);

  window.closeNavOverlay = () => {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    btn.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
  };

  btn.addEventListener("click", () => {
    const willOpen = !overlay.classList.contains("open");
    overlay.classList.toggle("open", willOpen);
    overlay.setAttribute("aria-hidden", String(!willOpen));
    btn.classList.toggle("open", willOpen);
    btn.setAttribute("aria-expanded", String(willOpen));
    document.body.classList.toggle("no-scroll", willOpen);
  });
}

// ============================================================================
// 3. HERO EDITORIAL REEL (Con botón Pause / Play estilo Garaje)
// ============================================================================
function initHeroReel() {
  const slidesWrap = document.getElementById("heroReelSlides");
  const dotsWrap = document.getElementById("reelDots");
  const counterEl = document.getElementById("reelCounter");
  const catEl = document.getElementById("reelCaptionCat");
  const titleEl = document.getElementById("reelCaptionTitle");
  const toggleBtn = document.getElementById("reelToggleBtn");
  if (!slidesWrap || !dotsWrap) return;

  let current = 0;
  let paused = false;
  let intervalId = null;

  slidesWrap.innerHTML = PROJECTS_DATA.map(
    (p, idx) => `
      <div class="hero-reel-slide ${idx === 0 ? "active" : ""}" data-floor="${p.floor}">
        <img src="${p.images[0].src}" alt="${p.title} — ${p.images[0].caption}" />
      </div>
    `
  ).join("");

  dotsWrap.innerHTML = PROJECTS_DATA.map(
    (p, idx) => `
      <button
        type="button"
        class="reel-dot ${idx === 0 ? "active" : ""}"
        aria-label="Ver ${p.title}"
        data-idx="${idx}"
      ></button>
    `
  ).join("");

  const slideEls = slidesWrap.querySelectorAll(".hero-reel-slide");
  const dotEls = dotsWrap.querySelectorAll(".reel-dot");

  function showSlide(index) {
    current = (index + PROJECTS_DATA.length) % PROJECTS_DATA.length;
    const p = PROJECTS_DATA[current];
    slideEls.forEach((el, i) => el.classList.toggle("active", i === current));
    dotEls.forEach((el, i) => el.classList.toggle("active", i === current));
    if (counterEl) counterEl.textContent = `0${current + 1} / 05 · ${p.hourShort}`;
    if (catEl) catEl.textContent = p.subtitle;
    if (titleEl) titleEl.textContent = `${p.num}. ${p.title}`;
  }

  function startLoop() {
    clearInterval(intervalId);
    if (paused) return;
    intervalId = setInterval(() => showSlide(current + 1), 4200);
  }

  slideEls.forEach((el) => {
    el.addEventListener("click", () => {
      const f = Number(el.dataset.floor);
      window.openProjectCase(f);
    });
  });

  dotEls.forEach((dot) => {
    dot.addEventListener("click", (ev) => {
      ev.stopPropagation();
      showSlide(Number(dot.dataset.idx));
      startLoop();
    });
  });

  if (toggleBtn) {
    toggleBtn.addEventListener("click", (ev) => {
      ev.stopPropagation();
      paused = !paused;
      toggleBtn.textContent = paused ? "Play" : "Pause";
      toggleBtn.setAttribute("aria-pressed", String(paused));
      if (paused) {
        clearInterval(intervalId);
      } else {
        startLoop();
      }
    });
  }

  showSlide(0);
  startLoop();
}

// ============================================================================
// 4. MANIFIESTO CON REVELADO PALABRA A PALABRA AL HACER SCROLL
// ============================================================================
function initManifestoReveal() {
  const quoteEl = document.getElementById("manifestoQuote");
  if (!quoteEl) return;

  const accentWords = new Set(["respeto", "responsabilidad:", "experiencias", "significativas.»"]);
  const words = quoteEl.textContent.trim().split(/\s+/);
  quoteEl.innerHTML = words
    .map((w) => {
      const clean = w.toLowerCase();
      const cls = accentWords.has(clean) ? "manifesto-word is-accent" : "manifesto-word";
      return `<span class="${cls}">${w}</span>`;
    })
    .join(" ");

  const spans = Array.from(quoteEl.querySelectorAll(".manifesto-word"));

  function updateWords() {
    const rect = quoteEl.getBoundingClientRect();
    const vh = window.innerHeight || 800;
    const progress = Math.max(0, Math.min(1, (vh * 0.82 - rect.top) / (rect.height + vh * 0.35)));
    const litCount = Math.ceil(progress * spans.length);
    spans.forEach((sp, i) => {
      sp.classList.toggle("lit", i < litCount);
    });
  }

  window.addEventListener("scroll", updateWords, { passive: true });
  window.addEventListener("resize", updateWords, { passive: true });
  updateWords();
}

// ============================================================================
// 5. SELECTOR INTERACTIVO DE PROYECTOS ("Mostrando: proyecto X de 5") + GRID
// ============================================================================
function initProjectSwitcher() {
  const listEl = document.getElementById("switcherItems");
  const imgEl = document.getElementById("switcherImg");
  const frameEl = document.getElementById("switcherImgFrame");
  const statEl = document.getElementById("switcherStatChip");
  const questionEl = document.getElementById("switcherQuestion");
  const summaryEl = document.getElementById("switcherSummary");
  const statusEl = document.getElementById("switcherStatus");
  const openBtn = document.getElementById("switcherOpenCaseBtn");
  const labBtn = document.getElementById("switcherJumpLabBtn");
  if (!listEl) return;

  listEl.innerHTML = PROJECTS_DATA.map(
    (p, idx) => `
      <li class="switcher-item">
        <button type="button" class="switcher-btn ${idx === 0 ? "active" : ""}" data-idx="${idx}" role="tab" aria-selected="${idx === 0}">
          <span class="switcher-btn-left">
            <span class="switcher-num">${p.num}</span>
            <span class="switcher-name">${p.title}</span>
          </span>
          <span class="switcher-cat">${p.place}</span>
        </button>
      </li>
    `
  ).join("");

  const btns = listEl.querySelectorAll(".switcher-btn");

  function setActive(idx) {
    activeSwitcherIdx = idx;
    const p = PROJECTS_DATA[idx];
    btns.forEach((b, i) => {
      const isAct = i === idx;
      b.classList.toggle("active", isAct);
      b.setAttribute("aria-selected", String(isAct));
    });
    if (imgEl) {
      imgEl.src = p.images[0].src;
      imgEl.alt = `${p.title} — ${p.images[0].caption}`;
    }
    if (statEl) statEl.textContent = `${p.hourShort} · ${p.statBig}`;
    if (questionEl) questionEl.textContent = p.question;
    if (summaryEl) summaryEl.textContent = p.summary;
    if (statusEl) statusEl.textContent = `Mostrando: ${p.title}, proyecto ${idx + 1} de ${PROJECTS_DATA.length}`;
  }

  btns.forEach((btn) => {
    const idx = Number(btn.dataset.idx);
    btn.addEventListener("mouseenter", () => setActive(idx));
    btn.addEventListener("click", () => setActive(idx));
  });

  if (frameEl) {
    frameEl.addEventListener("click", () => window.openProjectCase(activeSwitcherIdx));
  }
  if (openBtn) {
    openBtn.addEventListener("click", () => window.openProjectCase(activeSwitcherIdx));
  }
  if (labBtn) {
    labBtn.addEventListener("click", () => window.jumpToLabFloor(activeSwitcherIdx));
  }

  setActive(0);
}

function renderCaseGrid() {
  const grid = document.getElementById("caseGrid");
  if (!grid) return;

  // Presentar 00. Tacto (TFG) primero como caso destacado de ancho completo, seguido de los otros 4
  const ordered = [PROJECTS_DATA[1], PROJECTS_DATA[0], PROJECTS_DATA[2], PROJECTS_DATA[3], PROJECTS_DATA[4]];

  grid.innerHTML = ordered
    .map(
      (p, i) => `
      <article class="case-card reveal ${i === 0 ? "featured" : ""}" data-cursor="VER" onclick="window.openProjectCase(${p.floor})">
        <div class="case-media">
          <img src="${p.images[0].src}" alt="${p.title} — ${p.images[0].caption}" loading="lazy" />
          <span class="case-num-badge">${p.num} · ${p.hourShort}</span>
        </div>
        <div class="case-body">
          <div>
            <div class="case-meta">
              <span>${p.subtitle}</span>
              <span>${p.code}</span>
            </div>
            <h3 class="case-title">${p.title}</h3>
            <p class="case-question">${p.question}</p>
            <p class="case-desc" style="margin-top:10px;">${p.summary}</p>
          </div>
          <div class="case-foot">
            <span class="case-stat">Insight: ${p.statBig}</span>
            <span class="case-link-arrow">Ver caso completo →</span>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}

// ============================================================================
// 6. TIRA HORIZONTAL ARRASTRABLE "24 HORAS" (Garaje Drag Strip)
// ============================================================================
function initRoutinesStrip() {
  const track = document.getElementById("routinesDragTrack");
  const wrapper = document.getElementById("dragStripWrapper");
  const prevBtn = document.getElementById("dragPrevBtn");
  const nextBtn = document.getElementById("dragNextBtn");
  if (!track || !wrapper) return;

  track.innerHTML = PROJECTS_DATA.map(
    (p) => `
      <article class="routine-card">
        <div>
          <div class="routine-top">
            <span class="routine-hour">${p.hourShort}</span>
            <span class="routine-place">${p.place}</span>
          </div>
          <div class="routine-thumb" style="margin:14px 0;">
            <img src="${p.images[0].src}" alt="${p.title}" loading="lazy" />
          </div>
          <h3 class="routine-title">${p.num}. ${p.title}</h3>
          <p class="routine-insight">${/^\d/.test(p.statText) ? p.statText : `<strong>${p.statBig}</strong> ${p.statText}`}</p>
        </div>
        <div class="routine-bottom">
          <button type="button" style="color:var(--klein);" onclick="window.jumpToLabFloor(${p.floor})">
            Ir a Planta ${p.floor} ↓
          </button>
          <button type="button" onclick="window.openProjectCase(${p.floor})">
            Dossier →
          </button>
        </div>
      </article>
    `
  ).join("");

  // Mouse drag-to-scroll
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  track.addEventListener("mousedown", (e) => {
    if (e.target.closest("button")) return;
    isDown = true;
    wrapper.classList.add("dragging");
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  window.addEventListener("mouseup", () => {
    isDown = false;
    wrapper.classList.remove("dragging");
  });

  track.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.35;
    track.scrollLeft = scrollLeft - walk;
  });

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      track.scrollBy({ left: -380, behavior: "smooth" });
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      track.scrollBy({ left: 380, behavior: "smooth" });
    });
  }
}

// ============================================================================
// 7. CURSOR PERSONALIZADO (Desktop Fine Pointer) + SCROLL REVEAL OBSERVER
// ============================================================================
function initCustomCursor() {
  const cursor = document.getElementById("customCursor");
  if (!cursor) return;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  let mx = -120;
  let my = -120;
  let cx = -120;
  let cy = -120;

  window.addEventListener(
    "mousemove",
    (e) => {
      mx = e.clientX;
      my = e.clientY;
      const target = e.target.closest("[data-cursor]");
      if (target) {
        const label = target.getAttribute("data-cursor") || "VER";
        cursor.textContent = label;
        cursor.classList.toggle("is-drag", label === "DRAG");
        cursor.classList.add("visible");
      } else {
        cursor.classList.remove("visible");
      }
    },
    { passive: true }
  );

  document.addEventListener("mouseleave", () => {
    cursor.classList.remove("visible");
  });

  function tickCursor() {
    cx += (mx - cx) * 0.22;
    cy += (my - cy) * 0.22;
    cursor.style.setProperty("--cx", `${cx}px`);
    cursor.style.setProperty("--cy", `${cy}px`);
    requestAnimationFrame(tickCursor);
  }
  requestAnimationFrame(tickCursor);
}

function initScrollReveals() {
  const targets = Array.from(document.querySelectorAll(".reveal"));
  if (!("IntersectionObserver" in window)) return;

  const vh = window.innerHeight || 900;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("reveal-pending");
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.02, rootMargin: "0px 0px -24px 0px" }
  );

  targets.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top > vh * 0.96) {
      el.classList.add("reveal-pending");
      io.observe(el);
    } else {
      el.classList.add("is-visible");
    }
  });
}

// ============================================================================
// 8. PUENTE WASM + CONTROLADORES DEL LABORATORIO 24 HORAS
// ============================================================================
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

function selectFloor(floorIdx) {
  if (!wasm) return;
  wasm.set_target_floor(floorIdx);
  selectedImageIndex = 0;
  renderSidebar(floorIdx);
  updateTopNav(floorIdx);
}
window.selectFloor = selectFloor;

window.jumpToLabFloor = (floorIdx) => {
  window.closeDossierModal();
  if (wasm) selectFloor(floorIdx);
  const labEl = document.getElementById("laboratorio");
  if (labEl) {
    labEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

window.openProjectCase = (floorIdx) => {
  if (wasm) selectFloor(floorIdx);
  window.openDossierModal("project", floorIdx);
};

function updateTopNav(activeFloor) {
  const mask = wasm ? wasm.get_completed_mask() : 0;
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
      <p style="font-size:0.78rem; color:#222; margin-bottom:6px;">
        <strong>1. Selecciona el grado de cafeína deseado:</strong>
      </p>
      <div class="game-btn-row">
        <button class="game-btn ${grade === 0 ? "active" : ""}" type="button" onclick="window.handleCafelikoGrade(0)">●○○ LIGHT</button>
        <button class="game-btn ${grade === 1 ? "active" : ""}" type="button" onclick="window.handleCafelikoGrade(1)">●●○ CLASSICO</button>
        <button class="game-btn ${grade === 2 ? "active" : ""}" type="button" onclick="window.handleCafelikoGrade(2)">●●● SUPER</button>
      </div>
      <p style="font-size:0.78rem; color:#222; margin:10px 0 6px;">
        <strong>2. Ritual limpio:</strong> ${stepNames[step]}
      </p>
      <div class="game-btn-row">
        <button class="game-btn" type="button" style="background:var(--klein); color:#fff; border-color:var(--klein);" onclick="window.handleCafelikoStep()">
          ${step === 0 ? "▶ Iniciar Ritual (Paso 1/6)" : step < 5 ? `▶ Siguiente Paso (${step + 1}/6)` : step === 5 ? "⏳ Infusionando en el diorama..." : "↻ Preparar otra taza"}
        </button>
      </div>
    `;
  } else if (floorIdx === 1) {
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
      <div class="game-btn-row" style="margin-bottom:8px;">
        <button class="game-btn ${isOpen ? "active" : ""}" type="button" onclick="window.handleTactoToggle()">
          ${isOpen ? "📖 Periódico Desplegado (Guardar en buzón)" : "📰 Sacar Periódico Físico del Buzón"}
        </button>
      </div>
      <p style="font-size:0.76rem; font-weight:700; color:var(--klein); margin-bottom:6px;">
        ${pageTitles[page]}
      </p>
      <div class="game-btn-row">
        <button class="game-btn" type="button" onclick="window.handleTactoPage(-1)">← Pág. Anterior</button>
        <button class="game-btn" type="button" onclick="window.handleTactoPage(1)">Pasar Página →</button>
      </div>
      <div style="margin-top:10px; padding-top:8px; border-top:1px dashed var(--line-light);">
        <p style="font-size:0.74rem; color:#444; margin-bottom:6px;">
          <strong>Pasatiempos en papel prensa:</strong>
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
    const count = wasm.get_tom_items_collected();
    const level = wasm.get_tom_unlocked_level();
    container.innerHTML = `
      <div class="minigame-header">
        <span class="minigame-badge">Planta 2 · 11:00 AM · Oficina Telefónica</span>
        <span class="minigame-status">${count}/9 Ítems · Nivel ${level}/3</span>
      </div>
      <p style="font-size:0.78rem; color:#222; margin-bottom:8px;">
        Explora el Onboarding VR: recoge los 9 ítems formativos guiado por el asistente virtual Tom.
      </p>
      <div class="game-btn-row">
        <button class="game-btn" type="button" style="background:var(--tom-orange); color:#fff; border-color:var(--tom-orange);" onclick="window.handleTomNextItem()">
          ${count < 9 ? `🟠 Recoger Ítem (${count + 1}/9)` : "✓ ¡9/9 Ítems Completados!"}
        </button>
        <button class="game-btn" type="button" onclick="window.handleTomQuiz()">
          🎓 Superar Test
        </button>
      </div>
    `;
  } else if (floorIdx === 3) {
    const stage = wasm.get_focus_popup_stage();
    const locked = wasm.get_focus_phone_locked() === 1;
    const secs = Math.ceil(wasm.get_focus_pomodoro_secs());
    const mins = String(Math.floor(secs / 60)).padStart(2, "0");
    const remS = String(secs % 60).padStart(2, "0");
    const stageNames = ["0 · Disco plegado", "1 · Varillas abriéndose", "2 · Cabina desplegada"];

    container.innerHTML = `
      <div class="minigame-header">
        <span class="minigame-badge">Planta 3 · 16:00 PM · El Estudio</span>
        <span class="minigame-status" id="focusTimerBadge">${locked ? `⏱ Pomodoro ${mins}:${remS}` : stageNames[stage]}</span>
      </div>
      <p style="font-size:0.78rem; color:#222; margin-bottom:8px;">
        Despliega la cabina Pop-Up y guarda el smartphone en el Bolsillo Focus para activar el ciclo Pomodoro.
      </p>
      <div class="game-btn-row">
        <button class="game-btn ${stage === 2 ? "active" : ""}" type="button" onclick="window.handleFocusPopup()">
          🔄 Pop-Up (Fase ${stage}/2)
        </button>
        <button class="game-btn ${locked ? "active" : ""}" type="button" style="${locked ? "background:var(--focus-green); border-color:var(--focus-green); color:#fff;" : ""}" onclick="window.handleFocusLock()">
          ${locked ? "🔒 Móvil Bloqueado" : "📵 Bloquear Móvil"}
        </button>
      </div>
    `;
  } else if (floorIdx === 4) {
    const exploded = wasm.get_chile_exploded_view() > 0.5;
    let grownCount = 0;
    for (let i = 0; i < 8; i++) {
      if (wasm.get_chile_sprout(i) > 0.7) grownCount++;
    }
    container.innerHTML = `
      <div class="minigame-header">
        <span class="minigame-badge">Planta 4 · 19:30 PM · La Azotea</span>
        <span class="minigame-status" id="chileSproutsBadge">${grownCount}/8 Brotes Germinados</span>
      </div>
      <p style="font-size:0.78rem; color:#222; margin-bottom:8px;">
        Atrae al ave «fío-fío» (<em>Elaenia albiceps</em>) hacia los refugios biodegradables o inspecciona las 3 capas.
      </p>
      <div class="game-btn-row">
        <button class="game-btn" type="button" style="background:var(--chile-clay); color:#fff; border-color:var(--chile-clay);" onclick="window.handleChileWater()">
          🐦 Atraer Ave y Germinar
        </button>
        <button class="game-btn ${exploded ? "active" : ""}" type="button" onclick="window.handleChileExplode()">
          ${exploded ? "⬇ Ensamblar Capas" : "⬆ Vista Explosionada"}
        </button>
      </div>
    `;
  }
}

// Handlers globales conectados con Rust/WASM
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
  selectedImageIndex = 1;
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
  selectedImageIndex = 1;
  renderSidebar(4);
};

// ============================================================================
// 9. MODALES: DOSSIER DE CASO, MANIFIESTO, DISCIPLINAS Y LIGHTBOX
// ============================================================================
window.openDossierModal = (mode = "project", explicitFloor = null) => {
  const modal = document.getElementById("dossierModalBackdrop");
  const titleEl = document.getElementById("dossierModalTitle");
  const bodyEl = document.getElementById("dossierModalContent");
  if (!modal || !titleEl || !bodyEl) return;

  modal.classList.add("open");
  document.body.classList.add("no-scroll");

  if (mode === "help") {
    bodyEl.classList.add("single-col");
    titleEl.textContent = "[ GUÍA · LABORATORIO INTERACTIVO 24 HORAS ]";
    bodyEl.innerHTML = `
      <div>
        <h2 style="font-family:var(--font-display); font-size:clamp(1.6rem,3vw,2.3rem); letter-spacing:-0.03em; margin-bottom:12px;">
          24 Horas con el Diseño de Producto de Ana Galilea
        </h2>
        <p style="font-size:0.98rem; line-height:1.68; color:var(--ink-secondary); margin-bottom:20px; max-width:74ch;">
          Además de los casos de estudio editoriales, este portfolio incluye un <strong>edificio interactivo en tiempo real (Rust + WebAssembly)</strong>. Sus 5 plantas recorren una jornada de 08:00 a 19:30 donde cada reto cotidiano se resuelve con un objeto tangible.
        </p>
        <div class="phase-grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));">
          ${PROJECTS_DATA.map(
            (p) => `
            <div class="phase-card">
              <h4>Planta ${p.floor} · ${p.hourShort} · ${p.place}</h4>
              <p style="font-weight:700; color:var(--ink); margin-bottom:4px;">${p.num}. ${p.title}</p>
              <p>${p.summary}</p>
            </div>
          `
          ).join("")}
        </div>
        <div style="margin-top:22px; display:flex; justify-content:flex-end;">
          <button class="btn-pill primary sm" type="button" onclick="window.closeDossierModal()">
            Volver al Laboratorio →
          </button>
        </div>
      </div>
    `;
    return;
  }

  bodyEl.classList.remove("single-col");

  if (mode === "manifesto") {
    titleEl.textContent = "[ SOBRE ANA GALILEA · MANIFIESTO Y CONTACTO ]";
    bodyEl.innerHTML = `
      <div>
        <span class="eyebrow-tag accent">DISEÑO DE PRODUCTO · IED MADRID · 2025</span>
        <h2 style="font-family:var(--font-display); font-size:clamp(2rem,3.5vw,3rem); letter-spacing:-0.04em; line-height:1; margin:10px 0 18px;">
          Ana Galilea
        </h2>
        <p style="font-size:0.98rem; line-height:1.7; color:var(--ink-secondary); margin-bottom:14px;">
          «Me interesa cómo las personas interactúan entre sí y con su entorno, y cómo el diseño puede intervenir para enriquecer esas interacciones. No me detengo en el producto en sí: me importa todo lo que sucede alrededor, el servicio que lo sostiene y la forma en que se integra en la vida cotidiana.»
        </p>
        <p style="font-size:0.98rem; line-height:1.7; color:var(--ink-secondary); margin-bottom:22px;">
          «Diseñar es, para mí, entrar en la vida de las personas con respeto y responsabilidad: observar sus rutinas, entender sus necesidades y proponer soluciones que acompañen su día a día. Cada diseño tiene el poder de mejorar gestos cotidianos y con ello transformar pequeñas rutinas en experiencias significativas.»
        </p>
        <div class="phase-grid">
          <div class="phase-card">
            <h4>Teléfono</h4>
            <p style="font-family:var(--font-mono); font-weight:700; color:var(--ink);">+34 638 277 531</p>
          </div>
          <div class="phase-card">
            <h4>Instagram</h4>
            <p style="font-family:var(--font-mono); font-weight:700; color:var(--ink);">
              <a href="https://instagram.com/anagalilea.design" target="_blank" rel="noopener noreferrer">@anagalilea.design ↗</a>
            </p>
          </div>
          <div class="phase-card" style="grid-column:span 2;">
            <h4>Correo Electrónico</h4>
            <p style="font-family:var(--font-mono); font-weight:700;">
              <a href="mailto:agalilea.design@gmail.com" style="color:var(--klein);">agalilea.design@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
      <div class="dossier-gallery-grid">
        <figure class="wide" onclick="window.openLightbox('assets/portfolio/tom_building_city.jpg', 'Telefónica con Tom · Maqueta de 3 plantas')">
          <img src="assets/portfolio/tom_building_city.jpg" alt="Telefónica con Tom">
          <figcaption>01 · Telefónica con Tom</figcaption>
        </figure>
        <figure onclick="window.openLightbox('assets/portfolio/focus_library.jpg', 'Focus · Cabina Pop-Up')">
          <img src="assets/portfolio/focus_library.jpg" alt="Focus">
          <figcaption>02 · Focus</figcaption>
        </figure>
        <figure onclick="window.openLightbox('assets/portfolio/chile_sunset.jpg', 'Chile · Cubierta verde')">
          <img src="assets/portfolio/chile_sunset.jpg" alt="Chile">
          <figcaption>03 · Chile</figcaption>
        </figure>
      </div>
    `;
    return;
  }

  const floorIdx = explicitFloor !== null ? explicitFloor : wasm ? wasm.get_target_floor() : 0;
  const proj = PROJECTS_DATA[floorIdx] || PROJECTS_DATA[0];
  titleEl.textContent = `[ CASO ${proj.num} · ${proj.title.toUpperCase()} · ${proj.hourShort} ]`;

  bodyEl.innerHTML = `
    <div>
      <div style="font-family:var(--font-mono); font-size:0.74rem; color:var(--klein); font-weight:700; margin-bottom:6px; text-transform:uppercase; letter-spacing:0.08em;">
        ${proj.code} · ${proj.subtitle}
      </div>
      <h2 style="font-family:var(--font-display); font-size:clamp(1.8rem,3vw,2.6rem); letter-spacing:-0.03em; line-height:1.04; margin-bottom:8px;">
        ${proj.title}
      </h2>
      <p style="font-family:var(--font-serif); font-style:italic; font-size:1.38rem; color:var(--klein); margin-bottom:14px;">
        ${proj.question}
      </p>
      <div style="background:var(--klein-soft); padding:12px 16px; border-radius:10px; margin-bottom:14px; display:flex; align-items:center; gap:14px;">
        <span style="font-family:var(--font-display); font-size:1.6rem; font-weight:800; color:var(--klein); flex-shrink:0;">${proj.statBig}</span>
        <span style="font-size:0.8rem; line-height:1.4; color:var(--ink);">${proj.statText}</span>
      </div>
      <p style="font-size:0.9rem; line-height:1.62; color:var(--ink-secondary);">${proj.summary}</p>
      <div class="phase-grid">
        <div class="phase-card">
          <h4>[01] Investigación</h4>
          <p>${proj.phases.investigacion}</p>
        </div>
        <div class="phase-card">
          <h4>[02] Proceso</h4>
          <p>${proj.phases.proceso}</p>
        </div>
        <div class="phase-card">
          <h4>[03] Desarrollo</h4>
          <p>${proj.phases.desarrollo}</p>
        </div>
        <div class="phase-card">
          <h4>[04] Producto</h4>
          <p>${proj.phases.producto}</p>
        </div>
      </div>
      <div style="margin-top:20px; display:flex; gap:10px; flex-wrap:wrap;">
        <button class="btn-pill primary sm" type="button" onclick="window.jumpToLabFloor(${proj.floor})">
          Probar prototipo en Laboratorio 24h ↓
        </button>
      </div>
    </div>
    <div class="dossier-gallery-grid">
      ${proj.images
        .map(
          (img, i) => `
          <figure class="${i === 0 ? "wide" : ""}" onclick="window.openLightbox('${img.src}', '${img.caption.replace(/'/g, "\\'")}')">
            <img src="${img.src}" alt="${img.caption}" loading="lazy" />
            <figcaption>${img.caption}</figcaption>
          </figure>
        `
        )
        .join("")}
    </div>
  `;
};

window.closeDossierModal = () => {
  const modal = document.getElementById("dossierModalBackdrop");
  if (modal) modal.classList.remove("open");
  document.body.classList.remove("no-scroll");
};

window.openHelpModal = () => {
  window.openDossierModal("help");
};

window.openDisciplinesModal = () => {
  const modal = document.getElementById("disciplinesModalBackdrop");
  if (modal) {
    modal.classList.add("open");
    document.body.classList.add("no-scroll");
  }
};

window.closeDisciplinesModal = () => {
  const modal = document.getElementById("disciplinesModalBackdrop");
  if (modal) modal.classList.remove("open");
  document.body.classList.remove("no-scroll");
};

window.openLightbox = (src, caption = "") => {
  const lb = document.getElementById("lightboxBackdrop");
  const img = document.getElementById("lightboxImg");
  const cap = document.getElementById("lightboxCaption");
  if (!lb || !img) return;
  img.src = src;
  img.alt = caption;
  if (cap) cap.textContent = caption;
  lb.classList.add("open");
};

window.closeLightbox = () => {
  const lb = document.getElementById("lightboxBackdrop");
  if (lb) lb.classList.remove("open");
};

window.toggleDioramaWide = () => {
  const stage = document.getElementById("labMainStage");
  if (!stage) return;
  const isWide = stage.classList.toggle("diorama-wide");
  const btn = document.getElementById("expandDioramaBtn");
  if (btn) {
    btn.textContent = isWide ? "⇱ Mostrar Panel" : "⇲ Expandir Diorama";
  }
  setTimeout(() => window.dispatchEvent(new Event("resize")), 60);
};

// ============================================================================
// 10. RENDERIZADOR 2.5D DEL EDIFICIO-DIORAMA EN CANVAS (60 FPS + RUST WASM)
// ============================================================================
function formatClock(hourDecimal) {
  const h = Math.floor(hourDecimal);
  const m = Math.floor((hourDecimal - h) * 60);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function drawDiorama(ctx, width, height) {
  if (!wasm || width < 10 || height < 10) return;

  const t = wasm.get_time();
  const hour = wasm.get_hour_of_day();
  const activeFloor = wasm.get_target_floor();
  const playerX = wasm.get_player_x();
  const playerY = wasm.get_player_y();
  const walkPhase = wasm.get_walk_phase();

  // 1. Cielo dinámico según la hora del día (08:00 -> 19:30)
  const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
  if (hour < 10.2) {
    skyGrad.addColorStop(0, "#cfdbe6");
    skyGrad.addColorStop(1, "#e8e4dc");
  } else if (hour < 14.0) {
    skyGrad.addColorStop(0, "#b9cde0");
    skyGrad.addColorStop(1, "#e2e5e8");
  } else if (hour < 17.8) {
    skyGrad.addColorStop(0, "#d8cab8");
    skyGrad.addColorStop(1, "#e6dfd5");
  } else {
    skyGrad.addColorStop(0, "#c87d55");
    skyGrad.addColorStop(0.55, "#e6ad73");
    skyGrad.addColorStop(1, "#dfd3c3");
  }
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, width, height);

  // Silueta urbana de fondo
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

  // Marca de agua editorial en el cielo
  ctx.save();
  ctx.font = `800 ${Math.round(width * 0.078)}px 'Syne', sans-serif`;
  ctx.fillStyle = "rgba(0, 24, 255, 0.06)";
  ctx.textAlign = "center";
  ctx.fillText("ANA GALILEA", width * 0.5, height * 0.14);
  ctx.restore();

  // Geometría del Edificio Seccionado (5 plantas)
  const bLeft = Math.round(width * 0.14);
  const bRight = Math.round(width * 0.9);
  const bWidth = bRight - bLeft;
  const bBottom = Math.round(height * 0.9);
  const bTop = Math.round(height * 0.14);
  const totalH = bBottom - bTop;
  const floorH = totalH / 5;
  const stairColW = Math.round(bWidth * 0.14);

  // Sombra arquitectónica e isometría lateral derecha
  const isoDepth = 16;
  ctx.fillStyle = "rgba(18, 22, 30, 0.12)";
  ctx.fillRect(bLeft - 10, bBottom, bWidth + 28, 12);

  ctx.fillStyle = "#234b6e";
  ctx.beginPath();
  ctx.moveTo(bRight, bTop + floorH * 0.6);
  ctx.lineTo(bRight + isoDepth, bTop + floorH * 0.6 - 10);
  ctx.lineTo(bRight + isoDepth, bBottom - 10);
  ctx.lineTo(bRight, bBottom);
  ctx.closePath();
  ctx.fill();

  for (let f = 0; f < 5; f++) {
    const fyBottom = bBottom - f * floorH;
    const fyTop = fyBottom - floorH;
    const isSelected = f === activeFloor;

    if (f === 4) {
      ctx.fillStyle = isSelected ? "rgba(255, 248, 236, 0.58)" : "rgba(240, 232, 220, 0.36)";
      ctx.fillRect(bLeft, fyTop + floorH * 0.35, bWidth, floorH * 0.65);
    } else if (f === 2) {
      ctx.fillStyle = isSelected ? "#244c70" : "#1d3d59";
      ctx.fillRect(bLeft, fyTop, bWidth, floorH);
    } else if (f === 3) {
      ctx.fillStyle = isSelected ? "#e9e2d6" : "#dad3c7";
      ctx.fillRect(bLeft, fyTop, bWidth, floorH);
    } else if (f === 1) {
      ctx.fillStyle = isSelected ? "#e4e7ea" : "#d5d8dc";
      ctx.fillRect(bLeft, fyTop, bWidth, floorH);
    } else {
      ctx.fillStyle = isSelected ? "#efe9dd" : "#e2dccf";
      ctx.fillRect(bLeft, fyTop, bWidth, floorH);
    }

    if (f < 4) {
      ctx.fillStyle = f === 2 ? "#183652" : "#2b5478";
      ctx.fillRect(bLeft, fyTop, stairColW, floorH);

      ctx.strokeStyle = "#8cb4d8";
      ctx.lineWidth = 2;
      for (let s = 0; s < 7; s++) {
        const sx = bLeft + 8 + (s / 7) * (stairColW - 18);
        const sy = fyBottom - 6 - (s / 7) * (floorH - 12);
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx + 8, sy);
        ctx.stroke();
      }
    }

    drawFloorInterior(ctx, f, bLeft + stairColW, fyTop, bWidth - stairColW, floorH, t);

    ctx.fillStyle = isSelected ? "#0018ff" : "#c8c2b6";
    ctx.fillRect(bLeft - 4, fyBottom - 5, bWidth + 8, 5);

    if (bLeft > 74) {
      ctx.save();
      const tagY = fyTop + floorH * 0.52;
      ctx.fillStyle = isSelected ? "#0018ff" : "rgba(10, 10, 12, 0.78)";
      ctx.beginPath();
      ctx.roundRect(10, tagY - 14, bLeft - 18, 28, 6);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.font = "700 10px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      const labels = ["P0 CAFELIKO", "P1 TACTO", "P2 TOM VR", "P3 FOCUS", "P4 CHILE"];
      ctx.fillText(labels[f], 10 + (bLeft - 18) / 2, tagY + 3.5);
      ctx.restore();
    }
  }

  // Personaje Ana caminando por el edificio
  const charX = bLeft + playerX * bWidth;
  const charFloorBaseY = bBottom - playerY * floorH - 5;
  const bob = Math.abs(Math.sin(walkPhase)) * 4;

  ctx.save();
  ctx.translate(charX, charFloorBaseY - bob);
  ctx.fillStyle = "rgba(0,0,0,0.22)";
  ctx.beginPath();
  ctx.ellipse(0, bob, 10, 3.5, 0, 0, Math.PI * 2);
  ctx.fill();
  const legSwing = Math.sin(walkPhase) * 5;
  ctx.strokeStyle = "#121316";
  ctx.lineWidth = 3.2;
  ctx.beginPath();
  ctx.moveTo(-3, -11);
  ctx.lineTo(-3 - legSwing, 0);
  ctx.moveTo(3, -11);
  ctx.lineTo(3 + legSwing, 0);
  ctx.stroke();
  ctx.fillStyle = "#0018ff";
  ctx.beginPath();
  ctx.roundRect(-7, -28, 14, 18, 4);
  ctx.fill();
  ctx.fillStyle = "#f4cbb2";
  ctx.beginPath();
  ctx.arc(0, -35, 6.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#2b1d16";
  ctx.beginPath();
  ctx.arc(0, -37, 6.8, Math.PI, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#0018ff";
  ctx.font = "800 9px 'JetBrains Mono', monospace";
  ctx.textAlign = "center";
  ctx.fillText("ANA", 0, -46);
  ctx.restore();

  // Partículas desde memoria lineal de Rust WASM
  if (wasmMemory) {
    const ptr = wasm.get_particles_ptr();
    const len = wasm.get_particles_len();
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
      if (kind === 1) ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.78})`;
      else if (kind === 2) ctx.fillStyle = `rgba(255, 45, 85, ${alpha * 0.85})`;
      else if (kind === 3) ctx.fillStyle = `rgba(255, 107, 26, ${alpha})`;
      else if (kind === 4) ctx.fillStyle = `rgba(22, 138, 84, ${alpha * 0.7})`;
      else ctx.fillStyle = `rgba(176, 78, 54, ${alpha})`;
      ctx.beginPath();
      ctx.arc(screenX, screenY, sz, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  const clockEl = document.getElementById("hudClockTime");
  const routineEl = document.getElementById("hudClockRoutine");
  if (clockEl && routineEl) {
    clockEl.textContent = formatClock(hour);
    routineEl.textContent = PROJECTS_DATA[activeFloor].place;
  }
}

function drawInteractiveBeacon(ctx, x, y, label, color = "#0018ff") {
  const t = performance.now() / 1000;
  const pulse = Math.sin(t * 3.5) * 0.5 + 0.5;

  ctx.save();
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.24 + pulse * 0.32;
  ctx.beginPath();
  ctx.arc(x, y, 6 + pulse * 3.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.globalAlpha = 1.0;
  ctx.beginPath();
  ctx.arc(x, y, 3.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.font = "700 9px 'JetBrains Mono', monospace";
  const metrics = ctx.measureText(label);
  const pw = metrics.width + 12;
  const ph = 16;
  const px = x - pw / 2;
  const py = y - 22;

  ctx.fillStyle = "rgba(10, 10, 12, 0.9)";
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
    const grade = wasm.get_cafeliko_grade();
    const step = wasm.get_cafeliko_step();
    const brew = wasm.get_cafeliko_brew_progress();

    ctx.strokeStyle = "rgba(0,0,0,0.05)";
    ctx.lineWidth = 1;
    for (let gx = rx; gx < rx + rw; gx += 26) {
      ctx.beginPath();
      ctx.moveTo(gx, ry);
      ctx.lineTo(gx, ry + rh);
      ctx.stroke();
    }
    const counterY = ry + rh * 0.68;
    ctx.fillStyle = "#d5c7b2";
    ctx.fillRect(rx + 16, counterY, rw - 32, rh * 0.32 - 5);

    const packX = rx + rw * 0.24;
    const packY = counterY - 52;
    ctx.fillStyle = "#c7b699";
    ctx.fillRect(packX, packY, 60, 52);
    const colors = ["#d7c39d", "#c98859", "#8c9a7c"];
    const names = ["LIGHT", "CLASSICO", "SUPER"];
    for (let c = 0; c < 3; c++) {
      ctx.fillStyle = colors[c];
      ctx.fillRect(packX + 4, packY + 4 + c * 16, 52, 13);
      if (grade === c) {
        ctx.strokeStyle = "#0018ff";
        ctx.lineWidth = 2;
        ctx.strokeRect(packX + 3, packY + 3 + c * 16, 54, 15);
      }
      ctx.fillStyle = "#1f2226";
      ctx.font = "700 7.5px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      ctx.fillText(names[c], packX + 30, packY + 13 + c * 16);
    }

    if (step >= 2) {
      ctx.fillStyle = colors[grade];
      ctx.fillRect(packX + 18, counterY, 22, 14);
    }

    const mokaX = rx + rw * 0.56;
    const mokaY = counterY;
    ctx.fillStyle = "#9da1a6";
    ctx.beginPath();
    ctx.moveTo(mokaX - 13, mokaY);
    ctx.lineTo(mokaX + 13, mokaY);
    ctx.lineTo(mokaX + 9, mokaY - 20);
    ctx.lineTo(mokaX - 9, mokaY - 20);
    ctx.closePath();
    ctx.fill();
    const lift = step === 1 || step === 3 ? -10 : 0;
    ctx.fillStyle = "#b8bcc2";
    ctx.beginPath();
    ctx.moveTo(mokaX - 9, mokaY - 20 + lift);
    ctx.lineTo(mokaX + 9, mokaY - 20 + lift);
    ctx.lineTo(mokaX + 14, mokaY - 42 + lift);
    ctx.lineTo(mokaX - 14, mokaY - 42 + lift);
    ctx.closePath();
    ctx.fill();

    drawInteractiveBeacon(ctx, mokaX, mokaY - 52, "CAFELIKO", "#c98859");

    ctx.fillStyle = "#121316";
    ctx.font = "700 10.5px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(
      step === 6
        ? "☕ ¡Cafeliko servido! Haz clic para preparar otro grado"
        : step === 5
        ? `🔥 Infusionando Cafeliko (${Math.round(brew * 100)}%)...`
        : `04. Cafeliko · Paso ${step}/6 (${names[grade]})`,
      rx + 18,
      ry + 19
    );
  } else if (floor === 1) {
    const isOpen = wasm.get_tacto_open() === 1;
    const stress = wasm.get_tacto_stress();
    const page = wasm.get_tacto_page();

    ctx.fillStyle = "rgba(0, 72, 180, 0.24)";
    ctx.fillRect(rx, ry + rh * 0.42, rw, 12);

    const rackX = rx + rw * 0.28;
    const rackY = ry + rh * 0.34;
    ctx.fillStyle = "#8a99a4";
    ctx.beginPath();
    ctx.moveTo(rackX - 22, rackY);
    ctx.lineTo(rackX + 24, rackY);
    ctx.lineTo(rackX + 15, rackY + 46);
    ctx.lineTo(rackX - 15, rackY + 46);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#d9c89e";
    ctx.beginPath();
    ctx.arc(rackX, rackY + 28, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.save();
    ctx.translate(rackX + 6, rackY - 4);
    ctx.rotate(-0.3);
    ctx.fillRect(-5, -16, 10, 22);
    ctx.fillStyle = "#111";
    ctx.font = "800 5.5px sans-serif";
    ctx.fillText("TACTO", -4, -3);
    ctx.restore();

    drawInteractiveBeacon(ctx, rackX, rackY - 16, "BUZÓN TACTO", "#0018ff");

    if (isOpen) {
      const npX = rx + rw * 0.63;
      const npY = ry + rh * 0.24;
      ctx.fillStyle = "#fdfdfb";
      ctx.strokeStyle = "#121316";
      ctx.lineWidth = 1.5;
      ctx.fillRect(npX - 44, npY, 88, 50);
      ctx.strokeRect(npX - 44, npY, 88, 50);
      ctx.beginPath();
      ctx.moveTo(npX, npY);
      ctx.lineTo(npX, npY + 50);
      ctx.stroke();
      ctx.fillStyle = "#0018ff";
      ctx.font = "800 9.5px 'Syne', sans-serif";
      ctx.textAlign = "center";
      const spreadShort = ["TACTO vol.01", "JERGA GEN-Z", "@UNKIID", "¿RAJOY?", "GYMRATS"];
      ctx.fillText(spreadShort[page], npX, npY + 27);
    }

    ctx.fillStyle = stress > 0.5 && !isOpen ? "#c91e3a" : "#121316";
    ctx.font = "700 10.5px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(
      isOpen
        ? `00. Tacto · Leyendo pág. ${page + 1}/5 (Tregua visual)`
        : `00. Tacto · Saturación ${Math.round(stress * 100)}% — Saca el periódico`,
      rx + 18,
      ry + 19
    );
  } else if (floor === 2) {
    const tomX = wasm.get_tom_x();
    const itemsMask = wasm.get_tom_items_mask();
    const collected = wasm.get_tom_items_collected();
    const unlocked = wasm.get_tom_unlocked_level();

    ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
    for (let w = 0; w < 4; w++) {
      ctx.fillRect(rx + rw * 0.54 + w * 38, ry + 12, 28, rh - 20);
    }

    const itemNorms = [0.24, 0.38, 0.54, 0.30, 0.48, 0.68, 0.26, 0.58, 0.80];
    const maxItems = unlocked * 3;
    for (let i = 0; i < maxItems; i++) {
      if ((itemsMask & (1 << i)) !== 0) continue;
      const ix = rx + (itemNorms[i] - 0.12) * rw;
      const iy = ry + rh * 0.54 + Math.sin(t * 4 + i) * 4;
      ctx.fillStyle = "#ff6b1a";
      ctx.beginPath();
      ctx.arc(ix, iy, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.font = "800 7.5px monospace";
      ctx.textAlign = "center";
      ctx.fillText("T", ix, iy + 2.5);
    }

    const tx = rx + (tomX - 0.12) * rw;
    const ty = ry + rh * 0.54 + Math.sin(t * 3.4) * 5;
    ctx.save();
    ctx.translate(tx, ty);
    ctx.fillStyle = "#1d3bff";
    ctx.beginPath();
    ctx.ellipse(0, 7, 10, 12, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(0, -10, 14, 10.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#6e85ff";
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(-13, -10);
    ctx.lineTo(-15, -20);
    ctx.moveTo(13, -10);
    ctx.lineTo(15, -20);
    ctx.stroke();
    ctx.fillStyle = "#0a0c12";
    ctx.beginPath();
    ctx.ellipse(-4.5, -10, 2.2, 4, 0, 0, Math.PI * 2);
    ctx.ellipse(4.5, -10, 2.2, 4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    drawInteractiveBeacon(ctx, tx, ty - 30, "TOM VR", "#ff6b1a");

    ctx.fillStyle = "#ffffff";
    ctx.font = "700 10.5px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(`01. Telefónica con Tom · ${collected}/9 ítems (Planta ${unlocked}/3)`, rx + 18, ry + 19);
  } else if (floor === 3) {
    const deploy = wasm.get_focus_deploy_anim();
    const locked = wasm.get_focus_phone_locked() === 1;
    const secs = Math.ceil(wasm.get_focus_pomodoro_secs());
    const mins = String(Math.floor(secs / 60)).padStart(2, "0");
    const remS = String(secs % 60).padStart(2, "0");

    ctx.fillStyle = "rgba(110, 78, 46, 0.18)";
    ctx.fillRect(rx + 18, ry + 26, rw * 0.26, rh - 32);

    const deskX = rx + rw * 0.52;
    const deskY = ry + rh * 0.68;
    ctx.fillStyle = "#5c402c";
    ctx.fillRect(deskX - 64, deskY, 128, 6);
    ctx.fillRect(deskX - 54, deskY + 6, 5, rh * 0.32 - 11);
    ctx.fillRect(deskX + 49, deskY + 6, 5, rh * 0.32 - 11);

    ctx.save();
    ctx.translate(deskX, deskY);
    if (deploy < 0.25) {
      ctx.fillStyle = "#efeee9";
      ctx.strokeStyle = "#222";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, -16, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#d91b1b";
      ctx.beginPath();
      ctx.arc(0, -21, 2.6, 0, Math.PI * 2);
      ctx.arc(0, -11, 2.6, 0, Math.PI * 2);
      ctx.fill();
    } else {
      const scale = Math.min(1, deploy);
      ctx.scale(scale, scale);
      ctx.fillStyle = locked ? "#f4f5f0" : "#e3e1da";
      ctx.beginPath();
      ctx.moveTo(-40, 0);
      ctx.quadraticCurveTo(-36, -60, 4, -56);
      ctx.quadraticCurveTo(38, -50, 42, 0);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = locked ? "#168a54" : "#0018ff";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = "#26332c";
      ctx.beginPath();
      ctx.roundRect(5, -22, 28, 13, 3);
      ctx.fill();
      ctx.fillStyle = "#48ff9b";
      ctx.font = "700 7.5px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      ctx.fillText(locked ? `${mins}:${remS}` : "18:43", 19, -13);
    }
    ctx.restore();

    drawInteractiveBeacon(ctx, deskX, deskY - 58, "CABINA FOCUS", "#168a54");

    ctx.fillStyle = "#121316";
    ctx.font = "700 10.5px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(
      locked
        ? `02. Focus · Móvil bloqueado (${mins}:${remS})`
        : "02. Focus · Despliega la cabina Pop-Up y activa Pomodoro",
      rx + 18,
      ry + 19
    );
  } else if (floor === 4) {
    const birdX = wasm.get_bird_x();
    const birdY = wasm.get_bird_y();
    const wing = wasm.get_bird_wing_phase();
    const exploded = wasm.get_chile_exploded_view();

    const baseY = ry + rh - 6;
    const voronoiOffset = exploded * 18;
    const shelterOffset = exploded * 36;

    ctx.fillStyle = "#4e3222";
    ctx.fillRect(rx + rw * 0.22, baseY - 12, rw * 0.58, 12);
    for (let i = 0; i < 8; i++) {
      const growth = wasm.get_chile_sprout(i);
      const sx = rx + rw * (0.26 + i * 0.068);
      const sh = 4 + growth * 15;
      ctx.strokeStyle = "#3ca846";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(sx, baseY - 12);
      ctx.lineTo(sx, baseY - 12 - sh);
      ctx.stroke();
      ctx.fillStyle = "#4cd158";
      ctx.beginPath();
      ctx.ellipse(sx - 3.5, baseY - 12 - sh, 3.5, 1.8, -0.4, 0, Math.PI * 2);
      ctx.ellipse(sx + 3.5, baseY - 12 - sh, 3.5, 1.8, 0.4, 0, Math.PI * 2);
      ctx.fill();
    }

    const vy = baseY - 15 - voronoiOffset;
    ctx.fillStyle = "#b04e36";
    ctx.fillRect(rx + rw * 0.24, vy, rw * 0.54, 4.5);

    const sy = baseY - 15 - shelterOffset;
    [0.36, 0.5, 0.64].forEach((norm) => {
      const sx = rx + rw * norm;
      ctx.fillStyle = "#cbb592";
      ctx.beginPath();
      ctx.ellipse(sx, sy - 14, 16, 18, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#4a3728";
      ctx.beginPath();
      ctx.arc(sx - 2.5, sy - 11, 7, 0, Math.PI * 2);
      ctx.fill();
    });

    drawInteractiveBeacon(ctx, rx + rw * 0.5, sy - 34, "REFUGIOS CHILE", "#b04e36");

    const bx = rx + birdX * rw;
    const by = ry + (1 - birdY) * (rh - 22);
    const wingY = Math.sin(wing) * 8;
    ctx.save();
    ctx.translate(bx, by);
    ctx.fillStyle = "#463d33";
    ctx.beginPath();
    ctx.ellipse(0, 0, 9, 4.5, -0.15, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#2c251e";
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(-2, -1);
    ctx.quadraticCurveTo(-7, -9 - wingY, -13, -3 - wingY);
    ctx.moveTo(2, -1);
    ctx.quadraticCurveTo(7, -9 - wingY, 13, -3 - wingY);
    ctx.stroke();
    ctx.restore();

    ctx.fillStyle = "#121316";
    ctx.font = "700 10.5px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(
      exploded > 0.3
        ? "03. Chile · Vista Explosionada (3 estratos)"
        : "03. Chile · Alimenta el vuelo — Clic en la azotea",
      rx + 18,
      ry + 18
    );
  }
}

// ============================================================================
// 11. ARRANQUE GLOBAL
// ============================================================================
async function startApp() {
  initPreloader();
  initNavOverlay();
  initHeroReel();
  initManifestoReveal();
  initProjectSwitcher();
  renderCaseGrid();
  initRoutinesStrip();
  initCustomCursor();
  initScrollReveals();

  // Escape cierra cualquier modal / lightbox / overlay
  window.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape") {
      window.closeLightbox();
      window.closeDossierModal();
      window.closeDisciplinesModal();
      if (window.closeNavOverlay) window.closeNavOverlay();
    }
  });

  // Inicializar Motor Rust/WASM del Laboratorio 24 Horas
  try {
    wasm = await loadRustWasm();
    wasmMemory = wasm.memory;
    wasm.init_world();
  } catch (err) {
    console.warn("WASM no disponible:", err);
    return;
  }

  const canvas = document.getElementById("dioramaCanvas");
  const viewport = document.getElementById("dioramaViewport");
  if (!canvas || !viewport) return;
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    const rect = viewport.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.round(rect.width * dpr));
    canvas.height = Math.max(1, Math.round(rect.height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  window.addEventListener("resize", resizeCanvas);
  if ("ResizeObserver" in window) {
    new ResizeObserver(resizeCanvas).observe(viewport);
  }
  resizeCanvas();

  canvas.addEventListener("pointerdown", (ev) => {
    viewport.focus({ preventScroll: true });
    const rect = canvas.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;

    const bTop = rect.height * 0.14;
    const bBottom = rect.height * 0.9;
    const bLeft = rect.width * 0.14;
    const bRight = rect.width * 0.9;

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

  // Controles de teclado solo cuando el diorama tiene foco (no bloquea el scroll normal)
  viewport.addEventListener("keydown", (ev) => {
    if (!wasm) return;
    if (ev.key === "ArrowUp" || ev.key === "w" || ev.key === "W") {
      ev.preventDefault();
      selectFloor(Math.min(4, wasm.get_target_floor() + 1));
    } else if (ev.key === "ArrowDown" || ev.key === "s" || ev.key === "S") {
      ev.preventDefault();
      selectFloor(Math.max(0, wasm.get_target_floor() - 1));
    } else if (ev.key === "ArrowLeft" || ev.key === "a" || ev.key === "A") {
      ev.preventDefault();
      wasm.move_player_to(wasm.get_player_x() - 0.12);
    } else if (ev.key === "ArrowRight" || ev.key === "d" || ev.key === "D") {
      ev.preventDefault();
      wasm.move_player_to(wasm.get_player_x() + 0.12);
    }
  });

  selectFloor(0);

  let lastTime = performance.now();
  let lastCafelikoStep = -1;
  let lastFocusSecs = -1;
  let lastGrownCount = -1;

  function frame(now) {
    const dt = Math.min(0.05, (now - lastTime) / 1000);
    lastTime = now;

    wasm.tick_world(dt);
    const rect = viewport.getBoundingClientRect();
    drawDiorama(ctx, rect.width, rect.height);

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
          if (timerEl) timerEl.textContent = `⏱ Pomodoro ${mins}:${remS}`;
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
        if (statusEl) statusEl.textContent = `${grownCount}/8 Brotes Germinados`;
      }
    }

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

window.addEventListener("DOMContentLoaded", startApp);
