let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

function sortByAge(users) {
    users.sort((a, b) => a.age - b.age)
}

sortByAge(arr);

console.log(arr[1]);



