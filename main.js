const $ = (s) => document.querySelector(s);
const page = document.body.dataset.page;
const current = new URLSearchParams(location.search).get("area");
let lang = "en";
try { const s = localStorage.getItem("lang"); if (s === "pt" || s === "en") lang = s; } catch (e) { }
const t = (v) => v[lang];

function render() {
  document.documentElement.lang = lang;
  $("header").innerHTML = `<div class="wrap"><a class="logo" href="index.html">${OWNER}<span class="red">.</span></a>
<nav class="label">${AREAS.map(a => `<a href="work.html?area=${a.slug}" class="${page === "work" && current === a.slug ? "active" : ""}">${t(a.name)}</a>`).join("")}
<a href="about.html" class="${page === "about" ? "active" : ""}">${t(UI.about)}</a>
<span class="lang" role="group" aria-label="Language">${["en", "pt"].map(l => `<button data-lang="${l}" aria-pressed="${l === lang}" class="${l === lang ? "on" : ""}">${l.toUpperCase()}</button>`).join("")}</span></nav></div>`;
  $("header").querySelectorAll("[data-lang]").forEach(b => b.onclick = () => {
    lang = b.dataset.lang; try { localStorage.setItem("lang", lang); } catch (e) { } render();
  });
  $("footer").innerHTML = `<div class="wrap label muted"><span>© ${new Date().getFullYear()} ${OWNER}</span><a href="mailto:${EMAIL}">${EMAIL}</a></div>`;

  if (page === "home") {
    $("#hero-name").textContent = OWNER;
    $("#area-names").textContent = AREAS.map(a => t(a.name)).join(" / ");
    $("#areas").innerHTML = AREAS.map((a, i) => `<a class="area" href="work.html?area=${a.slug}">
      <span class="label muted num">0${i + 1}</span><div><h2>${t(a.name)}</h2><p>${t(a.intro)}</p></div>
      <span class="label">${a.items.length} ${t(UI.works)} →</span></a>`).join("");
    document.title = `${OWNER} — ${t(UI.portfolio)}`;
  }
  if (page === "work") {

    const a = AREAS.find(x => x.slug === current) || AREAS[0];
    document.title = `${t(a.name)} — ${OWNER}`;
    $("#work").innerHTML = `<section class="page-head reveal"><p class="label red">${t(UI.work)} / ${t(a.name)}</p>
      <h1>${t(a.name)}<span class="red">.</span></h1><p class="intro muted">${t(a.intro)}</p></section>
      <div class="grid">${a.items.map(it => `<${it.link ? `a href="${it.link}" target="_blank" rel="noopener"` : "article"} class="item reveal" ${it.gallery ? `data-gallery='${JSON.stringify(it.gallery)}'` : ""}>
        ${it.image ? `<div class="thumb"><img src="${it.image}" alt="${it.title}" loading="lazy" class="${it.logo ? "logo" : ""}" ></div>` : `<div class="thumb text">${it.title}</div>`}
        <div class="item-row"><h2>${it.title}</h2><span class="label muted">${it.year}</span></div>
        <p class="muted">${t(it.text)}</p></${it.link ? "a" : "article"}>`).join("")}</div>`;
    document.querySelectorAll("[data-gallery]").forEach(el => el.onclick = () => openGallery(JSON.parse(el.dataset.gallery)));
  }
  if (page === "about") {
    $("#about").innerHTML = `<div><p class="label red">${t(UI.about)}</p><h1>${t(UI.hello)}<span class="red">.</span></h1></div>
      <div class="body"><p>${t(UI.bio)}</p><p class="muted">${t(UI.available)}</p>
      <div class="contact"><p class="label muted">${t(UI.contact)}</p><a href="mailto:${EMAIL}">${EMAIL} →</a></div></div>`;
    document.title = `${t(UI.aboutTitle)} — ${OWNER}`;
  }
}

function openGallery(imgs) {
  let i = 0;
  const o = document.createElement("div");
  o.className = "lightbox" + (imgs.length < 2 ? " single" : "");
  o.innerHTML = `<button class="lb-close" aria-label="Close">×</button>
    <button class="lb-nav prev" aria-label="Previous">←</button>
    <img alt="">
    <button class="lb-nav next" aria-label="Next">→</button>
    <p class="label lb-count"></p>`;
  const img = o.querySelector("img"), count = o.querySelector(".lb-count");
  const show = (n) => { i = (n + imgs.length) % imgs.length; img.src = imgs[i]; count.textContent = `${i + 1} / ${imgs.length}`; };
  const close = () => { o.remove(); document.body.style.overflow = ""; document.removeEventListener("keydown", key); };
  const key = (e) => {
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") show(i + 1);
    if (e.key === "ArrowLeft") show(i - 1);
  };
  o.onclick = (e) => { if (e.target === o) close(); };
  o.querySelector(".lb-close").onclick = close;
  o.querySelector(".prev").onclick = () => show(i - 1);
  o.querySelector(".next").onclick = () => show(i + 1);
  document.addEventListener("keydown", key);
  document.body.style.overflow = "hidden";
  document.body.appendChild(o);
  show(0);
}

render();
