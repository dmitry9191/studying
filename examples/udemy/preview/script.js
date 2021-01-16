'use strict';

const btn = document.querySelectorAll('button');

btn.forEach(item => {
    item.addEventListener('click', () => alert('cool'), {once: true});
});


const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();
    alert('xuy!');
});
