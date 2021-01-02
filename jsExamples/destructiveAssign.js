let user = {
    name: "John",
    years: 30
};

let {
    name,
    years: age,
    isAdmin: isAdmin = false
} = user;

console.log(name);
console.log(age);
console.log(isAdmin);
