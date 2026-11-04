#![cfg_attr(target_arch = "wasm32", no_std)]

//! # 24 Horas con Ana — Motor de Portfolio Interactivo (Rust + WebAssembly)
//!
//! Este módulo implementa el motor de estado, físicas 2.5D, sistema de partículas y
//! lógica de los 5 mini-juegos del edificio seccionado de **Ana Galilea** (Diseño de Producto, 2025).
//!
//! ## Estructura del Edificio (Ciclo de 24 Horas)
//! - **Planta 0 (08:00 · La Cocina — `04. Cafeliko`):** Dispensador de dosis de cafeína (`LIGHT`, `CLASSICO`, `SUPER`) y ritual de cafetera italiana en 6 pasos.
//! - **Planta 1 (09:30 · El Kiosco — `00. Tacto`):** Periódico físico contra la hipermediación digital. Pasar páginas con físicas, sopa de letras y *"¿Dónde está Mariano Rajoy?"*.
//! - **Planta 2 (11:00 · Oficina Telefónica — `01. Telefónica con Tom`):** Recorrido guiado con físicas de resorte junto al asistente virtual **Tom** recogiendo los 9 ítems de onboarding.
//! - **Planta 3 (16:00 · El Estudio — `02. Focus`):** Plegado/desplegado Pop-Up de fibra de vidrio y bloqueo de notificaciones mediante el *Bolsillo Focus* (Pomodoro 20 min).
//! - **Planta 4 (19:30 · La Azotea — `03. Chile`):** Vuelo del ave *fío-fío* (*Elaenia albiceps*) sobre refugios biodegradables y estructura Voronoi para germinar cultivos urbanos sin combustibles fósiles.

#[cfg(target_arch = "wasm32")]
#[panic_handler]
fn panic(_info: &core::panic::PanicInfo) -> ! {
    loop {}
}

/// Número total de plantas del edificio-diorama.
pub const FLOOR_COUNT: usize = 5;
/// Número de ítems de onboarding en la planta de Telefónica con Tom.
pub const TOM_ITEMS_COUNT: usize = 9;
/// Número de semillas/brotes en la azotea del proyecto Chile.
pub const CHILE_PLANTS_COUNT: usize = 8;
/// Número de partículas activas en el motor de efectos.
pub const MAX_PARTICLES: usize = 80;

/// Tipos de partículas gestionadas por el motor en memoria lineal WASM.
#[repr(u8)]
#[derive(Copy, Clone, PartialEq, Eq)]
pub enum ParticleKind {
    Inactive = 0,
    CoffeeSteam = 1,
    DigitalNoise = 2,
    TomOrb = 3,
    FocusAura = 4,
    ChileSeed = 5,
}

#[repr(C)]
#[derive(Copy, Clone)]
pub struct Particle {
    pub x: f32,
    pub y: f32,
    pub vx: f32,
    pub vy: f32,
    pub life: f32,
    pub max_life: f32,
    pub size: f32,
    pub kind: u8,
}

impl Particle {
    pub const fn empty() -> Self {
        Self {
            x: 0.0,
            y: 0.0,
            vx: 0.0,
            vy: 0.0,
            life: 0.0,
            max_life: 1.0,
            size: 1.0,
            kind: ParticleKind::Inactive as u8,
        }
    }
}

/// Estado global del edificio interactivo y de los 5 proyectos de Ana Galilea.
#[repr(C)]
pub struct WorldState {
    /// Tiempo global acumulado (segundos)
    pub time: f32,
    /// Hora del día en formato decimal (8.0 = 08:00 AM ... 19.5 = 19:30 PM)
    pub hour_of_day: f32,
    /// Hora objetivo según la planta activa
    pub target_hour: f32,

    // --- Personaje (Ana / Visitante) ---
    pub player_floor: u32,
    pub target_floor: u32,
    /// Posición horizontal normalizada en la planta (0.08 a 0.92)
    pub player_x: f32,
    /// Posición vertical interpolada (0.0 = Planta 0 Cocina, 4.0 = Planta 4 Azotea)
    pub player_y: f32,
    pub player_target_x: f32,
    pub player_vx: f32,
    pub walk_phase: f32,
    pub facing_dir: f32,

    // --- Cámara del Diorama ---
    pub cam_y: f32,
    pub cam_zoom: f32,
    pub target_cam_zoom: f32,

