#!/usr/bin/env python3
"""Build public poster manifest. Uncertain dates are kept visible."""
import json
import re
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
POSTER_DIR = ROOT / "Posters"
OUT = ROOT / "posters.json"
IMAGE_EXTS = {".png", ".jpg", ".jpeg", ".webp", ".tif", ".tiff", ".bmp"}
MONTHS = {name.lower(): i for i, name in enumerate(
    ["January", "February", "March", "April", "May", "June", "July",
     "August", "September", "October", "November", "December"], 1)}
MONTHS.update({name[:3].lower(): number for name, number in list(MONTHS.items())})

def read_text(path):
    try:
        from PIL import Image, ImageOps
        import pytesseract
        image = Image.open(path).convert("RGB")
        return pytesseract.image_to_string(ImageOps.grayscale(image),
                                           lang="chi_sim+eng", config="--psm 11")
    except Exception as error:
        print(f"OCR failed for {path.name}: {error}")
        return ""

def find_date(text):
    recurring = bool(re.search(
        r"每周|每逢|隔周|每两周|每个月|每月|weekly|biweekly|every\s+(week|other\s+week|month)|fortnight",
        text, re.I))
    if recurring:
        return None, True

    found = []
    patterns = [
        (r"(20\d{2})\s*[年./-]\s*(\d{1,2})\s*[月./-]\s*(\d{1,2})\s*日?", "ymd"),
        (r"\b(\d{1,2})\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(20\d{2})\b", "dmy"),
        (r"\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2})(?:st|nd|rd|th)?[,]?\s+(20\d{2})\b", "mdy"),
        (r"\b(20\d{2})-(\d{1,2})-(\d{1,2})\b", "ymd"),
    ]
    for pattern, kind in patterns:
        for match in re.finditer(pattern, text, re.I):
            groups = match.groups()
            try:
                if kind == "ymd":
                    year, month, day = map(int, groups)
                elif kind == "dmy":
                    day, month_name, year = groups
                    year, day, month = int(year), int(day), MONTHS[month_name.lower()]
                else:
                    month_name, day, year = groups
                    year, day, month = int(year), int(day), MONTHS[month_name.lower()]
                found.append(date(year, month, day))
            except (ValueError, KeyError):
                pass
    # Ambiguous numeric dates such as 04/05/2027 are deliberately not guessed.
    return (min(found) if found else None), False

today = date.today()  # workflow timezone is Asia/Kuala_Lumpur
active = []
for path in sorted(POSTER_DIR.iterdir(), key=lambda item: item.name.lower()):
    if not path.is_file() or path.suffix.lower() not in IMAGE_EXTS:
        continue
    text = read_text(path)
    event_date, recurring = find_date(text)
    if event_date and event_date < today:
        print(f"Hiding expired poster: {path.name} ({event_date})")
        continue
    if not event_date and not recurring:
        print(f"Keeping for review; no clear date detected: {path.name}")
    active.append({
        "src": "Posters/" + path.name,
        "title": path.stem.replace("_", " ").replace("-", " "),
        "eventDate": event_date.isoformat() if event_date else None,
        "recurring": recurring
    })

OUT.write_text(json.dumps(active, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"Published {len(active)} active poster(s)")
