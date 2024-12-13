'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector('.change-color');

const textColor = document.querySelector('.color');

const webBody = document.querySelector('body');

changeBtn.addEventListener('click', () => {
  webBody.style.backgroundColor = getRandomHexColor();
  textColor.textContent = webBody.style.backgroundColor;
});