    // --- Proyecto 04: Cafeliko (Planta 0 - 08:00 AM) ---
    /// Intensidad seleccionada: 0 = LIGHT (1 punto), 1 = CLASSICO (2 puntos), 2 = SUPER (3 puntos)
    pub cafeliko_grade: u32,
    /// Paso actual de los 6 pasos (0 = sin empezar .. 6 = ¡Cafeliko listo!)
    pub cafeliko_step: u32,
    /// Estiramiento físico de la tira de dosis al arrastrar (0.0 a 1.0)
    pub cafeliko_strip_pull: f32,
    /// Progreso de ebullición de la cafetera italiana (0.0 a 1.0)
    pub cafeliko_brew_progress: f32,

    // --- Proyecto 00: Tacto (Planta 1 - 09:30 AM) ---
    /// Nivel de saturación digital (1.0 = caos de notificaciones, 0.0 = tregua visual en papel)
    pub tacto_digital_stress: f32,
    /// ¿Tiene el periódico físico Tacto abierto? (0 = en buzón, 1 = leyendo)
    pub tacto_newspaper_open: u32,
    /// Página actual del periódico (0 = Portada, 1 = Jerga Actual, 2 = Talento unkiid, 3 = Mariano Rajoy & Sopa, 4 = Gymrats & DIY)
    pub tacto_page: u32,
    /// Ángulo de paso de página con inercia física
    pub tacto_page_turn_anim: f32,
    /// Mini-juego "¿Dónde está Mariano Rajoy?" completado (0 o 1)
    pub tacto_rajoy_found: u32,
    /// Palabras encontradas en la sopa de letras (bitmask de 4 palabras: RANDOM, CRUSH, NPC, CHILL)
    pub tacto_words_mask: u32,

    // --- Proyecto 01: Telefónica con Tom (Planta 2 - 11:00 AM) ---
    /// Posición X del robot Tom (sigue al jugador con físicas de muelle)
    pub tom_x: f32,
    /// Posición Y flotante del robot Tom
    pub tom_y: f32,
    pub tom_vx: f32,
    pub tom_wave_anim: f32,
    /// Máscara de bits de los 9 ítems naranjas recogidos (bits 0..8)
    pub tom_items_mask: u32,
    /// Contador de ítems recogidos (0..9)
    pub tom_items_collected: u32,
    /// Sub-planta desbloqueada en el edificio de Telefónica (1, 2 o 3)
    pub tom_unlocked_level: u32,
    /// Test de onboarding superado (0 o 1)
    pub tom_quiz_passed: u32,

    // --- Proyecto 02: Focus (Planta 3 - 16:00 PM) ---
    /// Estado de plegado Pop-Up: 0 = Disco plegado, 1 = Aros semidesplegados, 2 = Cabina desplegada en mesa
    pub focus_popup_stage: u32,
    /// Animación elástica de los aros de fibra de vidrio (0.0 a 1.0)
    pub focus_deploy_anim: f32,
    /// ¿Está el móvil guardado en el Bolsillo Focus? (0 = distraído, 1 = bloqueado Pomodoro activo)
    pub focus_phone_locked: u32,
    /// Segundos restantes del ciclo Pomodoro (1200.0 = 20:00 min)
    pub focus_pomodoro_secs: f32,
    /// Nivel de concentración alcanzado (0.0 a 1.0)
    pub focus_zen_level: f32,

    // --- Proyecto 03: Chile (Planta 4 / Azotea - 19:30 PM) ---
    /// Posición X del ave fío-fío (Elaenia albiceps) en la azotea
    pub bird_x: f32,
    /// Posición Y de vuelo sobre la cubierta
    pub bird_y: f32,
    pub bird_vx: f32,
    pub bird_vy: f32,
    pub bird_target_x: f32,
    pub bird_target_y: f32,
    pub bird_wing_phase: f32,
    /// Estado de biodegradación de los 3 refugios (0.0 = intacto, 1.0 = integrado en tierra fértil)
    pub chile_shelter_bio: [f32; 3],
    /// Crecimiento de los 8 brotes de chile en la cubierta verde (0.0 a 1.0)
    pub chile_sprouts: [f32; CHILE_PLANTS_COUNT],
    /// Progreso de vista explosionada (0.0 = ensamblado en azotea, 1.0 = capas separadas: Refugio + Voronoi + Tierra)
    pub chile_exploded_view: f32,
    pub chile_target_exploded: f32,

    // --- Progreso global del visitante (Gamificación del Portfolio) ---
    /// Bitmask de proyectos completados al 100% (bits 0..4)
    pub completed_projects_mask: u32,
    /// Semilla pseudoaleatoria Xorshift32
    pub rng_state: u32,

    // --- Sistema de partículas en tiempo real ---
    pub particles: [Particle; MAX_PARTICLES],
}

/// Instancia estática en memoria lineal de WebAssembly.
static mut WORLD: WorldState = WorldState::new();

