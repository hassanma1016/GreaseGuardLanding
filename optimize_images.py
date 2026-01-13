from PIL import Image
import os

# Files to convert (source_path, destination_path)
# We want to convert large photo-like PNGs to WebP.

files_to_convert = [
    # Hero
    ("public/hero-image-v2.png", "public/hero-image-v2.webp"),
    
    # Services & Gallery images in public/images
    ("public/images/after-hood-matched.png", "public/images/after-hood-matched.webp"),
    ("public/images/before-hood-matched.png", "public/images/before-hood-matched.webp"),
    ("public/images/deep-cleaning.png", "public/images/deep-cleaning.webp"),
    ("public/images/equipment-cleaning.png", "public/images/equipment-cleaning.webp"),
    ("public/images/fan-replacement.png", "public/images/fan-replacement.webp"),
    ("public/images/filter-cleaning.png", "public/images/filter-cleaning.webp"),
    ("public/images/grease-trap.png", "public/images/grease-trap.webp"),
    ("public/images/hood-cleaning.png", "public/images/hood-cleaning.webp"),
    ("public/images/pollution-control.png", "public/images/pollution-control.webp"),
    ("public/images/pressure-washing.png", "public/images/pressure-washing.webp"),
    ("public/images/residential-hood.png", "public/images/residential-hood.webp"),
]

root_dir = "/Users/hassanmahmood/Documents/GreaseGuardDMV"

for src_rel, dest_rel in files_to_convert:
    src_path = os.path.join(root_dir, src_rel)
    dest_path = os.path.join(root_dir, dest_rel)
    
    if os.path.exists(src_path):
        try:
            print(f"Converting {src_rel}...")
            img = Image.open(src_path)
            # Convert to RGB if necessary (e.g. if it has alpha transparency but we want jpg/webp)
            # WebP supports alpha, so we can keep RGBA if needed, but for photos usually RGB is fine.
            # If the source is RGBA and we save as WebP, it keeps transparency.
            
            img.save(dest_path, "WEBP", quality=80)
            print(f"Saved {dest_rel}")
            
            # Optional: Remove original? Or keep it?
            # User might want to revert. I'll keep the originals for now but the code will point to webp.
        except Exception as e:
            print(f"Failed to convert {src_rel}: {e}")
    else:
        print(f"Source not found: {src_rel}")
