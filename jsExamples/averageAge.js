let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(arr) {
    let sum = arr.reduce((sum, current) => sum + current.age, 0);
    return sum / arr.length;
}

console.log(getAverageAge(arr));