impl WorldState {
    pub const fn new() -> Self {
        Self {
            time: 0.0,
            hour_of_day: 8.0,
            target_hour: 8.0,

            player_floor: 0,
            target_floor: 0,
            player_x: 0.28,
            player_y: 0.0,
            player_target_x: 0.28,
            player_vx: 0.0,
            walk_phase: 0.0,
            facing_dir: 1.0,

            cam_y: 0.0,
            cam_zoom: 1.0,
            target_cam_zoom: 1.0,

            cafeliko_grade: 1, // CLASSICO por defecto
            cafeliko_step: 0,
            cafeliko_strip_pull: 0.0,
            cafeliko_brew_progress: 0.0,

            tacto_digital_stress: 0.85,
            tacto_newspaper_open: 0,
            tacto_page: 0,
            tacto_page_turn_anim: 0.0,
            tacto_rajoy_found: 0,
            tacto_words_mask: 0,

            tom_x: 0.42,
            tom_y: 2.0,
            tom_vx: 0.0,
            tom_wave_anim: 1.0,
            tom_items_mask: 0,
            tom_items_collected: 0,
            tom_unlocked_level: 1,
            tom_quiz_passed: 0,

            focus_popup_stage: 0,
            focus_deploy_anim: 0.0,
            focus_phone_locked: 0,
            focus_pomodoro_secs: 1200.0,
            focus_zen_level: 0.0,

            bird_x: 0.22,
            bird_y: 0.68,
            bird_vx: 0.0,
            bird_vy: 0.0,
            bird_target_x: 0.50,
            bird_target_y: 0.55,
            bird_wing_phase: 0.0,
            chile_shelter_bio: [0.15, 0.15, 0.15],
            chile_sprouts: [0.12, 0.08, 0.15, 0.10, 0.14, 0.09, 0.11, 0.13],
            chile_exploded_view: 0.0,
            chile_target_exploded: 0.0,

            completed_projects_mask: 0,
            rng_state: 0xA4A_2025,
            particles: [Particle::empty(); MAX_PARTICLES],
        }
    }

    #[inline]
    fn next_rand_f32(&mut self) -> f32 {
        let mut x = self.rng_state;
        x ^= x << 13;
        x ^= x >> 17;
        x ^= x << 5;
        self.rng_state = if x == 0 { 0xA4A_2025 } else { x };
        (x & 0x00FF_FFFF) as f32 / 16_777_216.0
    }

    fn spawn_particle(&mut self, x: f32, y: f32, vx: f32, vy: f32, max_life: f32, size: f32, kind: ParticleKind) {
        for p in self.particles.iter_mut() {
            if p.kind == ParticleKind::Inactive as u8 || p.life <= 0.0 {
                *p = Particle {
                    x,
                    y,
                    vx,
                    vy,
                    life: max_life,
                    max_life,
                    size,
                    kind: kind as u8,
                };
                break;
            }
        }
    }
}

/// Aproximación rápida y sin `std` de `sin(x)` para animaciones procedimentales en WASM.
#[inline]
pub fn fast_sin(mut x: f32) -> f32 {
    const PI: f32 = 3.14159265;
    const TWO_PI: f32 = 6.28318530;
    let turns = (x / TWO_PI) as i32 as f32;
    x -= turns * TWO_PI;
    if x > PI {
        x -= TWO_PI;
    } else if x < -PI {
        x += TWO_PI;
    }
    let y = 1.27323954 * x - 0.405284735 * x * if x < 0.0 { -x } else { x };
    0.225 * (y * if y < 0.0 { -y } else { y } - y) + y
}

#[inline]
fn clamp(val: f32, min: f32, max: f32) -> f32 {
    if val < min {
        min
    } else if val > max {
        max
    } else {
        val
    }
}

#[inline]
fn abs(val: f32) -> f32 {
    if val < 0.0 { -val } else { val }
}

/// Inicializa o reinicia el mundo del edificio.
#[no_mangle]
pub extern "C" fn init_world() {
    unsafe {
        WORLD = WorldState::new();
    }
}

