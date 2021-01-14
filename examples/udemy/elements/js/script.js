'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
box.style.width = '500px';
box.style.cssText = 'background-color: blue; width: 500px';
btns[1].style.borderRadius = '100%';
hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});
circles[1].style.backgroundColor = 'yellow';

const div = document.createElement('div');
const text = document.createTextNode('any');

div.classList.add('black');

hearts[0].before(div);

div.textContent = 'Hello';
