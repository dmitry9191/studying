'use strict';

class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }

    static get [Symbol.species]() {
        return Array;
    }
}

const arr = new PowerArray(1, 2, 3, 4);
const filteredArr = arr.filter(item => item >= 10);

console.log(filteredArr);