/// Avanza la simulación física del edificio `dt` segundos.
#[no_mangle]
pub extern "C" fn tick_world(dt: f32) {
    let dt = clamp(dt, 0.001, 0.05);
    unsafe {
        let w = &mut *core::ptr::addr_of_mut!(WORLD);
        w.time += dt;

        // 1. Hora del día según la planta (08:00 -> 09:30 -> 11:00 -> 16:00 -> 19:30)
        w.target_hour = match w.target_floor {
            0 => 8.0,
            1 => 9.5,
            2 => 11.0,
            3 => 16.0,
            _ => 19.5,
        };
        w.hour_of_day += (w.target_hour - w.hour_of_day) * clamp(dt * 3.5, 0.0, 1.0);

        // 2. Movimiento del personaje en la planta y entre plantas (escaleras/ascensor)
        let target_y = w.target_floor as f32;
        let dy = target_y - w.player_y;
        if abs(dy) > 0.01 {
            // Subiendo o bajando de planta por el núcleo de escaleras
            let stair_x = 0.16;
            let dx_stair = stair_x - w.player_x;
            if abs(dx_stair) > 0.03 {
                let dir = if dx_stair > 0.0 { 1.0 } else { -1.0 };
                w.facing_dir = dir;
                w.player_x += dir * dt * 0.65;
                w.walk_phase += dt * 12.0;
            } else {
                w.player_y += dy * clamp(dt * 5.0, 0.0, 1.0);
                w.walk_phase += dt * 14.0;
                if abs(target_y - w.player_y) < 0.04 {
                    w.player_y = target_y;
                    w.player_floor = w.target_floor;
                }
            }
        } else {
            w.player_y = target_y;
            w.player_floor = w.target_floor;
            let dx = w.player_target_x - w.player_x;
            if abs(dx) > 0.005 {
                w.facing_dir = if dx > 0.0 { 1.0 } else { -1.0 };
                let speed = clamp(abs(dx) * 4.5, 0.18, 0.62);
                w.player_vx = if dx > 0.0 { speed } else { -speed };
                w.player_x = clamp(w.player_x + w.player_vx * dt, 0.08, 0.92);
                w.walk_phase += dt * (8.0 + speed * 10.0);
            } else {
                w.player_vx = 0.0;
            }
        }

        // 3. Cámara suave siguiendo la planta activa
        w.cam_y += (w.player_y - w.cam_y) * clamp(dt * 5.5, 0.0, 1.0);
        w.cam_zoom += (w.target_cam_zoom - w.cam_zoom) * clamp(dt * 6.0, 0.0, 1.0);

        // 4. Físicas de Planta 0: 04. Cafeliko
        if w.cafeliko_step == 5 {
            w.cafeliko_brew_progress = clamp(w.cafeliko_brew_progress + dt * 0.45, 0.0, 1.0);
            // Emitir vapor aromático de la cafetera italiana
            if w.next_rand_f32() < 0.45 {
                let rx = (w.next_rand_f32() - 0.5) * 0.03;
                let vy = 0.18 + w.next_rand_f32() * 0.12;
                let sz = 5.0 + w.next_rand_f32() * 5.0;
                w.spawn_particle(
                    0.64 + rx,
                    0.35,
                    rx * 0.4,
                    vy,
                    1.4,
                    sz,
                    ParticleKind::CoffeeSteam,
                );
            }
            if w.cafeliko_brew_progress >= 1.0 {
                w.cafeliko_step = 6;
                w.completed_projects_mask |= 1 << 4;
            }
        } else {
            w.cafeliko_strip_pull *= 1.0 - clamp(dt * 6.0, 0.0, 1.0);
        }

        // 5. Físicas de Planta 1: 00. Tacto
        if w.tacto_newspaper_open == 1 {
            w.tacto_digital_stress = clamp(w.tacto_digital_stress - dt * 0.35, 0.0, 1.0);
        } else if w.player_floor == 1 && w.completed_projects_mask & (1 << 0) == 0 {
            w.tacto_digital_stress = clamp(w.tacto_digital_stress + dt * 0.06, 0.15, 0.95);
            if w.next_rand_f32() < 0.25 {
                let px = 0.25 + w.next_rand_f32() * 0.55;
                let py = 1.2 + w.next_rand_f32() * 0.6;
                let pvx = (w.next_rand_f32() - 0.5) * 0.2;
                w.spawn_particle(
                    px,
                    py,
                    pvx,
                    0.08,
                    0.9,
                    4.0,
                    ParticleKind::DigitalNoise,
                );
            }
        }
        w.tacto_page_turn_anim *= 1.0 - clamp(dt * 7.0, 0.0, 1.0);
        if w.tacto_rajoy_found == 1 || w.tacto_words_mask == 0b1111 {
            w.completed_projects_mask |= 1 << 0;
        }

        // 6. Físicas de Planta 2: 01. Telefónica con Tom (resorte + flotación)
        let desired_tom_x = clamp(w.player_x + if w.facing_dir > 0.0 { -0.10 } else { 0.10 }, 0.14, 0.88);
        let spring_force = (desired_tom_x - w.tom_x) * 14.0;
        w.tom_vx = (w.tom_vx + spring_force * dt) * (1.0 - clamp(dt * 5.5, 0.0, 0.9));
        w.tom_x = clamp(w.tom_x + w.tom_vx * dt, 0.12, 0.90);
        w.tom_y = 2.0 + fast_sin(w.time * 3.4) * 0.06;
        if w.tom_wave_anim > 0.0 {
            w.tom_wave_anim = clamp(w.tom_wave_anim - dt * 0.8, 0.0, 1.0);
        }

        // Auto-recoger ítems cercanos si el jugador camina por la planta 2
        if w.player_floor == 2 {
            let item_positions: [f32; TOM_ITEMS_COUNT] = [
                0.24, 0.38, 0.54, // Sub-nivel 1
                0.30, 0.48, 0.68, // Sub-nivel 2
                0.26, 0.58, 0.80, // Sub-nivel 3
            ];
            let max_idx = (w.tom_unlocked_level as usize * 3).min(TOM_ITEMS_COUNT);
            for i in 0..max_idx {
                let bit = 1u32 << i;
                if (w.tom_items_mask & bit) == 0 && abs(w.player_x - item_positions[i]) < 0.055 {
                    w.tom_items_mask |= bit;
                    w.tom_items_collected = w.tom_items_mask.count_ones();
                    w.tom_wave_anim = 1.0;
                    if w.tom_items_collected >= 3 && w.tom_unlocked_level < 2 {
                        w.tom_unlocked_level = 2;
                    }
                    if w.tom_items_collected >= 6 && w.tom_unlocked_level < 3 {
                        w.tom_unlocked_level = 3;
                    }
                    if w.tom_items_collected >= 9 {
                        w.completed_projects_mask |= 1 << 1;
                    }
                    for _ in 0..6 {
                        let vx = (w.next_rand_f32() - 0.5) * 0.35;
                        let vy = 0.12 + w.next_rand_f32() * 0.25;
                        w.spawn_particle(item_positions[i], 2.3, vx, vy, 1.1, 6.0, ParticleKind::TomOrb);
                    }
                }
            }
        }

        // 7. Físicas de Planta 3: 02. Focus (Mecanismo Pop-Up + Pomodoro)
        let target_deploy = (w.focus_popup_stage as f32) * 0.5;
        w.focus_deploy_anim += (target_deploy - w.focus_deploy_anim) * clamp(dt * 6.5, 0.0, 1.0);
        if w.focus_phone_locked == 1 && w.focus_popup_stage == 2 {
            w.focus_pomodoro_secs = clamp(w.focus_pomodoro_secs - dt * 15.0, 0.0, 1200.0);
            w.focus_zen_level = clamp(w.focus_zen_level + dt * 0.35, 0.0, 1.0);
            if w.focus_zen_level > 0.7 {
                w.completed_projects_mask |= 1 << 2;
            }
            if w.next_rand_f32() < 0.3 {
                let angle = w.next_rand_f32() * 6.283185;
                w.spawn_particle(
                    0.56 + fast_sin(angle) * 0.08,
                    3.35,
                    fast_sin(angle) * 0.05,
                    0.10,
                    1.3,
                    5.0,
                    ParticleKind::FocusAura,
                );
            }
        } else {
            w.focus_zen_level = clamp(w.focus_zen_level - dt * 0.15, 0.0, 1.0);
        }

        // 8. Físicas de Planta 4 (Azotea): 03. Chile (Vuelo del fío-fío + Germinación)
        w.chile_exploded_view += (w.chile_target_exploded - w.chile_exploded_view) * clamp(dt * 5.0, 0.0, 1.0);
        let bdx = w.bird_target_x - w.bird_x;
        let bdy = w.bird_target_y - w.bird_y;
        w.bird_vx = (w.bird_vx + bdx * 6.0 * dt) * (1.0 - clamp(dt * 3.2, 0.0, 0.8));
        w.bird_vy = (w.bird_vy + bdy * 6.0 * dt) * (1.0 - clamp(dt * 3.2, 0.0, 0.8));
        w.bird_x = clamp(w.bird_x + w.bird_vx * dt, 0.10, 0.90);
        w.bird_y = clamp(w.bird_y + w.bird_vy * dt, 0.20, 0.88);
        w.bird_wing_phase += dt * (10.0 + (abs(w.bird_vx) + abs(w.bird_vy)) * 22.0);

        // Si el ave fío-fío sobrevuela los 3 refugios biodegradables, dispersa semillas y germinan
        let shelter_xs: [f32; 3] = [0.38, 0.54, 0.70];
        for (idx, &sx) in shelter_xs.iter().enumerate() {
            if abs(w.bird_x - sx) < 0.09 && w.bird_y < 0.62 {
                w.chile_shelter_bio[idx] = clamp(w.chile_shelter_bio[idx] + dt * 0.28, 0.0, 1.0);
                if w.next_rand_f32() < 0.25 {
                    let bx = w.bird_x;
                    let by = 4.0 + w.bird_y;
                    let bvx = (w.next_rand_f32() - 0.5) * 0.12;
                    w.spawn_particle(
                        bx,
                        by,
                        bvx,
                        -0.22,
                        1.2,
                        4.5,
                        ParticleKind::ChileSeed,
                    );
                }
            }
        }
        let avg_bio = (w.chile_shelter_bio[0] + w.chile_shelter_bio[1] + w.chile_shelter_bio[2]) / 3.0;
        if avg_bio > 0.35 {
            let mut full_grown = 0usize;
            for (i, sprout) in w.chile_sprouts.iter_mut().enumerate() {
                let rate = 0.12 + (i as f32 * 0.015);
                *sprout = clamp(*sprout + dt * rate * avg_bio, 0.0, 1.0);
                if *sprout > 0.85 {
                    full_grown += 1;
                }
            }
            if full_grown >= 6 {
                w.completed_projects_mask |= 1 << 3;
            }
        }

        // 9. Actualizar partículas activas
        for p in w.particles.iter_mut() {
            if p.kind != ParticleKind::Inactive as u8 {
                p.life -= dt;
                if p.life <= 0.0 {
                    p.kind = ParticleKind::Inactive as u8;
                } else {
                    p.x += p.vx * dt;
                    p.y += p.vy * dt;
                }
            }
        }
    }
}

