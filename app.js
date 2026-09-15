const grid = document.getElementById("work-grid");
const works = window.WORKS || [];

function reelCard(item, i) {
  const n = String(i + 1).padStart(2, "0");
  const shape = item.landscape ? " landscape" : "";
  const poster = item.poster ? ` poster="${item.poster}"` : "";
  return `
    <article class="reel">
      <div class="reel-player${shape}">
        <video
          src="${item.src}"${poster}
          controls
          playsinline
          preload="metadata"
          controlslist="nodownload"
        ></video>
      </div>
      <div class="reel-copy">
        <div class="reel-meta"><span>${item.tag || "Film"}</span><span>${n} / ${item.year || ""}</span></div>
        <h3>${item.title}</h3>
        <p>${item.caption || ""}</p>
      </div>
    </article>
  `;
}

if (grid) {
  grid.innerHTML = works.map(reelCard).join("");
}

grid?.addEventListener(
  "play",
  (e) => {
    if (e.target.tagName !== "VIDEO") return;
    grid.querySelectorAll("video").forEach((v) => {
      if (v !== e.target) v.pause();
    });
  },
  true
);

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

if (location.hash) {
  document.querySelector(location.hash)?.scrollIntoView();
}

const menuBtn = document.getElementById("menu-btn");
const links = document.getElementById("nav-links");
menuBtn?.addEventListener("click", () => {
  const open = document.body.classList.toggle("menu-open");
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});
links?.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    menuBtn?.setAttribute("aria-expanded", "false");
  })
);

const cursor = document.querySelector(".cursor");
if (cursor && matchMedia("(pointer:fine)").matches) {
  window.addEventListener("pointermove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
  document.querySelectorAll("a, button, video").forEach((el) => {
    el.addEventListener("pointerenter", () => cursor.classList.add("on-link"));
    el.addEventListener("pointerleave", () => cursor.classList.remove("on-link"));
  });
}
