'use strict';

const now = new Date();

console.log(now.setHours(18));
console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(end - start);