// ============================================================================
// API FFI EXPORTADA A JAVASCRIPT / CANVAS / WEBGL
// ============================================================================

#[no_mangle]
pub extern "C" fn set_target_floor(floor: u32) {
    unsafe {
        let f = if floor >= FLOOR_COUNT as u32 {
            (FLOOR_COUNT - 1) as u32
        } else {
            floor
        };
        WORLD.target_floor = f;
    }
}

#[no_mangle]
pub extern "C" fn move_player_to(norm_x: f32) {
    unsafe {
        WORLD.player_target_x = clamp(norm_x, 0.08, 0.92);
    }
}

// --- Controles Proyecto 04: Cafeliko ---
#[no_mangle]
pub extern "C" fn cafeliko_select_grade(grade: u32) {
    unsafe {
        WORLD.cafeliko_grade = grade.min(2);
    }
}

#[no_mangle]
pub extern "C" fn cafeliko_advance_step() -> u32 {
    unsafe {
        let w = &mut *core::ptr::addr_of_mut!(WORLD);
        if w.cafeliko_step < 5 {
            w.cafeliko_step += 1;
            if w.cafeliko_step == 2 {
                w.cafeliko_strip_pull = 1.0;
            }
        } else if w.cafeliko_step >= 6 {
            // Reiniciar para preparar otro café si se desea
            w.cafeliko_step = 1;
            w.cafeliko_brew_progress = 0.0;
        }
        w.cafeliko_step
    }
}

