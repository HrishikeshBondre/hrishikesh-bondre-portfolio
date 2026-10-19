# Hrishikesh Bondre — Creative Portfolio

A responsive cinematic portfolio built with HTML5, CSS3, Bootstrap 5 and vanilla JavaScript.

## Main categories
- Filmmaking & Cinematography
- Photography
- Content Creation
- Digital Marketing

Each category opens in a new browser tab with its own project list. Every project card includes a short description, and project detail modals support a single video, multiple videos, or multi-image photo series.

## Files
- `index.html` — website structure
- `style.css` — visual design, responsive layout, animations and neon cursor
- `script.js` — category data, projects, media links, project modals and interactions

## Add your own media
Edit the `projects` object near the top of `script.js`.

- For a video project, set `kind: "video"` and add its Google Drive share link or YouTube URL to `video`.
- For a series of videos, set `kind: "video-series"` and add links to the `videos` array.
- For a photo series, set `kind: "gallery"` and add multiple image URLs to the `gallery` array.
- Change `thumbnail` to a suitable preview image for each project.

For Google Drive files, use sharing permissions that allow the intended audience to view them. A normal Drive image share link may not work as an image URL in all browsers; use a direct embeddable image URL when possible. Drive videos are displayed using the Drive preview player. Test public links in a private browser window before publishing.

## Run locally
Open this folder in VS Code and run `index.html` with Live Server, or open it directly in a browser. An internet connection is required for Bootstrap, Google Fonts and externally hosted media.

## Contact
- Email: hrishibondre45@gmail.com
- Instagram: https://www.instagram.com/hrishibondre/
- YouTube: https://www.youtube.com/@hrishibondre
- WhatsApp: https://wa.me/919359548015

The contact form currently opens a pre-filled email draft and does not automatically send or store submissions. To receive enquiries without relying on the visitor’s email app, connect a form service such as Formspree or add a backend endpoint before publishing. Test the configured form after deployment. Only publish work you own or have permission to showcase.

## GitHub Pages
Push the files to a GitHub repository, then go to Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.
