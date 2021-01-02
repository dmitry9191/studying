'use strict';
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(key) {
    return (a, b) => a[key] > b[key] ? 1 : -1; // долго тупил, что нужно обращаться к ключу объекта через скобки а не точку
}

users.sort(byField('age'));
console.log(users[0]);