// --- Controles Proyecto 00: Tacto ---
#[no_mangle]
pub extern "C" fn tacto_toggle_newspaper(open: u32) {
    unsafe {
        WORLD.tacto_newspaper_open = if open != 0 { 1 } else { 0 };
        WORLD.tacto_page_turn_anim = 1.0;
    }
}

#[no_mangle]
pub extern "C" fn tacto_turn_page(delta: i32) -> u32 {
    unsafe {
        let w = &mut *core::ptr::addr_of_mut!(WORLD);
        let next = (w.tacto_page as i32 + delta).clamp(0, 4) as u32;
        if next != w.tacto_page {
            w.tacto_page = next;
            w.tacto_page_turn_anim = if delta > 0 { 1.0 } else { -1.0 };
        }
        w.tacto_page
    }
}

#[no_mangle]
pub extern "C" fn tacto_mark_rajoy_found() {
    unsafe {
        WORLD.tacto_rajoy_found = 1;
        WORLD.tacto_digital_stress = 0.0;
        WORLD.completed_projects_mask |= 1 << 0;
    }
}

#[no_mangle]
pub extern "C" fn tacto_mark_word_found(word_idx: u32) -> u32 {
    unsafe {
        if word_idx < 4 {
            WORLD.tacto_words_mask |= 1 << word_idx;
            if WORLD.tacto_words_mask == 0b1111 {
                WORLD.completed_projects_mask |= 1 << 0;
            }
        }
        WORLD.tacto_words_mask
    }
}

