const container = document.querySelector('.container');
const beforeContainer = document.querySelector('.before-container');
const afterContainer = document.querySelector('.after-container');
const slider = document.querySelector('.slider');

container.addEventListener('mousemove', (e) => {
  let xPos = e.layerX;

  beforeContainer.style.width = `${xPos}px`;
  slider.style.left = `${xPos}px`;
});