// ------------------ EXPLORAR POR PERSONAJE ------------------
const characterThumbs = document.querySelectorAll('.character-options img');
const selectedCharacterImage = document.getElementById('selected-character-image');
const selectedCharacterName = document.getElementById('selected-character-name');

characterThumbs.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    characterThumbs.forEach((item) => {
      item.classList.remove('thumb-active');
    });

    thumb.classList.add('thumb-active');

    const fullSrc = thumb.dataset.full || thumb.src;
    const name = thumb.dataset.name || thumb.alt || '';

    if (selectedCharacterImage) {
      selectedCharacterImage.src = fullSrc;
      selectedCharacterImage.alt = name;
    }

    if (selectedCharacterName) {
      selectedCharacterName.textContent = name;
    }
  });
});

// ------------------ SONIDO AL PASAR SOBRE PERSONAJES ------------------
const hoverSound = new Audio('audios/cablin-bumpers-audio.mp3');

hoverSound.preload = 'auto';
hoverSound.volume = 0.35;

const hoverSoundDuration = 0.22; // 220 milisegundos
let hoverSoundTimeout;

let audioUnlocked = false;

// Los navegadores requieren una interacción previa para habilitar audio.
document.addEventListener('pointerdown', () => {
  audioUnlocked = true;
}, { once: true });

characterThumbs.forEach((thumb) => {
  thumb.addEventListener('pointerenter', (event) => {
    if (event.pointerType !== 'mouse' || !audioUnlocked) return;

    clearTimeout(hoverSoundTimeout);

    hoverSound.pause();
    hoverSound.currentTime = 0;

    hoverSound.play().then(() => {
      hoverSoundTimeout = setTimeout(() => {
        hoverSound.pause();
        hoverSound.currentTime = 0;
      }, hoverSoundDuration * 1000);
    }).catch(() => { });
  });
});

