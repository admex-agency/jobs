mediaOS assets / GitHub Pages

CAMPAIGN EVIDENCE
1. Upload image files into the corresponding folder:
   assets/Facebook/
   assets/Youtube/
   assets/TikTok/
   assets/Digital OOH/
   assets/Digital Frame/
   assets/Event/
   assets/Production/
   assets/CPD/
   assets/PR/

2. Add the new filename to assets/evidence-manifest.json.
   You do NOT need to edit index.html.

Example:
"Facebook": [
  "Post1.png",
  "Post2.png",
  "Post6.png"
]

Supported image extensions: .png, .jpg, .jpeg, .webp, .gif.

IMPORTANT:
GitHub Pages is static and cannot enumerate folder contents by itself.
The manifest is the source of truth for which images appear in Campaign Evidence.

GALLERY UPDATE WORKFLOW
- Upload the image into the matching folder under assets/gallery/.
  Example: assets/gallery/event/Event_03.jpg
- Add the filename to assets/evidence-manifest.json under the matching group.
- Commit both files to GitHub.
- index.html does not need to be edited.

Example:
"Event": ["E1.jpg", "E2.jpg", "Event_03.jpg"]
