'use strict';

const formList = document.querySelector('.login-form');

const allInput = document.querySelectorAll('.login-form input');

const arrayInput = [...allInput];

let userData = {};

formList.addEventListener('submit', event => {
  event.preventDefault();
  if (arrayInput[0].value === '' || arrayInput[1].value === '') {
    alert('All form fields must be filled in');
  } else {
    userData.email = arrayInput[0].value.trim();
    userData.password = arrayInput[1].value.trim();
    console.log(userData);
    formList.reset();
  }
});
