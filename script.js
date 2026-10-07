

// ------------------ SELECTOR DE PERSONAJES CON TOGGLE ------------------
let activeSide = "right";
const sideButtons = document.querySelectorAll(".side-btn");
const sideStatus  = document.querySelector(".side-status");

sideButtons.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    activeSide = btn.dataset.side; // "left" | "right"
    sideButtons.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    sideStatus.innerHTML = `Enviando a: <strong>${activeSide === "left" ? "Izquierda" : "Derecha"}</strong> ${activeSide === "left" ? "◀" : "▶"}`;
  });
});

function updateSide(side, src, name){
  const imgId = side === "left" ? "char-left" : "char-right";
  const tagId = side === "left" ? "series-left" : "series-right";
  const imgEl = document.getElementById(imgId);
  const tagEl = document.getElementById(tagId);
  if (imgEl && src)  imgEl.src = src;
  if (tagEl && name) tagEl.textContent = name;
}

function selectCharacter(thumbEl){
  // 1) Borde activo solo en la miniatura clickeada
  document.querySelectorAll('.character-options img').forEach(img=>img.classList.remove('thumb-active'));
  thumbEl.classList.add('thumb-active');

  // 2) Actualizar la imagen grande y el nombre segun el lado activo
  const fullSrc = thumbEl.dataset.full || thumbEl.src;
  const name    = thumbEl.dataset.name || thumbEl.alt || "";
  updateSide(activeSide, fullSrc, name);
}