// --- Controles Proyecto 01: Telefónica con Tom ---
#[no_mangle]
pub extern "C" fn tom_collect_item(item_idx: u32) -> u32 {
    unsafe {
        let w = &mut *core::ptr::addr_of_mut!(WORLD);
        if item_idx < TOM_ITEMS_COUNT as u32 {
            w.tom_items_mask |= 1 << item_idx;
            w.tom_items_collected = w.tom_items_mask.count_ones();
            w.tom_wave_anim = 1.0;
            if w.tom_items_collected >= 3 && w.tom_unlocked_level < 2 {
                w.tom_unlocked_level = 2;
            }
            if w.tom_items_collected >= 6 && w.tom_unlocked_level < 3 {
                w.tom_unlocked_level = 3;
            }
            if w.tom_items_collected >= 9 {
                w.completed_projects_mask |= 1 << 1;
            }
        }
        w.tom_items_collected
    }
}

#[no_mangle]
pub extern "C" fn tom_pass_quiz() {
    unsafe {
        WORLD.tom_quiz_passed = 1;
        WORLD.tom_unlocked_level = 3;
        WORLD.completed_projects_mask |= 1 << 1;
    }
}

// --- Controles Proyecto 02: Focus ---
#[no_mangle]
pub extern "C" fn focus_advance_popup() -> u32 {
    unsafe {
        let w = &mut *core::ptr::addr_of_mut!(WORLD);
        w.focus_popup_stage = (w.focus_popup_stage + 1) % 3;
        if w.focus_popup_stage < 2 {
            w.focus_phone_locked = 0;
        }
        w.focus_popup_stage
    }
}

#[no_mangle]
pub extern "C" fn focus_toggle_phone_lock() -> u32 {
    unsafe {
        let w = &mut *core::ptr::addr_of_mut!(WORLD);
        if w.focus_popup_stage < 2 {
            w.focus_popup_stage = 2;
        }
        w.focus_phone_locked = if w.focus_phone_locked == 0 { 1 } else { 0 };
        if w.focus_phone_locked == 1 {
            w.completed_projects_mask |= 1 << 2;
        }
        w.focus_phone_locked
    }
}

// --- Controles Proyecto 03: Chile ---
#[no_mangle]
pub extern "C" fn chile_fly_bird_to(norm_x: f32, norm_y: f32) {
    unsafe {
        let w = &mut *core::ptr::addr_of_mut!(WORLD);
        w.bird_target_x = clamp(norm_x, 0.10, 0.90);
        w.bird_target_y = clamp(norm_y, 0.20, 0.85);
    }
}

#[no_mangle]
pub extern "C" fn chile_toggle_exploded() -> f32 {
    unsafe {
        let w = &mut *core::ptr::addr_of_mut!(WORLD);
        w.chile_target_exploded = if w.chile_target_exploded < 0.5 { 1.0 } else { 0.0 };
        w.chile_target_exploded
    }
}

#[no_mangle]
pub extern "C" fn chile_water_rooftop() {
    unsafe {
        let w = &mut *core::ptr::addr_of_mut!(WORLD);
        for b in w.chile_shelter_bio.iter_mut() {
            *b = clamp(*b + 0.35, 0.0, 1.0);
        }
        for s in w.chile_sprouts.iter_mut() {
            *s = clamp(*s + 0.35, 0.0, 1.0);
        }
        w.completed_projects_mask |= 1 << 3;
    }
}

// --- Getters rápidos para el motor de renderizado ---
#[no_mangle]
pub extern "C" fn get_time() -> f32 {
    unsafe { WORLD.time }
}

#[no_mangle]
pub extern "C" fn get_hour_of_day() -> f32 {
    unsafe { WORLD.hour_of_day }
}

#[no_mangle]
pub extern "C" fn get_player_floor() -> u32 {
    unsafe { WORLD.player_floor }
}

#[no_mangle]
pub extern "C" fn get_target_floor() -> u32 {
    unsafe { WORLD.target_floor }
}

#[no_mangle]
pub extern "C" fn get_player_x() -> f32 {
    unsafe { WORLD.player_x }
}

#[no_mangle]
pub extern "C" fn get_player_y() -> f32 {
    unsafe { WORLD.player_y }
}

#[no_mangle]
pub extern "C" fn get_walk_phase() -> f32 {
    unsafe { WORLD.walk_phase }
}

#[no_mangle]
pub extern "C" fn get_facing_dir() -> f32 {
    unsafe { WORLD.facing_dir }
}

#[no_mangle]
pub extern "C" fn get_cam_y() -> f32 {
    unsafe { WORLD.cam_y }
}

#[no_mangle]
pub extern "C" fn get_cafeliko_grade() -> u32 {
    unsafe { WORLD.cafeliko_grade }
}

#[no_mangle]
pub extern "C" fn get_cafeliko_step() -> u32 {
    unsafe { WORLD.cafeliko_step }
}

#[no_mangle]
pub extern "C" fn get_cafeliko_brew_progress() -> f32 {
    unsafe { WORLD.cafeliko_brew_progress }
}

