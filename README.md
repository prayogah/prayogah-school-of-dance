# Prayogah School of Dance — Website v2

## Preview
Open `index.html` in a browser. All content, images and videos are bundled. Google Fonts need internet, but fallback fonts work offline.

## Publish for free
1. Create a public repository at github.com (e.g. `prayogah-website`).
2. Upload the **contents** of this folder (index.html, styles.css, script.js, article-*.html, assets folder).
3. Go to repository Settings → Pages → Deploy from a branch → main / (root) → Save.
4. Wait for GitHub Pages to show your URL. No paid domain required.

## Update photos
- Add a `.webp`, `.jpg` or `.png` image to `assets/`.
- Edit `gallery.json` with the image path and caption.
- IMPORTANT: `script.js` includes a bundled copy of the gallery for offline/free static hosting. To update the gallery, either edit the `const gallery=` array near the beginning of `script.js` to match gallery.json, or ask ChatGPT to regenerate the site with your new images. `gallery.json` is the easy-to-maintain source manifest.
- To change the homepage image, edit `.hero-photo` in styles.css.

## Update notes
The article pages are HTML, not PDF downloads. They were generated from the uploaded notes and should be proofread before publishing. Add new HTML articles and corresponding cards to the `articles` array in `script.js`. The `articles.json` file records the article metadata.

## Hasta illustrations
The supplied Asamyutha and Samyutha demonstration videos are included. The cards provide names and one-word memory cues. Accurate individual still illustrations are not included yet; these should be reviewed with the Guru before publication.

## Privacy and security
- Student photos are visible on this public website. Obtain parent/guardian permission for public use before publishing them. Remove any unapproved images from gallery.
- The website contains no student names, scores, attendance or payment records.
- The parent portal is described, but no public login URL is linked until you provide the confirmed private portal URL. Do not upload portal code, credentials, payment data or student records into this public repository.
- The admissions form opens the visitor's email app and does NOT submit or store information on a server.
- HTML pages are viewable and may be saved/copied by visitors; no static website can prevent that.
- The syllabus reference is not attributed as authored by Prayogah.
- Verify all material, including transliterations and study cues, before public release.

## Contact and addresses
Class venue: Shiny Play Home, 20/48, Near HMR School, Srirama Layout, Jnana Jyothi Nagar, Mallathahalli, Bengaluru 560056.
Correspondence: No. 48/44, Thrupthi, Sri Rama Layout, 1st Cross, Jananajyothi Nagar, Bengaluru 560056.


Homepage update: The hero now features only photographs supplied by the academy. Replace assets/guru-dance.webp, assets/guru-portrait.webp and assets/students-stage.webp to change the homepage photos.


## Version 4 learning update
Learning filters now separate Sanchari Kala Parishad (Adya, Madhya, Purna, Nritya Sree 1 and 2) from Gandharva (Prarambhik, Praveshika Prathama). General Class Notes, CCRT and Syllabus remain independent. Article pages feature decorative vector motifs, table-of-contents navigation and contrasting reading panels. The vector illustration is decorative, not an instructional Hasta demonstration.


Version 5: Added 15 newly supplied real photographs to the gallery, interleaved with existing gallery photos. Flyers naming students were not added to the public gallery.


Version 6: Gallery displays all 35 selected images immediately. The embedded gallery data in script.js is synchronized with gallery.json; no View More click required. Some event posters containing student names were intentionally excluded to protect privacy.

Gallery update (v8): full uncropped photos in the grid; hover (desktop) or tap/click to open a full-photo preview; close with × or Escape. Casual right-click and dragging are disabled, but public website photos cannot be made technically non-downloadable.


Version 9: Restored original illustrated PDF page images within relevant learning resources (expand the original pages panel), and added State Bharatanatyam Examination Syllabus (article-14.html). Page images are provided for faithful display, not as downloadable PDFs.


Version 10: The State Examination Syllabus is now a featured Learning Corner card linking to article-14.html. Journey photo replaced with a different performance image. Desktop gallery preview is pointer-transparent and automatically closes on mouseleave; touch users tap and dismiss.


## Version 11 — Original PDF viewer
All 14 Learning Corner resources now display their **original PDF files** in embedded browser viewers rather than extracted-text HTML. Prarambhik DOCX was converted to PDF for consistency. PDF files are bundled under `assets/study-pdfs/` so they can be served with the site. No explicit download links are displayed. Browser PDF controls and screenshots cannot be completely prevented, and some mobile browsers may open PDFs in a native viewer. Host the folder on a static web server to test embedded PDFs reliably (opening via `file://` can behave differently).

Version 12: Replaced Journey single image with a 3-photo collage of real Prayogah student groups; images use contain to avoid cutting anyone off.
