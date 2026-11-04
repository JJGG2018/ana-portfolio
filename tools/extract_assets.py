import os
import re
import zlib
from PIL import Image
import io

PDF_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), "PORTFOLIO_SINTERMINAR.pdf")
OUT_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "web", "assets", "portfolio")

def extract_pdf_images():
    os.makedirs(OUT_DIR, exist_ok=True)
    with open(PDF_PATH, "rb") as f:
        data = f.read()

    # Find all stream objects in the PDF
    pattern = re.compile(rb"<<(.*?)>>\s*stream\r?\n", re.DOTALL)
    saved = []

    for idx, match in enumerate(pattern.finditer(data)):
        header = match.group(1)
        if b"/Subtype /Image" not in header and b"/Subtype/Image" not in header:
            continue

        start = match.end()
        end = data.find(b"endstream", start)
        if end == -1:
            continue
        stream_data = data[start:end].rstrip(b"\r\n")

        w_match = re.search(rb"/Width\s+(\d+)", header)
        h_match = re.search(rb"/Height\s+(\d+)", header)
        bpc_match = re.search(rb"/BitsPerComponent\s+(\d+)", header)
        w = int(w_match.group(1)) if w_match else 0
        h = int(h_match.group(1)) if h_match else 0
        bpc = int(bpc_match.group(1)) if bpc_match else 8

        # Skip tiny icons/masks
        if w < 120 or h < 120:
            continue

        if b"/DCTDecode" in header:
            # Direct JPEG stream
            try:
                img = Image.open(io.BytesIO(stream_data))
                out_name = f"img_{idx:03d}_{w}x{h}.jpg"
                out_path = os.path.join(OUT_DIR, out_name)
                img.save(out_path, quality=90)
                saved.append((out_name, w, h, "DCT"))
            except Exception as e:
                pass
        elif b"/FlateDecode" in header:
            try:
                raw = zlib.decompress(stream_data)
                if len(raw) == w * h * 3:
                    img = Image.frombytes("RGB", (w, h), raw)
                elif len(raw) == w * h * 4:
                    img = Image.frombytes("CMYK", (w, h), raw).convert("RGB")
                elif len(raw) == w * h:
                    img = Image.frombytes("L", (w, h), raw)
                else:
                    continue
                out_name = f"img_{idx:03d}_{w}x{h}.jpg"
                out_path = os.path.join(OUT_DIR, out_name)
                img.save(out_path, quality=88)
                saved.append((out_name, w, h, "Flate"))
            except Exception as e:
                pass

    print(f"Extracted {len(saved)} images to {OUT_DIR}:")
    for name, w, h, mode in saved:
        print(f"  {name} ({w}x{h}, {mode})")

if __name__ == "__main__":
    extract_pdf_images()
