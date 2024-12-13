'use strict';

const listTitles = document.querySelectorAll('.item');
console.log('Number of categories: ', listTitles.length);

const arrayListTitles = [...listTitles];
arrayListTitles.forEach(title => {
  console.log('Category: ', title.children[0].textContent);
  console.log('Elements: ', title.children[1].children.length);
});
