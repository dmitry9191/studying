// создает из пар [ключ, значение] объект

let map = new Map;
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map);
// or: let obj = Object.fromEntries(map.entries());

console.log(obj);



