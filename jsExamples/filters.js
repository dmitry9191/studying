// две функции фильтра для метода arr.filter, обе ипользуют вложенные функции
"use strict";
function inBetween(a, b) {
    return function(item) {
        if (item >= a && item <= b) return true;
    };
}

function inArray(array) {
    return function(item) {
        if (array.includes(item)) return true;
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 7))); 
console.log(arr.filter(inArray([1, 2, 7])));
