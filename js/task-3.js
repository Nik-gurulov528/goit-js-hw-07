'use strict';

const inputForm = document.querySelector('#name-input');

const helloText = document.querySelector('#name-output');

let firstText = 'Anonymous';

inputForm.addEventListener('input', () => {
  firstText = inputForm.value;
  if (firstText.trim() !== '') {
    helloText.textContent = firstText.trim();
  } else {
    helloText.textContent = 'Anonymous';
  }
});
