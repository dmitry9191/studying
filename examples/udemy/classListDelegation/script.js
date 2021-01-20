'use strict';

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red');
});

wrapper.addEventListener('click', (e) => {
    if (e.target && e.target.matches("button.red")) {
        console.log('Hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
