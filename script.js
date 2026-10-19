/*
  PORTFOLIO CONTENT SETUP
  1. Edit the categories and projects below.
  2. Add public Google Drive image/video links or YouTube links.
  3. For photo series, add multiple URLs to the gallery array.
  4. Keep media publicly viewable only when you have permission to share it.
*/
const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=90";

const categories = [
  { id: "film", number: "01", title: "Filmmaking & Cinematography", short: "Films, cinematic reels and stories told through motion.", image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=85", description: "Cinematic films, festival moments, travel films and moving stories." },
  { id: "photo", number: "02", title: "Photography", short: "Photo series, places, people, festivals and fleeting moments.", image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85", description: "Explore each series as a collection of photographs, not just a single frame." },
  { id: "content", number: "03", title: "Content Creation", short: "Personal videos, travel stories and creator projects.", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85", description: "Personal visual diaries, travel videos, mini-documentaries and selected creator work." },
  { id: "marketing", number: "04", title: "Digital Marketing", short: "Social-first creative content for brands and businesses.", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85", description: "Creative social content and campaign assets made for client platforms." }
];

// Replace blank media values with your links. A blank gallery entry uses a visual placeholder until you add your work.
// For image projects, gallery contains one or more image URLs. For video projects, use a YouTube or Google Drive share URL in video.
const projects = {
  film: [
    { title: "Kalsubai in Monsoon", kind: "video", description: "Cinematic monsoon film from Kalsubai.", video: "https://drive.google.com/file/d/10kzi4GVPeufRJQJ1ImU3bNXhq0hyhIUd/view?usp=drive_link", thumbnail: "assets/Thumbnails/kalsubai-thumb.jpg" },
    { title: "Mumbai — The City That Never Needs an Introduction", kind: "video", description: "A cinematic portrait of Mumbai.", video: "https://drive.google.com/file/d/16zAmzu1E3k7iq_VPr6c4kxSYDkw1MCSd/view?usp=drive_link", thumbnail: "assets/Thumbnails/sea-link-thumb.jpg" },
    { title: "Summer Trek", kind: "video", description: "A summer trek told through moving images.", video: "https://drive.google.com/file/d/1CXGV73NI8iqkioGcB_naw6Mpeh5QidBA/view?usp=drive_link", thumbnail: "assets/Thumbnails/summer-thumb.jpg" },
    { title: "Monsoon Ka Sukoon", kind: "video", description: "Finding calm in the monsoon.", video: "https://drive.google.com/file/d/1WnZJ5yCro8I27O6Ligz--REGJzIuT2_o/view?usp=drive_link", thumbnail: "assets/Thumbnails/sukoon-thumb.jpg" },
    { title: "Monsoon Trek", kind: "video", description: "A trail, the rain and the mountains.", video: "https://drive.google.com/file/d/12kazZ_-LivNV40fc5pxYwL-FZ5NNuf4h/view?usp=drive_link", thumbnail: "assets/Thumbnails/monsoon-thumb.jpg" },
    { title: "Ram Krishna Hari — Akhil Chandanwadi Bappa Aagman", kind: "video", description: "Aagman moments from Akhil Chandanwadi.", video: "https://drive.google.com/file/d/1-EQgiVXUZ-1JRd_TeUTQo6te1OyF1Abc/view?usp=drive_link", thumbnail: "assets/Thumbnails/ram-krushna-hari.jpg" },
    { title: "Bappa Is Coming — Banger Edit", kind: "video", description: "A fast-paced Ganpati Aagman edit.", video: "https://drive.google.com/file/d/14JkM0eRRfKci4hijKRthJzf0_yIQa4qU/view?usp=drive_link", thumbnail: "assets/Thumbnails/god-thumb.jpg" },
    { title: "One Festival, Thousands of Emotions", kind: "video", description: "An emotional Bappa Aagman story.", video: "https://drive.google.com/file/d/1Hj5yOeK-R8k7wMKRFiNToLDaZH89yxok/view?usp=drive_link", thumbnail: "assets/Thumbnails/emotions-thumb.jpg" },
    { title: "When Bappa Arrives, Everything Feels Right", kind: "video", description: "Aagman through the feeling of homecoming.", video: "https://drive.google.com/file/d/166HWsJHLpQw_Ys9QFIMgvfDWv1rJT14s/view?usp=drive_link", thumbnail: "assets/Thumbnails/bappa-thumb.jpg" },
    { title: "Waiting for Ganeshotsav — Maharashtra & Mumbai", kind: "video", description: "The anticipation before Ganeshotsav.", video: "https://drive.google.com/file/d/1bagS2axsGI-sKBU9B5Jgi9WZzv0RPaua/view?usp=drive_link", thumbnail: "assets/Thumbnails/ganpati-bappa-thumb.jpg" },
    { title: "What If Bappa Aagman Felt Like the 60s?", kind: "video", description: "A black-and-white, old-world visual treatment.", video: "https://drive.google.com/file/d/1kFVdRPRmhsK_RsuIlxDc1GmShgHmEUv5/view?usp=drive_link", thumbnail: "assets/Thumbnails/60-thumb.jpg" },
    // { title: "Moving Postcards from Rajasthan", kind: "video-series", description: "A collection of moving postcards from Rajasthan. Add multiple videos to the gallery list in this project.", video: "", videos: ["", "", ""], thumbnail: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=85" },
    { title: "Chinchpokli Cha Chintamani — Aagman", kind: "video", description: "Aagman film capturing the scale and energy of the celebration.", video: "https://drive.google.com/file/d/1ad_8xW5RjelZYYHfEychqN6SVGmXm-Ix/view?usp=drive_link", thumbnail: "assets/Thumbnails/chintamani-thumb.jpg" },
    { title: "Mumbai Cha Raja — Visarjan", kind: "video", description: "Visarjan moments of Mumbai Cha Raja.", video: "https://drive.google.com/file/d/1QpnS3dGkS1NZY2265Vt62nMSriLVW-VN/view?usp=drive_link", thumbnail: "assets/Thumbnails/mumbai-cha-raja-thumb.jpg" },
    { title: "Lalbaug Cha Raja — Visarjan", kind: "video", description: "A visual record of Lalbaug Cha Raja Visarjan.", video: "https://drive.google.com/file/d/1aMArzVtK4eNZoaEAHXckJUytsw0Ab2IW/view?usp=drive_link", thumbnail: "assets/Thumbnails/raja-thumb.jpg" },
    { title: "One Perfect Static Shot — Mumbai Cha Raja", kind: "video", description: "A single, carefully composed visarjan frame.", video: "https://drive.google.com/file/d/1BD8XXSqQzpbnoRZ8Vu0AMdEiwYfE_B6n/view?usp=drive_link", thumbnail: "assets/Thumbnails/crazy-thumb.jpeg" },
    { title: "Bike Off-Roading", kind: "video", description: "A ride captured through motion and terrain.", video: "https://drive.google.com/file/d/1hY0UoYA8ctuePisEn3Fy8QCSUZ6G-Lx1/view?usp=drive_link", thumbnail: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=85" }
  ],
  photo: [
    {
      title: "Thar Desert — Rajasthan Photo Series", kind: "gallery", description: "A photo series from the Thar Desert.", gallery: ["assets/Thar%20Desert%20-%20Rajasthan/td1.jpg",
        "assets/Thar%20Desert%20-%20Rajasthan/td2.jpg",
        "assets/Thar%20Desert%20-%20Rajasthan/td3.jpg",
        "assets/Thar%20Desert%20-%20Rajasthan/td4.jpg",
        "assets/Thar%20Desert%20-%20Rajasthan/td5.jpg",
        "assets/Thar%20Desert%20-%20Rajasthan/td6.jpg",
        "assets/Thar%20Desert%20-%20Rajasthan/td7.jpg",
        "assets/Thar%20Desert%20-%20Rajasthan/td8.jpg",
        "assets/Thar%20Desert%20-%20Rajasthan/td9.jpg",
        "assets/Thar%20Desert%20-%20Rajasthan/td10.jpg"], thumbnail: "assets/Thumbnails/thar-desert-thumb.jpg"
    },
    {
      title: "Architecture of Rajasthan", kind: "gallery", description: "Architectural details, forms and heritage of Rajasthan.", gallery: ["assets/Architecture%20of%20Rajasthan/k1.jpg",
        "assets/Architecture%20of%20Rajasthan/k2.jpg",
        "assets/Architecture%20of%20Rajasthan/k3.jpg",
        "assets/Architecture%20of%20Rajasthan/k4.jpg",
        "assets/Architecture%20of%20Rajasthan/k5.jpg",
        "assets/Architecture%20of%20Rajasthan/k6.jpg",
        "assets/Architecture%20of%20Rajasthan/k7.jpg",
        "assets/Architecture%20of%20Rajasthan/k8.jpg",
        "assets/Architecture%20of%20Rajasthan/k9.jpg",
        "assets/Architecture%20of%20Rajasthan/k10.jpg",
        "assets/Architecture%20of%20Rajasthan/k11.jpg",
        "assets/Architecture%20of%20Rajasthan/k12.jpg",
        "assets/Architecture%20of%20Rajasthan/k13.jpg",
        "assets/Architecture%20of%20Rajasthan/k14.jpg",
        "assets/Architecture%20of%20Rajasthan/k15.jpg"], thumbnail: "assets/Thumbnails/rajasthan-thumb.jpg"
    },
    {
      title: "Chintamani Aagman — Photo Series", kind: "gallery", description: "Festival photography from Chintamani Aagman.", gallery: ["assets/Chintamani%20Aagman%202026/ca1.jpg",
        "assets/Chintamani%20Aagman%202026/ca2.jpg",
        "assets/Chintamani%20Aagman%202026/ca3.jpg",
        "assets/Chintamani%20Aagman%202026/ca4.jpg",
        "assets/Chintamani%20Aagman%202026/ca5.jpg",
        "assets/Chintamani%20Aagman%202026/ca6.jpg",
        "assets/Chintamani%20Aagman%202026/ca7.jpg",
        "assets/Chintamani%20Aagman%202026/ca8.jpg",
        "assets/Chintamani%20Aagman%202026/ca9.jpg",
        "assets/Chintamani%20Aagman%202026/ca10.jpg",
        "assets/Chintamani%20Aagman%202026/ca11.jpg"], thumbnail: "assets/Thumbnails/chintamani-thumb.jpg"
    },
    {
      title: "Girgaon Gudi Padwa Shobhayatra 2026", kind: "gallery", description: "Photo series from the 2026 Shobhayatra.", gallery: ["Girgaon%20Padwa/gp1.jpg",
        "Girgaon%20Padwa/gp2.jpg",
        "Girgaon%20Padwa/gp3.jpg",
        "Girgaon%20Padwa/gp4.jpg",
        "Girgaon%20Padwa/gp5.jpg",
        "Girgaon%20Padwa/gp6.jpg",
        "Girgaon%20Padwa/gp7.jpg",
        "Girgaon%20Padwa/gp8.jpg",
        "Girgaon%20Padwa/gp9.jpg",
        "Girgaon%20Padwa/gp10.jpg",
        "Girgaon%20Padwa/gp11.jpg",
        "Girgaon%20Padwa/gp12.jpg",
        "Girgaon%20Padwa/gp13.jpg",
        "Girgaon%20Padwa/gp14.jpg",
        "Girgaon%20Padwa/gp15.jpg",
        "Girgaon%20Padwa/gp16.jpg",
        "Girgaon%20Padwa/gp17.jpg",
        "Girgaon%20Padwa/gp18.jpg",
        "Girgaon%20Padwa/gp19.jpg",
        "Girgaon%20Padwa/gp20.jpg"], thumbnail: "assets/Thumbnails/gudhipadwa-thumb.jpg"
    },
    {
      title: "Sahyadri — Photo Series", kind: "gallery", description: "Mountains, trails and the Sahyadri landscape.", gallery: ["assets/Sahyadri/s1.jpg",
        "assets/Sahyadri/s2.jpg",
        "assets/Sahyadri/s3.jpg",
        "assets/Sahyadri/s4.jpg",
        "assets/Sahyadri/s5.jpg",
        "assets/Sahyadri/s6.jpg",
        "assets/Sahyadri/s7.jpg",
        "assets/Sahyadri/s8.jpg",
        "assets/Sahyadri/s9.jpg",
        "assets/Sahyadri/s10.jpg",
        "assets/Sahyadri/s11.jpg",
        "assets/Sahyadri/s12.jpg",
        "assets/Sahyadri/s13.jpg"], thumbnail: "assets/Thumbnails/summer-thumb.jpg"
    },
    {
      title: "Bandra–Worli Sea Link", kind: "gallery", description: "Mumbai through architecture, roads and the sea.", gallery: ["assets/Bandra-Worli%20Sea%20Link/bw1.jpg",
        "assets/Bandra-Worli%20Sea%20Link/bw2.jpg",
        "assets/Bandra-Worli%20Sea%20Link/bw3.jpg",
        "assets/Bandra-Worli%20Sea%20Link/bw4.png",
        "assets/Bandra-Worli%20Sea%20Link/bw5.jpg",
        "assets/Bandra-Worli%20Sea%20Link/bw6.png",
        "assets/Bandra-Worli%20Sea%20Link/bw7.jpg",
        "assets/Bandra-Worli%20Sea%20Link/bw8.png",
        "assets/Bandra-Worli%20Sea%20Link/bw9.jpg",
        "assets/Bandra-Worli%20Sea%20Link/bw10.png",
        "assets/Bandra-Worli%20Sea%20Link/bw11.png",
        "assets/Bandra-Worli%20Sea%20Link/bw12.jpg",
        "assets/Bandra-Worli%20Sea%20Link/bw13.png"], thumbnail: "assets/Thumbnails/sea-link-thumb.jpg"
    },
    {
      title: "Village Bappa Visarjan", kind: "gallery", description: "A photo series documenting village visarjan moments.", gallery: ["assets/Bappa%20Visarjan/bv1.png",
        "assets/Bappa%20Visarjan/bv2.png",
        "assets/Bappa%20Visarjan/bv3.png",
        "assets/Bappa%20Visarjan/bv4.png",
        "assets/Bappa%20Visarjan/bv5.png",
        "assets/Bappa%20Visarjan/bv6.png",
        "assets/Bappa%20Visarjan/bv7.png",
        "assets/Bappa%20Visarjan/bv8.png",
        "assets/Bappa%20Visarjan/bv9.png",
        "assets/Bappa%20Visarjan/bv10.png",
        "assets/Bappa%20Visarjan/bv11.png"], thumbnail: "assets/Thumbnails/bappa-visarjan-thumb.jpg"
    },
    {
      title: "Kalsubai — Photo Series", kind: "gallery", description: "Photographs from Kalsubai and the surrounding landscape.", gallery: ["assets/Kalsubai/k1.jpg",
        "assets/Kalsubai/k2.jpg",
        "assets/Kalsubai/k3.jpg",
        "assets/Kalsubai/k4.jpg",
        "assets/Kalsubai/k5.jpg",
        "assets/Kalsubai/k6.jpg",
        "assets/Kalsubai/k7.jpg",
        "assets/Kalsubai/k8.jpg",
        "assets/Kalsubai/k9.jpg",
        "assets/Kalsubai/k10.jpg",
        "assets/Kalsubai/k11.jpg",
        "assets/Kalsubai/k12.jpg",
        "assets/Kalsubai/k13.jpg"
      ], thumbnail: "assets/Thumbnails/kalsubai-thumb.jpg"
    },
    {
      title: "Mahuli Fort in Monsoon", kind: "gallery", description: "Monsoon textures and landscapes around Mahuli Fort.", gallery: ["assets/Mahuli%20Fort/Mahuli1.jpg",
        "assets/Mahuli%20Fort/Mahuli2.jpg",
        "assets/Mahuli%20Fort/Mahuli3.jpg",
        "assets/Mahuli%20Fort/Mahuli4.jpg",
        "assets/Mahuli%20Fort/Mahuli5.jpg",
        "assets/Mahuli%20Fort/Mahuli6.jpg",
        "assets/Mahuli%20Fort/Mahuli7.jpg",
        "assets/Mahuli%20Fort/Mahuli8.jpg",
        "assets/Mahuli%20Fort/Mahuli9.jpg",
        "assets/Mahuli%20Fort/Mahuli10.jpg",
        "assets/Mahuli%20Fort/Mahuli11.jpg",
        "assets/Mahuli%20Fort/Mahuli12.jpg",
        "assets/Mahuli%20Fort/Mahuli13.jpg",
        "assets/Mahuli%20Fort/Mahuli14.jpg",
        "assets/Mahuli%20Fort/Mahuli15.jpg",
        "assets/Mahuli%20Fort/Mahuli16.jpg",
        "assets/Mahuli%20Fort/Mahuli17.jpg"], thumbnail: "assets/Thumbnails/mahuli-thumb.jpg"
    },
    {
      title: "Bappa Aagman — Photo Series", kind: "gallery", description: "Moments, details and emotions from Bappa Aagman.", gallery: ["assets/Bappa%20Aagman/b1.png",
        "assets/Bappa%20Aagman/b2.jpg",
        "assets/Bappa%20Aagman/b3.png",
        "assets/Bappa%20Aagman/b4.png",
        "assets/Bappa%20Aagman/b5.png",
        "assets/Bappa%20Aagman/b6.png",
        "assets/Bappa%20Aagman/b7.png",
        "assets/Bappa%20Aagman/b8.jpg",
        "assets/Bappa%20Aagman/b9.jpg",
        "assets/Bappa%20Aagman/b10.png",
        "assets/Bappa%20Aagman/b11.png",
        "assets/Bappa%20Aagman/b12.png",
        "assets/Bappa%20Aagman/b13.jpg",
        "assets/Bappa%20Aagman/b14.png",
        "assets/Bappa%20Aagman/b15.jpg",
        "assets/Bappa%20Aagman/b16.jpg",
        "assets/Bappa%20Aagman/b17.png",
        "assets/Bappa%20Aagman/b18.jpg"], thumbnail: "assets/Thumbnails/pbappa-thumb.jpg"
    },
    {
      title: "Navratri — Photo Series", kind: "gallery", description: "A visual series celebrating Navratri and its performers.", gallery: ["assets/Navratri%20Photos/na1.jpg",
        "assets/Navratri%20Photos/na2.jpeg",
        "assets/Navratri%20Photos/na3.jpeg",
        "assets/Navratri%20Photos/na4.jpeg",
        "assets/Navratri%20Photos/na5.jpeg",
        "assets/Navratri%20Photos/na6.jpeg",
        "assets/Navratri%20Photos/na7.jpg",
        "assets/Navratri%20Photos/na8.jpg",
        "assets/Navratri%20Photos/na9.jpeg",
        "assets/Navratri%20Photos/na10.jpeg",
        "assets/Navratri%20Photos/na11.jpeg",
        "assets/Navratri%20Photos/na12.jpeg",
        "assets/Navratri%20Photos/na13.jpg"], thumbnail: "assets/Thumbnails/navratri-thumb.jpg"
    }
  ],
  content: [
    { title: "Personal Videos", kind: "video-series", description: "Personal videos and photographs. Add multiple media links to this collection.", videos:["https://youtu.be/Y99_8p0oVWM?si=fL3M-hLaTPMOJruR"], video:"", thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85" },
    { title: "Travel Films", kind: "video-series", description: "A collection of two or three travel films.", videos: ["https://drive.google.com/file/d/1VgSCkZktowFvyioaA3kpT1llyYbKUNni/view?usp=drive_link"], video: "", thumbnail: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1000&q=85" },
    { title: "Travel Documentaries", kind: "video-series", description: "Short travel documentaries and longer-form visual stories.", videos: ["https://youtu.be/PGTDuOrzI5s?si=ReGOMjTCJ8xDRDlz", "https://youtu.be/4XiRpretEY0?si=KHtkFiiXPTRzs3yg"], video: "", thumbnail: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=85" },
    { title: "Easy Trip India — Content Projects", kind: "video-series", description: "Selected content creation work for Easy Trip India.", videos: ["https://drive.google.com/file/d/1xzTUolmOPm77AB7OHRV7bF3SWKne-In8/view?usp=drive_link", "https://drive.google.com/file/d/1T6h9HzBQhXGdHYq1E6RhThNMfIFwFXuX/view?usp=drive_link", "https://drive.google.com/file/d/1JkkQpOI-1bgQUCFOfqn2IB10cY5w7Adb/view?usp=drive_link"], video: "", thumbnail: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=85" }
  ],
  marketing: [
    { title: "Physio9 Clinic — Social Content", kind: "video-series", description: "Selected social videos and creative content for Physio9 Clinic, created during a period when the page grew to nearly 10K followers.", videos: ["https://drive.google.com/file/d/1QL1xMLbBSZmWSfO25PlJPZnhm7d4KGoL/view?usp=drive_link", "https://drive.google.com/file/d/1cZ_UPLQqT8tvN_YJFdci-_c-Cq7TO7PN/view?usp=drive_link", "https://drive.google.com/file/d/1aZbbmNgnNwuXz_oxaJW7Y6u4tsBwDI3N/view?usp=drive_link"], video: "", thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85" },
    { title: "Easy Trip India — Digital Content", kind: "video-series", description: "Selected social media videos and creative content for Easy Trip India.", videos: ["https://drive.google.com/file/d/1xzTUolmOPm77AB7OHRV7bF3SWKne-In8/view?usp=drive_link", "https://drive.google.com/file/d/1T6h9HzBQhXGdHYq1E6RhThNMfIFwFXuX/view?usp=drive_link", "https://drive.google.com/file/d/1JkkQpOI-1bgQUCFOfqn2IB10cY5w7Adb/view?usp=drive_link"], video: "", thumbnail: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=85" }
  ]
};

const categoryGrid = document.getElementById('categoryGrid');
const categoryDetail = document.getElementById('categoryDetail');
const projectGrid = document.getElementById('projectGrid');
const categoryTitle = document.getElementById('categoryTitle');
const categoryEyebrow = document.getElementById('categoryEyebrow');
const categoryDescription = document.getElementById('categoryDescription');
const modalElement = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');

modalElement?.addEventListener('hidden.bs.modal', () => {
  modalElement.querySelectorAll('iframe').forEach(iframe => {
    iframe.src = '';
  });
});

function escapeHTML(value = '') { return String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function renderCategories() {
  categoryGrid.innerHTML = categories.map(cat => `<button class="category-card reveal" type="button" data-category="${cat.id}" aria-label="Explore ${escapeHTML(cat.title)}"><img src="${escapeHTML(cat.image)}" alt="" loading="lazy"><span class="category-open">↗</span><span class="category-content"><span class="category-number">CATEGORY / ${cat.number}</span><h3>${escapeHTML(cat.title)}</h3><p>${escapeHTML(cat.short)}</p></span></button>`).join('');
  categoryGrid.querySelectorAll('[data-category]').forEach(btn => btn.addEventListener('click', () => { window.location.href = `index.html?category=${encodeURIComponent(btn.dataset.category)}`; }));
}
function showCategory(id) {
  const cat = categories.find(item => item.id === id); if (!cat) return;
  categoryEyebrow.textContent = `CATEGORY / ${cat.number}`; categoryTitle.textContent = cat.title; categoryDescription.textContent = cat.description;
  const items = projects[id] || [];
  projectGrid.innerHTML = items.map((p, i) => `<div class="col-12 col-sm-6 col-lg-4"><article class="project-card" tabindex="0" role="button" data-project-category="${id}" data-project-index="${i}" aria-label="Open ${escapeHTML(p.title)}"><div class="project-image-wrap"><img class="project-image" src="${escapeHTML(p.thumbnail || cat.image)}" alt="${escapeHTML(p.title)}" loading="lazy"><div class="project-overlay"><span>${p.kind.includes('video') ? 'WATCH PROJECT' : 'EXPLORE SERIES'}</span><span class="overlay-arrow">↗</span></div></div><div class="project-info"><div><h4>${escapeHTML(p.title)}</h4><p>${escapeHTML(p.description || (p.kind.includes('video') ? 'Film & video project.' : 'Photo series.'))}</p></div><span class="project-index">${String(i + 1).padStart(2, '0')}</span></div></article></div>`).join('');
  projectGrid.querySelectorAll('.project-card').forEach(card => {
    const open = () => openProject(card.dataset.projectCategory, Number(card.dataset.projectIndex));
    card.addEventListener('click', open); card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });
  categoryDetail.hidden = false; categoryGrid.querySelectorAll('.category-card').forEach(btn => btn.classList.toggle('selected', btn.dataset.category === id));
  if (document.body.classList.contains('category-view')) {
    categoryGrid.hidden = true;
    document.querySelector('.gallery-note')?.setAttribute('hidden', '');
    document.getElementById('closeCategory').textContent = '← All categories';
  } else {
    categoryDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  observeReveals();
}
document.getElementById('closeCategory').addEventListener('click', () => { if (document.body.classList.contains('category-view')) { window.location.href = 'index.html#work'; return; } categoryDetail.hidden = true; categoryGrid.querySelectorAll('.category-card').forEach(btn => btn.classList.remove('selected')); document.getElementById('work').scrollIntoView({ behavior: 'smooth' }); });
function driveId(url = '') { const m = url.match(/\/file\/d\/([\w-]+)/) || url.match(/[?&]id=([\w-]+)/); return m ? m[1] : ''; }
function videoEmbed(url = '') {
  if (!url) return '';
  const id = driveId(url); if (id) return `https://drive.google.com/file/d/${id}/preview`;
  try { const u = new URL(url); let vid = ''; if (u.hostname.includes('youtu.be')) vid = u.pathname.slice(1); else if (u.hostname.includes('youtube.com')) { if (u.pathname === '/watch') vid = u.searchParams.get('v') || ''; else if (u.pathname.startsWith('/embed/')) vid = u.pathname.split('/')[2] || ''; else if (u.pathname.startsWith('/shorts/')) vid = u.pathname.split('/')[2] || ''; } if (vid) return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(vid)}`; } catch (e) { }
  if (url.includes('/embed/')) return url; return '';
}
function mediaSlide(url, title, index, kind) {
  const embed = kind === 'video' ? videoEmbed(url) : '';
  let media = '';
  if (kind === 'video' && embed) media = `<iframe src="${escapeHTML(embed)}" title="${escapeHTML(title)} ${index + 1}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
  else if (kind !== 'video' && url) media = `<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer"><img src="${escapeHTML(url)}" alt="${escapeHTML(title)} — image ${index + 1}" loading="lazy"></a>`;
  else media = `<div class="media-empty">Add a public ${kind === 'video' ? 'Google Drive or YouTube video link' : 'Google Drive image link'} to this project's <code>${kind === 'video' ? 'video' : 'gallery'}</code> field in <code>script.js</code>.</div>`;
  return `<div class="carousel-item ${index === 0 ? 'active' : ''}"><div class="media-frame">${media}</div></div>`;
}
function openProject(categoryId, index) {
  const p = (projects[categoryId] || [])[index]; if (!p) return;
  let entries = [];
  if (p.kind === 'video') entries = p.video ? [{ url: p.video, kind: 'video' }] : [];
  if (p.kind === 'video-series') { entries = (p.videos || []).map(url => ({ url, kind: 'video' })); if (!entries.length && p.video) entries = [{ url: p.video, kind: 'video' }]; }
  if (p.kind === 'gallery') entries = (p.gallery || []).map(url => ({ url, kind: 'image' }));
  if (!entries.length) entries = [{ url: '', kind: p.kind.includes('video') ? 'video' : 'image' }];
  const slides = entries.map((entry, i) => mediaSlide(entry.url, p.title, i, entry.kind)).join('');
  const controls = entries.length > 1 ? `<button class="carousel-control-prev" type="button" data-bs-target="#projectMediaCarousel" data-bs-slide="prev" aria-label="Previous media"><span class="carousel-control-prev-icon"></span></button><button class="carousel-control-next" type="button" data-bs-target="#projectMediaCarousel" data-bs-slide="next" aria-label="Next media"><span class="carousel-control-next-icon"></span></button><div class="carousel-indicators">${entries.map((_, i) => `<button type="button" data-bs-target="#projectMediaCarousel" data-bs-slide-to="${i}" class="${i === 0 ? 'active' : ''}" aria-label="Slide ${i + 1}"></button>`).join('')}</div>` : '';
  modalBody.innerHTML = `<div id="projectMediaCarousel" class="carousel slide"><div class="carousel-inner">${slides}</div>${controls}</div><div class="row g-3"><div class="col-lg-8"><h2 class="modal-project-title">${escapeHTML(p.title)}</h2><p class="modal-project-description">${escapeHTML(p.description)}</p></div><div class="col-lg-4"><span class="eyebrow">${escapeHTML(categories.find(c => c.id === categoryId)?.title || '')}</span><p class="eyebrow mt-2">${p.kind === 'gallery' ? 'PHOTO SERIES' : p.kind === 'video-series' ? 'VIDEO COLLECTION' : 'FILM / VIDEO'}</p></div></div>`;
  bootstrap.Modal.getOrCreateInstance(modalElement).show();
}
const heroImage = document.getElementById('heroImage'); if (heroImage && HERO_IMAGE_URL) heroImage.src = HERO_IMAGE_URL;
const form = document.getElementById('contactForm'); form.addEventListener('submit', e => { e.preventDefault(); if (!form.reportValidity()) return; const data = new FormData(form); const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name')}`); const body = encodeURIComponent(`${data.get('message')}\n\nFrom: ${data.get('name')}\nEmail: ${data.get('email')}`); window.location.href = `mailto:hrishibondre45@gmail.com?subject=${subject}&body=${body}`; });
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.querySelectorAll('#mainNav .nav-link').forEach(link => link.addEventListener('click', () => { const nav = document.getElementById('mainNav'); if (nav.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(nav).hide(); }));
const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } }), { threshold: .12, rootMargin: '0px 0px -4% 0px' });
function observeReveals() { document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el)); }
const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('section-visible'); sectionObserver.unobserve(entry.target); } }), { threshold: .04, rootMargin: '0px 0px -5% 0px' });
document.querySelectorAll('main > section').forEach(section => { section.classList.add('section-enter'); sectionObserver.observe(section); });
renderCategories(); observeReveals();
const categoryParam = new URLSearchParams(window.location.search).get('category');
if (categoryParam && categories.some(c => c.id === categoryParam)) {
  document.body.classList.add('category-view');
  showCategory(categoryParam);
}
const serviceDetails = {
  film: { title: 'Filmmaking & cinematography', eyebrow: '01 / THE MOVING FRAME', text: 'I started by capturing the places and moments that made me feel something. Over time, I developed my approach to framing, camera movement, pacing and editing—trying to make every film feel like an experience rather than just a collection of shots.', category: 'film' },
  photo: { title: 'Photography', eyebrow: '02 / THE STILL FRAME', text: 'Photography lets me pause a moment and notice the details that can easily be missed. From travel and architecture to festivals and people, I look for atmosphere, composition and emotion in every frame.', category: 'photo' },
  content: { title: 'Content creation', eyebrow: '03 / IDEAS INTO STORIES', text: 'I create personal visual stories, travel films and creator-focused content. My process starts with an idea, then moves through planning, shooting and editing to shape something that feels clear, engaging and true to the moment.', category: 'content' },
  marketing: { title: 'Digital marketing', eyebrow: '04 / CREATIVE FOR BRANDS', text: 'I combine visual storytelling with social-first content to help brands communicate their ideas. My experience includes creating and editing content for client pages, adapting formats for platforms and keeping the creative direction consistent.', category: 'marketing' }
};
document.querySelectorAll('[data-service]').forEach(row => row.addEventListener('click', () => {
  const d = serviceDetails[row.dataset.service]; if (!d) return;
  document.getElementById('serviceDetailEyebrow').textContent = d.eyebrow;
  document.getElementById('serviceDetailTitle').textContent = d.title;
  document.getElementById('serviceDetailText').textContent = d.text;
  document.getElementById('servicePortfolioLink').onclick = (event) => { event.preventDefault(); window.location.href = `index.html?category=${d.category}`; };
  const panel = document.getElementById('serviceDetailPanel'); panel.hidden = false; row.after(panel); panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  document.querySelectorAll('[data-service]').forEach(item => item.classList.toggle('service-active', item === row));
}));
document.getElementById('closeServiceDetail')?.addEventListener('click', () => { document.getElementById('serviceDetailPanel').hidden = true; document.querySelectorAll('[data-service]').forEach(item => item.classList.remove('service-active')); });
// Neon cursor follows the pointer on devices with a fine pointer; disabled for touch and reduced-motion users.
if (matchMedia('(hover: hover) and (pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const ring = document.querySelector('.cursor-ring');
  const glow = document.querySelector('.cursor-glow');
  let targetX = window.innerWidth / 2, targetY = window.innerHeight / 2, ringX = targetX, ringY = targetY, glowX = targetX, glowY = targetY, active = false;
  window.addEventListener('pointermove', e => { targetX = e.clientX; targetY = e.clientY; active = true; ring.style.opacity = '1'; if (glow) glow.style.opacity = '.9'; }, { passive: true });
  const animateCursor = () => {
    // A restrained, smooth follow: the ring trails slightly and the glow follows a touch more softly.
    ringX += (targetX - ringX) * 0.22; ringY += (targetY - ringY) * 0.22;
    glowX += (targetX - glowX) * 0.16; glowY += (targetY - glowY) * 0.16;
    if (active) { ring.style.left = ringX + 'px'; ring.style.top = ringY + 'px'; if (glow) { glow.style.left = glowX + 'px'; glow.style.top = glowY + 'px'; } }
    requestAnimationFrame(animateCursor);
  };
  requestAnimationFrame(animateCursor);
  document.querySelectorAll('a,button,.project-card').forEach(el => { el.addEventListener('pointerenter', () => ring.classList.add('active')); el.addEventListener('pointerleave', () => ring.classList.remove('active')); });
}
