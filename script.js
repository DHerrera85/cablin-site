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