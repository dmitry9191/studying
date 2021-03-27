'use strict';

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');


if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg')) {
    form.style.backgroundColor = 'red';
}

change.addEventListener('click', () => {
    if (localStorage.getItem('bg')) {
        localStorage.removeItem('bg');
        form.style.backgroundColor = 'white';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
}); 

// const ans = prompt('Enter your digits');
// const reg = /\d/g;
// console.log(ans.match(reg));
// console.log(reg.test(ans)); 

// console.log(ans.match(reg));
// console.log(ans.search(reg));

// const pass = prompt('Password');
// console.log(pass.replace(/\./g, '*'));

// console.log('38-86-52'.replace(/-/g, ':'));

const str = 'My name is R2D2';
console.log(str.match(/\D/g));