#[no_mangle]
pub extern "C" fn get_tacto_stress() -> f32 {
    unsafe { WORLD.tacto_digital_stress }
}

#[no_mangle]
pub extern "C" fn get_tacto_open() -> u32 {
    unsafe { WORLD.tacto_newspaper_open }
}

#[no_mangle]
pub extern "C" fn get_tacto_page() -> u32 {
    unsafe { WORLD.tacto_page }
}

#[no_mangle]
pub extern "C" fn get_tacto_rajoy_found() -> u32 {
    unsafe { WORLD.tacto_rajoy_found }
}

#[no_mangle]
pub extern "C" fn get_tacto_words_mask() -> u32 {
    unsafe { WORLD.tacto_words_mask }
}

#[no_mangle]
pub extern "C" fn get_tom_x() -> f32 {
    unsafe { WORLD.tom_x }
}

#[no_mangle]
pub extern "C" fn get_tom_y() -> f32 {
    unsafe { WORLD.tom_y }
}

#[no_mangle]
pub extern "C" fn get_tom_items_mask() -> u32 {
    unsafe { WORLD.tom_items_mask }
}

#[no_mangle]
pub extern "C" fn get_tom_items_collected() -> u32 {
    unsafe { WORLD.tom_items_collected }
}

#[no_mangle]
pub extern "C" fn get_tom_unlocked_level() -> u32 {
    unsafe { WORLD.tom_unlocked_level }
}

#[no_mangle]
pub extern "C" fn get_focus_popup_stage() -> u32 {
    unsafe { WORLD.focus_popup_stage }
}

#[no_mangle]
pub extern "C" fn get_focus_deploy_anim() -> f32 {
    unsafe { WORLD.focus_deploy_anim }
}

#[no_mangle]
pub extern "C" fn get_focus_phone_locked() -> u32 {
    unsafe { WORLD.focus_phone_locked }
}

#[no_mangle]
pub extern "C" fn get_focus_pomodoro_secs() -> f32 {
    unsafe { WORLD.focus_pomodoro_secs }
}

#[no_mangle]
pub extern "C" fn get_focus_zen_level() -> f32 {
    unsafe { WORLD.focus_zen_level }
}

#[no_mangle]
pub extern "C" fn get_bird_x() -> f32 {
    unsafe { WORLD.bird_x }
}

#[no_mangle]
pub extern "C" fn get_bird_y() -> f32 {
    unsafe { WORLD.bird_y }
}

#[no_mangle]
pub extern "C" fn get_bird_wing_phase() -> f32 {
    unsafe { WORLD.bird_wing_phase }
}

#[no_mangle]
pub extern "C" fn get_chile_exploded_view() -> f32 {
    unsafe { WORLD.chile_exploded_view }
}

#[no_mangle]
pub extern "C" fn get_chile_sprout(idx: usize) -> f32 {
    unsafe {
        if idx < CHILE_PLANTS_COUNT {
            WORLD.chile_sprouts[idx]
        } else {
            0.0
        }
    }
}

#[no_mangle]
pub extern "C" fn get_completed_mask() -> u32 {
    unsafe { WORLD.completed_projects_mask }
}

#[no_mangle]
pub extern "C" fn get_particles_ptr() -> *const Particle {
    unsafe { core::ptr::addr_of!(WORLD.particles) as *const Particle }
}

#[no_mangle]
pub extern "C" fn get_particles_len() -> usize {
    MAX_PARTICLES
}

// ============================================================================
// TESTS UNITARIOS NATIVOS (ejecutables con `cargo test` desde Antigravity IDE)
// ============================================================================
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_world_initialization_and_elevator() {
        init_world();
        assert_eq!(get_player_floor(), 0);
        set_target_floor(2);
        for _ in 0..120 {
            tick_world(0.016);
        }
        assert_eq!(get_player_floor(), 2);
        assert!(get_hour_of_day() > 10.0);
    }

    #[test]
    fn test_cafeliko_6_steps_and_brewing() {
        init_world();
        cafeliko_select_grade(2); // SUPER
        for _ in 0..5 {
            cafeliko_advance_step();
        }
        assert_eq!(get_cafeliko_step(), 5);
        for _ in 0..180 {
            tick_world(0.02);
        }
        assert_eq!(get_cafeliko_step(), 6);
        assert_ne!(get_completed_mask() & (1 << 4), 0);
    }

    #[test]
    fn test_tom_onboarding_items_unlock_floors() {
        init_world();
        for i in 0..9 {
            tom_collect_item(i);
        }
        assert_eq!(get_tom_items_collected(), 9);
        assert_eq!(get_tom_unlocked_level(), 3);
        assert_ne!(get_completed_mask() & (1 << 1), 0);
    }
}
