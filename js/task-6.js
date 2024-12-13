'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputText = document.querySelector('input');

const controlDiv = document.querySelector('#controls');
const boxDiv = document.querySelector('#boxes');

const createBtn = document.querySelector('#controls button[data-create]');
const destroyBtn = document.querySelector('#controls button[data-destroy]');

let currentBox;

let size = 30;

createBtn.addEventListener('click', () => {
  if (inputText.value >= 1 && inputText.value <= 100) {
    for (let i = 1; i <= inputText.value; i += 1) {
      currentBox = document.createElement('div');
      currentBox.setAttribute('width', `${size}px`);
      currentBox.setAttribute('height', `${size}px`);
      size += 10;
      currentBox.style.backgroundColor = getRandomHexColor();
      boxDiv.insertAdjacentElement('beforeend', currentBox);
    }
  }
});

destroyBtn.addEventListener('click', () => {
  while (boxDiv.children.length !== 0) {
    currentBox = boxDiv.children[boxDiv.children.length - 1];
    currentBox.remove();
  }
  size = 30;
});
