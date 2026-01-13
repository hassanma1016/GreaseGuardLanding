from PIL import Image
import os

# Define paths
source_image_path = "/Users/hassanmahmood/.gemini/antigravity/brain/5627f381-6baf-419b-ad0a-29a2cb9826f3/uploaded_image_1_1767999192277.png"
output_dir = "/Users/hassanmahmood/Documents/GreaseGuardDMV/public/images"

# Open the image
img = Image.open(source_image_path)
width, height = img.size

# The image contains 4 badges in a row. We'll split it into 4 equal vertical strips.
# This assumes they are evenly spaced. We might need to trim transparent borders if possible, 
# but equal split is a good start for a clean row.

badge_width = width // 4
badges = [
    ("usakes-badge.png", 0),  # USAKES is first in the reference image (Blue shield)
    ("nfpa-badge.png", 1),    # NFPA is second (Red/Black shield)
    ("osha-badge.png", 2),    # OSHA is third (Green shield)
    ("iso-badge.png", 3)      # ISO is fourth (Blue/Round shield)
]
# Wait, let me double check the order from the previous artifacts or just assume left-to-right.
# Looking at the artifact `close_up_badges_1767999521512.png` from previous turn (which was my generated ones), the order in code is NFPA, OSHA, USAKES, ISO.
# Looking at the user's upload `uploaded_image_1_1767999192277.png`: 
# The user said "these are the as..." regarding the *second* image attached.
# I need to be careful about the order. 
# Let's crop them blindly 4 ways first, then I can rename them if needed or check visually.
# Actually, looking at the previous turn's "hero_section_v2_1767999357997.png" isn't helpful for the *reference* image.
# I'll rely on the standard naming I've been using, but I'll visually verify after splitting.
# Let's assume the user uploaded image has them in some order. 
# I will just split them and save them as badge_1, badge_2, badge_3, badge_4 first to be safe? 
# No, that will break the page. I'll take a best guess and then we can swap if wrong.
# Usually these strips are ordered. 
# Let's try to detect the content? No, too hard.
# I'll split into 4 and map them to the names I'm using.
# If I look at the screenshot of the chat or the artifact list:
# Artifact `uploaded_image_1_1767999192277.png` is the "good" one.
# It has 4 distinct badges.
# I'll proceed with splitting into 4.

for name, index in badges:
    left = index * badge_width
    right = (index + 1) * badge_width
    upper = 0
    lower = height
    
    # Crop
    badge = img.crop((left, upper, right, lower))
    
    # Optional: Trim whitespace? 
    # The user complained about whitespace.
    # Simple bounding box crop:
    if badge.mode in ('RGBA', 'LA'):
        alpha = badge.getchannel('A')
        bbox = alpha.getbbox()
    else:
        bbox = badge.getbbox()
        
    if bbox:
        badge = badge.crop(bbox)
        
    badge.save(os.path.join(output_dir, name))
    print(f"Saved {name}")

