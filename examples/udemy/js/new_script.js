'use strict';

const soldier = {
    health: 400,
    armor: 200,
    sayHello() {
        console.log('Say hello to my little friend!');
    }
};

const john = Object.create(soldier);

console.log(john.armor);
john.sayHello();

