import os
from PIL import Image, ImageDraw, ImageFont

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
ASSETS_DIR = os.path.join(BASE_DIR, "web", "assets", "portfolio")
BUILDING_IMG_PATH = os.path.join(ASSETS_DIR, "tom_building_city.jpg")

def create_social_assets():
    # 1. Crear OG PREVIEW (1200 x 630 px) para WhatsApp / Redes Sociales
    W, H = 1200, 630
    canvas = Image.new("RGB", (W, H), color="#e5e5e2")
    draw = ImageDraw.Draw(canvas)

    # Cargar y encuadrar imagen del edificio a la derecha
    if os.path.exists(BUILDING_IMG_PATH):
        building = Image.open(BUILDING_IMG_PATH)
        bw, bh = building.size
        # Recortar y escalar para que ocupe la mitad derecha
        target_w = 660
        target_h = H
        ratio = max(target_w / bw, target_h / bh)
        nw, nh = int(bw * ratio), int(bh * ratio)
        building_resized = building.resize((nw, nh), Image.Resampling.LANCZOS)
        # Pegar en la derecha
        left_crop = (nw - target_w) // 2
        top_crop = (nh - target_h) // 2
        cropped = building_resized.crop((left_crop, top_crop, left_crop + target_w, top_crop + target_h))
        canvas.paste(cropped, (W - target_w, 0))

        # Degradado suave hacia el fondo gris de la izquierda
        grad = Image.new("RGBA", (140, H))
        gdraw = ImageDraw.Draw(grad)
        for x in range(140):
            alpha = int(255 * (1.0 - x / 140))
            gdraw.line([(x, 0), (x, H)], fill=(229, 229, 226, alpha))
        canvas.paste(grad, (W - target_w, 0), grad)

    # Tipografía y textos a la izquierda
    # Intentar cargar fuentes de sistema de Windows (Georgia o Arial)
    try:
        font_serif_big = ImageFont.truetype("georgiab.ttf", 68)
        font_serif_med = ImageFont.truetype("georgiai.ttf", 28)
        font_sans = ImageFont.truetype("arialbd.ttf", 22)
        font_sans_sub = ImageFont.truetype("arial.ttf", 20)
    except:
        font_serif_big = ImageFont.load_default()
        font_serif_med = ImageFont.load_default()
        font_sans = ImageFont.load_default()
        font_sans_sub = ImageFont.load_default()

    # Borde azul de marca
    draw.rectangle([0, 0, 16, H], fill="#0018ff")

    # Textos
    draw.text((60, 120), "PORTFOLIO 2025", fill="#5a5d64", font=font_sans)
    draw.text((60, 165), "Ana Galilea", fill="#0018ff", font=font_serif_big)
    draw.text((60, 260), "Diseño de Producto", fill="#121316", font=font_serif_med)

    # Lista de proyectos destacados
    bullet_y = 350
    bullets = [
      "• 04 Cafeliko · Producto, packaging y ritual",
      "• 00 Tacto · Periódico físico vs. saturación digital",
      "• 01 Telefónica con Tom · Onboarding VR",
      "• 02 Focus · Cabina pop-up y método Pomodoro",
      "• 03 Chile · Infraestructura verde y biomimética"
    ]
    for b in bullets:
        draw.text((60, bullet_y), b, fill="#2c2e33", font=font_sans_sub)
        bullet_y += 34

    # Tag inferior
    draw.text((60, 550), "anagalilea.xyz — Experiencia Interactiva", fill="#0018ff", font=font_sans)

    og_path = os.path.join(ASSETS_DIR, "og_preview.jpg")
    canvas.save(og_path, "JPEG", quality=90)
    print(f"Generated OG Preview: {og_path} ({os.path.getsize(og_path)} bytes)")

    # 2. Crear FAVICON (Icono cuadrado con 'AG' en azul Klein)
    fav_size = 180
    fav = Image.new("RGBA", (fav_size, fav_size), color=(0, 0, 0, 0))
    fdraw = ImageDraw.Draw(fav)
    # Fondo circular azul Klein
    fdraw.ellipse([8, 8, fav_size - 8, fav_size - 8], fill="#0018ff")
    try:
        fav_font = ImageFont.truetype("georgiab.ttf", 80)
    except:
        fav_font = ImageFont.load_default()
    # Centrar texto
    bbox = fdraw.textbbox((0, 0), "AG", font=fav_font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    tx = (fav_size - tw) // 2
    ty = (fav_size - th) // 2 - 6
    fdraw.text((tx, ty), "AG", fill="#ffffff", font=fav_font)

    fav_path = os.path.join(ASSETS_DIR, "favicon.png")
    fav.save(fav_path, "PNG")
    apple_path = os.path.join(ASSETS_DIR, "apple-touch-icon.png")
    fav.save(apple_path, "PNG")
    print(f"Generated Favicons: {fav_path}, {apple_path}")

if __name__ == "__main__":
    create_social_assets()
