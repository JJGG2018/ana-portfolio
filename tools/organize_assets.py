import os
import shutil

PORTFOLIO_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "web", "assets", "portfolio")

MAPPING = {
    # 00 Tacto
    "img_017_371x521.jpg": "tacto_thumb.jpg",
    "img_024_1083x1923.jpg": "tacto_cover.jpg",
    "img_033_1702x426.jpg": "tacto_kiosco.jpg",
    "img_036_873x615.jpg": "tacto_spread_jerga.jpg",
    "img_038_864x586.jpg": "tacto_spread_talento.jpg",
    "img_041_873x615.jpg": "tacto_spread_pasatiempos.jpg",
    "img_043_863x616.jpg": "tacto_spread_diy.jpg",
    # 01 Telefonica con Tom
    "img_019_371x522.jpg": "tom_thumb.jpg",
    "img_046_1414x797.jpg": "tom_building_city.jpg",
    "img_063_1370x878.jpg": "tom_building_cutout.jpg",
    "img_072_735x918.jpg": "tom_avatar.jpg",
    "img_079_1536x866.jpg": "tom_vr_hello.jpg",
    "img_084_1536x867.jpg": "tom_vr_items.jpg",
    # 02 Focus
    "img_015_371x522.jpg": "focus_thumb.jpg",
    "img_090_1527x859.jpg": "focus_desk.jpg",
    "img_291_1010x716.jpg": "focus_sketches.jpg",
    "img_301_1923x1012.jpg": "focus_structure.jpg",
    "img_323_701x870.jpg": "focus_portable.jpg",
    "img_325_225x297.jpg": "focus_ring_1.jpg",
    "img_327_254x297.jpg": "focus_ring_2.jpg",
    "img_329_244x297.jpg": "focus_ring_3.jpg",
    "img_344_1923x1083.jpg": "focus_pomodoro.jpg",
    "img_349_1520x857.jpg": "focus_library.jpg",
    # 03 Chile
    "img_018_336x472.jpg": "chile_thumb.jpg",
    "img_351_957x539.jpg": "chile_hero.jpg",
    "img_386_1269x715.jpg": "chile_exploded.jpg",
    "img_391_1472x701.jpg": "chile_rooftops.jpg",
    "img_396_1521x855.jpg": "chile_sunset.jpg",
    # 04 Cafeliko
    "img_012_371x522.jpg": "cafeliko_thumb.jpg",
    "img_399_1096x615.jpg": "cafeliko_box.jpg",
    "img_653_1009x967.jpg": "cafeliko_strip.jpg",
    "img_666_1536x866.jpg": "cafeliko_pack.jpg",
    "img_672_1536x866.jpg": "cafeliko_kitchen.jpg",
}

def organize():
    keep = set(MAPPING.values())
    for src, dst in MAPPING.items():
        src_p = os.path.join(PORTFOLIO_DIR, src)
        dst_p = os.path.join(PORTFOLIO_DIR, dst)
        if os.path.exists(src_p):
            shutil.copy2(src_p, dst_p)
    for fname in os.listdir(PORTFOLIO_DIR):
        if fname not in keep:
            os.remove(os.path.join(PORTFOLIO_DIR, fname))
    print(f"Cleaned portfolio assets: {len(os.listdir(PORTFOLIO_DIR))} curated images ready.")

if __name__ == "__main__":
    organize()
