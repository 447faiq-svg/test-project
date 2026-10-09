"""Extract specialty circle icons from the WPS screenshot."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageChops, ImageFilter

SRC = Path(
    r"C:\Users\Lenovo 13\.cursor\projects\c-Users-Lenovo-13-OneDrive-Documents-test-project"
    r"\assets\c__Users_Lenovo_13_AppData_Roaming_Cursor_User_workspaceStorage_"
    r"e3c48e1f231524a9f9e6989313452c88_images_Screenshot__178_-959d21bc-7847-49bc-8055-2b4cd0137f68.png"
)
OUT = Path(__file__).resolve().parents[1] / "public" / "specialties"

SLUGS = [
    "family-medicine",
    "dentistry",
    "internal-medicine",
    "pediatrics",
    "geriatrics",
    "general-practice",
    "general-surgery",
    "orthopedics",
    "cardiothoracic-surgery",
    "neurosurgery",
    "plastic-reconstructive-surgery",
    "urology",
    "otolaryngology-ent",
    "vascular-surgery",
    "cardiology",
    "pulmonology",
    "gastroenterology",
    "nephrology",
    "endocrinology",
    "rheumatology",
    "infectious-diseases",
    "hematology-oncology",
    "obstetrics-gynaecology",
    "maternal-fetal-medicine",
    "neurology",
    "psychiatry",
    "pain-management",
    "emergency-medicine-urgent-care",
    "critical-care-medicine",
    "anesthesiology",
    "radiology",
    "pathology",
    "physical-medicine-rehabilitation",
    "chiropractic-medicine",
]


def is_whiteish(rgb: tuple[int, int, int], threshold: int = 245) -> bool:
    return rgb[0] >= threshold and rgb[1] >= threshold and rgb[2] >= threshold


def content_bbox(im: Image.Image) -> tuple[int, int, int, int]:
    """Find the white document page area, then the colored icon content within it."""
    w, h = im.size
    px = im.load()

    # Skip top WPS chrome: find first mostly-white row after y=80
    top = 90
    for y in range(80, h // 2):
        whites = sum(
            1 for x in range(w // 5, 4 * w // 5, 4) if is_whiteish(px[x, y], 240)
        )
        if whites > 40:
            top = y
            break

    # Find bottom of white page before gray UI
    bottom = h - 10
    for y in range(h - 1, top, -1):
        row = [px[x, y] for x in range(0, w, 8)]
        avg = sum(sum(c) for c in row) / (3 * len(row))
        if avg > 230:
            bottom = y
            break

    # Left/right: trim gray side margins by finding white page
    left = 0
    for x in range(0, w // 2):
        col = [px[x, y] for y in range(top, bottom, 6)]
        avg = sum(sum(c) for c in col) / (3 * len(col))
        if avg > 235:
            left = x
            break
    right = w - 1
    for x in range(w - 1, w // 2, -1):
        col = [px[x, y] for y in range(top, bottom, 6)]
        avg = sum(sum(c) for c in col) / (3 * len(col))
        if avg > 235:
            right = x
            break

    page = im.crop((left, top, right + 1, bottom + 1))
    # Now find non-white content inside the page (icons + labels)
    gray = page.convert("L")
    mask = gray.point(lambda p: 255 if p < 250 else 0)
    bbox = mask.getbbox()
    if not bbox:
        return left, top, right + 1, bottom + 1
    return left + bbox[0], top + bbox[1], left + bbox[2], top + bbox[3]


def find_circles(im: Image.Image) -> list[tuple[int, int, int]]:
    """Return list of (cx, cy, radius) for pastel circular icons, top-to-bottom left-to-right."""
    w, h = im.size
    px = im.load()
    visited = [[False] * w for _ in range(h)]
    circles: list[tuple[int, int, int]] = []

    def colorful(x: int, y: int) -> bool:
        r, g, b = px[x, y]
        if r > 248 and g > 248 and b > 248:
            return False
        # skip near-black text
        if r < 40 and g < 40 and b < 40:
            return False
        # pastel / colored pixels have some chroma or mid brightness
        mx, mn = max(r, g, b), min(r, g, b)
        return (mx - mn > 12) or (120 < (r + g + b) / 3 < 245)

    for y in range(0, h, 2):
        for x in range(0, w, 2):
            if visited[y][x] or not colorful(x, y):
                continue
            # flood-ish bounding box for connected colorful region
            stack = [(x, y)]
            visited[y][x] = True
            minx = maxx = x
            miny = maxy = y
            count = 0
            while stack and count < 20000:
                cx, cy = stack.pop()
                count += 1
                minx = min(minx, cx)
                maxx = max(maxx, cx)
                miny = min(miny, cy)
                maxy = max(maxy, cy)
                for nx, ny in (
                    (cx - 2, cy),
                    (cx + 2, cy),
                    (cx, cy - 2),
                    (cx, cy + 2),
                ):
                    if 0 <= nx < w and 0 <= ny < h and not visited[ny][nx]:
                        visited[ny][nx] = True
                        if colorful(nx, ny):
                            stack.append((nx, ny))

            bw = maxx - minx
            bh = maxy - miny
            # circular icons are roughly square and reasonably large
            if bw < 28 or bh < 28:
                continue
            ratio = bw / max(bh, 1)
            if ratio < 0.75 or ratio > 1.35:
                continue
            if abs(bw - bh) > 18:
                continue
            cx = (minx + maxx) // 2
            cy = (miny + maxy) // 2
            radius = max(bw, bh) // 2 + 2
            circles.append((cx, cy, radius))

    # de-duplicate overlapping detections
    circles.sort(key=lambda c: (c[1], c[0]))
    filtered: list[tuple[int, int, int]] = []
    for c in circles:
        if any(abs(c[0] - f[0]) < 20 and abs(c[1] - f[1]) < 20 for f in filtered):
            continue
        filtered.append(c)

    # sort into reading order by rows
    filtered.sort(key=lambda c: (c[1] // 25, c[0]))
    return filtered


def crop_circle(im: Image.Image, cx: int, cy: int, radius: int) -> Image.Image:
    pad = 4
    size = radius * 2 + pad * 2
    left = cx - radius - pad
    top = cy - radius - pad
    # paste onto transparent canvas with circular mask
    region = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    src = im.convert("RGBA")
    cropped = src.crop((left, top, left + size, top + size))
    region.paste(cropped, (0, 0))
    mask = Image.new("L", (size, size), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((pad, pad, size - pad - 1, size - pad - 1), fill=255)
    # soft edge
    mask = mask.filter(ImageFilter.GaussianBlur(0.6))
    out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    out.paste(region, (0, 0))
    out.putalpha(mask)
    return out.resize((160, 160), Image.Resampling.LANCZOS)


def main() -> None:
    im = Image.open(SRC).convert("RGB")
    bbox = content_bbox(im)
    print("content bbox", bbox)
    content = im.crop(bbox)
    debug_path = OUT.parent / "specialties-debug-content.png"
    OUT.mkdir(parents=True, exist_ok=True)
    content.save(debug_path)
    print("saved debug", debug_path)

    circles = find_circles(content)
    print("found circles", len(circles))
    for i, c in enumerate(circles[:40]):
        print(i, c)

    if len(circles) < 34:
        # fallback: fixed 6-column grid on content
        print("falling back to grid split")
        cols, rows = 6, 6
        cw, ch = content.size
        # icons occupy upper portion of each cell; labels below
        # estimate cell size
        cell_w = cw / cols
        # 34 items => last row has 4
        # measure from first/last circle-like colored peaks vertically
        cell_h = ch / 6.15
        circles = []
        idx = 0
        for r in range(rows):
            count = 6 if r < 5 else 4
            # center the last row of 4
            offset = (6 - count) * cell_w / 2 if count < 6 else 0
            for c in range(count):
                cx = int(offset + cell_w * (c + 0.5))
                # circle sits in upper ~62% of cell
                cy = int(cell_h * r + cell_h * 0.38)
                radius = int(min(cell_w, cell_h) * 0.28)
                circles.append((cx, cy, radius))
                idx += 1
                if idx >= 34:
                    break
            if idx >= 34:
                break
        print("grid circles", len(circles))

    assert len(circles) >= 34, f"Need 34 icons, got {len(circles)}"

    for slug, (cx, cy, radius) in zip(SLUGS, circles[:34]):
        icon = crop_circle(content, cx, cy, radius)
        path = OUT / f"{slug}.png"
        icon.save(path)
        print("wrote", path.name)


if __name__ == "__main__":
    main()
