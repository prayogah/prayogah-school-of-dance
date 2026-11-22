const $=s=>document.querySelector(s);const nav=$('#main-nav');$('.menu-toggle').addEventListener('click',()=>{let open=nav.classList.toggle('open');$('.menu-toggle').setAttribute('aria-expanded',String(open))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));$('#year').textContent=new Date().getFullYear();const articles=[{"title": "Foundations & Shlokas", "category": "General Class Notes", "description": "View the original PDF inside the website, preserving the formatting, diagrams and illustrations.", "href": "article-01.html"}, {"title": "Exercises & Single-Hand Gestures", "category": "General Class Notes", "description": "View the original PDF inside the website, preserving the formatting, diagrams and illustrations.", "href": "article-02.html"}, {"title": "Adavus & Double-Hand Gestures", "category": "General Class Notes", "description": "View the original PDF inside the website, preserving the formatting, diagrams and illustrations.", "href": "article-03.html"}, {"title": "Footwork & Body Positions", "category": "General Class Notes", "description": "View the original PDF inside the website, preserving the formatting, diagrams and illustrations.", "href": "article-04.html"}, {"title": "Adya Theory Notes", "category": "Sanchari Kala Parishad – Central Dance Exam Materials", "description": "View the original PDF inside the website, preserving the formatting, diagrams and illustrations.", "href": "article-05.html"}, {"title": "Madhya Theory Notes", "category": "Sanchari Kala Parishad – Central Dance Exam Materials", "description": "View the original PDF inside the website, preserving the formatting, diagrams and illustrations.", "href": "article-06.html"}, {"title": "Purna Theory Notes", "category": "Sanchari Kala Parishad – Central Dance Exam Materials", "description": "View the original PDF inside the website, preserving the formatting, diagrams and illustrations.", "href": "article-07.html"}, {"title": "Nritya Sree 1 Theory Notes", "category": "Sanchari Kala Parishad – Central Dance Exam Materials", "description": "View the original PDF inside the website, preserving the formatting, diagrams and illustrations.", "href": "article-08.html"}, {"title": "Nritya Sree 2 Theory Notes", "category": "Sanchari Kala Parishad – Central Dance Exam Materials", "description": "View the original PDF inside the website, preserving the formatting, diagrams and illustrations.", "href": "article-09.html"}, {"title": "Praveshika Prathama Notes", "category": "Gandharva Exam Materials", "description": "View the original PDF inside the website, preserving the formatting, diagrams and illustrations.", "href": "article-10.html"}, {"title": "Prarambhik Notes", "category": "Gandharva Exam Materials", "description": "View the original PDF inside the website, preserving the formatting, diagrams and illustrations.", "href": "article-11.html"}, {"title": "CCRT Bharatanatyam Study Handbook", "category": "CCRT Study", "description": "View the original PDF inside the website, preserving the formatting, diagrams and illustrations.", "href": "article-12.html"}, {"title": "Gandharva Examination Syllabus", "category": "Syllabus Reference", "description": "View the original PDF inside the website, preserving the formatting, diagrams and illustrations.", "href": "article-13.html"}, {"title": "State Bharatanatyam Examination Syllabus", "category": "Syllabus Reference", "description": "Read the complete original eight-page Kannada syllabus inside the website.", "href": "article-14.html"}];const hastas={
  "asamyutha": [
    {
      "name": "Pataka",
      "cue": "Flag"
    },
    {
      "name": "Tripataka",
      "cue": "Threefold"
    },
    {
      "name": "Ardhapataka",
      "cue": "Half-flag"
    },
    {
      "name": "Kartarimukha",
      "cue": "Scissors"
    },
    {
      "name": "Mayura",
      "cue": "Peacock"
    },
    {
      "name": "Ardhachandra",
      "cue": "Crescent"
    },
    {
      "name": "Arala",
      "cue": "Bent"
    },
    {
      "name": "Shukatunda",
      "cue": "Parrot"
    },
    {
      "name": "Mushti",
      "cue": "Fist"
    },
    {
      "name": "Shikhara",
      "cue": "Peak"
    },
    {
      "name": "Kapittha",
      "cue": "Fruit"
    },
    {
      "name": "Katakamukha",
      "cue": "Bracelet"
    },
    {
      "name": "Suchi",
      "cue": "Needle"
    },
    {
      "name": "Chandrakala",
      "cue": "Moon"
    },
    {
      "name": "Padmakosha",
      "cue": "Lotus-bud"
    },
    {
      "name": "Sarpashirsha",
      "cue": "Snake"
    },
    {
      "name": "Mrigashirsha",
      "cue": "Deer"
    },
    {
      "name": "Simhamukha",
      "cue": "Lion"
    },
    {
      "name": "Kangula",
      "cue": "Bell"
    },
    {
      "name": "Alapadma",
      "cue": "Lotus"
    },
    {
      "name": "Chatura",
      "cue": "Clever"
    },
    {
      "name": "Bhramara",
      "cue": "Bee"
    },
    {
      "name": "Hamsasya",
      "cue": "Swan"
    },
    {
      "name": "Hamsapaksha",
      "cue": "Wing"
    },
    {
      "name": "Sandamsha",
      "cue": "Pincers"
    },
    {
      "name": "Mukula",
      "cue": "Bud"
    },
    {
      "name": "Tamrachuda",
      "cue": "Rooster"
    },
    {
      "name": "Trishula",
      "cue": "Trident"
    }
  ],
  "samyutha": [
    {
      "name": "Anjali",
      "cue": "Salutation"
    },
    {
      "name": "Kapota",
      "cue": "Pigeon"
    },
    {
      "name": "Karkata",
      "cue": "Crab"
    },
    {
      "name": "Svastika",
      "cue": "Crossed"
    },
    {
      "name": "Dola",
      "cue": "Hanging"
    },
    {
      "name": "Pushpaputa",
      "cue": "Flowers"
    },
    {
      "name": "Utsanga",
      "cue": "Embrace"
    },
    {
      "name": "Shivalinga",
      "cue": "Shiva"
    },
    {
      "name": "Katakavardhana",
      "cue": "Bracelets"
    },
    {
      "name": "Kartarisvastika",
      "cue": "Scissors"
    },
    {
      "name": "Shakata",
      "cue": "Cart"
    },
    {
      "name": "Shankha",
      "cue": "Conch"
    },
    {
      "name": "Chakra",
      "cue": "Discus"
    },
    {
      "name": "Samputa",
      "cue": "Box"
    },
    {
      "name": "Pasha",
      "cue": "Rope"
    },
    {
      "name": "Kilaka",
      "cue": "Bond"
    },
    {
      "name": "Matsya",
      "cue": "Fish"
    },
    {
      "name": "Kurma",
      "cue": "Tortoise"
    },
    {
      "name": "Varaha",
      "cue": "Boar"
    },
    {
      "name": "Garuda",
      "cue": "Eagle"
    },
    {
      "name": "Nagabandha",
      "cue": "Serpents"
    },
    {
      "name": "Khatva",
      "cue": "Cot"
    },
    {
      "name": "Bherunda",
      "cue": "Bird"
    },
    {
      "name": "Avahitta",
      "cue": "Bosom"
    }
  ]
};const gallery=[{"image":"assets/new-gallery-01.webp","caption":"Prayogah dancers and Guru"},{"image":"assets/guru-performance.webp","caption":"Bharatanatyam on stage"},{"image":"assets/new-gallery-02.webp","caption":"Bharatanatyam performance"},{"image":"assets/students-stage.webp","caption":"Student performances"},{"image":"assets/new-gallery-03.webp","caption":"Students performing together"},{"image":"assets/guru-portrait.webp","caption":"Guru Smt. Srujana C"},{"image":"assets/new-gallery-05.webp","caption":"Expressive group choreography"},{"image":"assets/international-performance.webp","caption":"Cultural performances"},{"image":"assets/new-gallery-06.webp","caption":"Stage formations"},{"image":"assets/guru-expression.webp","caption":"Abhinaya"},{"image":"assets/new-gallery-07.webp","caption":"Young dancers backstage"},{"image":"assets/temple-students.webp","caption":"Temple performances"},{"image":"assets/new-gallery-08.webp","caption":"Celebrating artistic achievements"},{"image":"assets/saraswati.webp","caption":"Artistic expressions"},{"image":"assets/new-gallery-10.webp","caption":"Raagigudda performance"},{"image":"assets/students-namaste.webp","caption":"Students of Prayogah"},{"image":"assets/new-gallery-12.webp","caption":"Prayogah students on stage"},{"image":"assets/guru-orange-stage.webp","caption":"Dance and rhythm"},{"image":"assets/new-gallery-13.webp","caption":"Guru’s abhinaya expressions"},{"image":"assets/guru-garland.webp","caption":"Traditional repertoire"},{"image":"assets/new-gallery-14.webp","caption":"A moment of devotion"},{"image":"assets/students-group.webp","caption":"Our dance family"},{"image":"assets/new-gallery-15.webp","caption":"Bharatanatyam ensemble"},{"image":"assets/salangai.webp","caption":"Tradition in every step"},{"image":"assets/new-gallery-18.webp","caption":"Students and Guru celebrating a performance"},{"image":"assets/guru-pose.webp","caption":"Classical movement"},{"image":"assets/new-gallery-19.webp","caption":"Classical dance in maroon costumes"},{"image":"assets/guru-leap.webp","caption":"Stage moments"},{"image":"assets/new-gallery-20.webp","caption":"Colourful Bharatanatyam presentation"},{"image":"assets/nataraja.webp","caption":"Nataraja"},{"image":"assets/guru-devotion.webp","caption":"Expressive storytelling"},{"image":"assets/guru-stage.webp","caption":"Dance journey"},{"image":"assets/guru-orange.webp","caption":"Expressive Bharatanatyam"},{"image":"assets/guru-pose-two.webp","caption":"On stage"},{"image":"assets/guru-nritta.webp","caption":"Nritta"}];let filter='All';function renderArticles(){const q=$('#article-search').value.toLowerCase().trim();const found=articles.filter(x=>(filter==='All'||x.category===filter)&&(x.title+' '+x.description+' '+x.category).toLowerCase().includes(q));$('#article-grid').innerHTML=found.length?found.map(x=>`<a class="article-card" href="${x.href}"><small>${x.category}</small><h3>${x.title}</h3><p>${x.description}</p></a>`).join(''):'<p>No matching articles. Try another search.</p>'}$('#article-search').addEventListener('input',renderArticles);document.querySelectorAll('#filters button').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;document.querySelectorAll('#filters button').forEach(x=>x.classList.toggle('active',x===b));renderArticles()}));renderArticles();function renderHastas(type){$('#hasta-grid').innerHTML=hastas[type].map((x,i)=>`<div class="hasta-card"><img class="hasta-illustration" src="assets/hasta-illustrations/${type}-${String(i+1).padStart(2,'0')}.webp" alt="${x.name} hasta illustration" loading="lazy"><strong>${x.name}</strong><small>${x.cue}</small></div>`).join('');$('#hasta-video').src='assets/'+type+'-hastas.mp4';$('#hasta-video-title').textContent=type==='asamyutha'?'Asamyutha Hastas':'Samyutha Hastas';document.querySelectorAll('[data-hasta]').forEach(x=>x.classList.toggle('active',x.dataset.hasta===type))}document.querySelectorAll('[data-hasta]').forEach(x=>x.addEventListener('click',()=>renderHastas(x.dataset.hasta)));renderHastas('asamyutha');function renderGallery(){let list=gallery;$('#gallery-grid').innerHTML=list.map(x=>`<figure><img loading="lazy" src="${x.image}" alt="${x.caption}"><figcaption>${x.caption}</figcaption></figure>`).join('');}renderGallery();
// Elegant desktop hover preview: it does not intercept the pointer, so leaving the tile closes it.
// On touch devices, a tap opens a dismissible full-screen view.
const preview=document.getElementById('photo-preview');
const previewImage=preview.querySelector('img');
const previewCaption=preview.querySelector('.photo-preview-caption');
const finePointer=window.matchMedia('(hover: hover) and (pointer: fine)');
let hoverTimer;
function showPreview(figure,mode){
 clearTimeout(hoverTimer);
 const img=figure.querySelector('img');
 previewImage.src=img.src;previewImage.alt=img.alt;
 previewCaption.textContent=figure.querySelector('figcaption')?.textContent||'';
 preview.classList.toggle('hover-mode',mode==='hover');
 preview.classList.toggle('tap-mode',mode!=='hover');
 preview.hidden=false;
 document.body.style.overflow=mode==='hover'?'':'hidden';
}
function hidePreview(){clearTimeout(hoverTimer);preview.hidden=true;preview.classList.remove('hover-mode','tap-mode');previewImage.removeAttribute('src');document.body.style.overflow=''}
document.querySelectorAll('#gallery-grid figure').forEach(figure=>{
 figure.tabIndex=0;figure.setAttribute('role','button');figure.setAttribute('aria-label','View full photograph: '+figure.querySelector('img').alt);
 figure.addEventListener('mouseenter',()=>{if(finePointer.matches)hoverTimer=setTimeout(()=>showPreview(figure,'hover'),260)});
 figure.addEventListener('mouseleave',()=>{clearTimeout(hoverTimer);if(preview.classList.contains('hover-mode'))hidePreview()});
 figure.addEventListener('click',()=>{if(!finePointer.matches)showPreview(figure,'tap')});
 figure.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();showPreview(figure,'tap')}});
});
preview.querySelector('.photo-close').addEventListener('click',hidePreview);
preview.addEventListener('click',e=>{if(e.target===preview)hidePreview()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!preview.hidden)hidePreview()});
window.addEventListener('blur',()=>{if(preview.classList.contains('hover-mode'))hidePreview()});
// Discourage casual saving; browsers cannot fully prevent copying public images.
document.querySelectorAll('#gallery-grid img').forEach(img=>{img.draggable=false;img.addEventListener('contextmenu',e=>e.preventDefault())});
previewImage.draggable=false;previewImage.addEventListener('contextmenu',e=>e.preventDefault());
$('#enquiry-form').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const subject='Prayogah School of Dance – Admissions Enquiry';const body=`Namaste Guru Smt. Srujana C,

I would like to enquire about Bharatanatyam classes.

Name: ${f.get('name')}
Email: ${f.get('email')}
Interested in: ${f.get('batch')}

Message:
${f.get('message')||'Please share admission details and available batches.'}

Thank you.`;location.href='mailto:prayogahschoolofdance@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body)});
// Learning pathway shortcuts
document.querySelectorAll('.path-filter').forEach(btn=>btn.addEventListener('click',()=>{filter=btn.dataset.path;document.querySelectorAll('#filters button').forEach(x=>x.classList.toggle('active',x.dataset.filter===filter));document.querySelector('#article-grid').scrollIntoView({behavior:'smooth',block:'start'});renderArticles()}));
