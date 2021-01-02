let dictionary = Object.create(null, { // prototype = null нужно, чтобы можно было использовать в качестве ключа __proto__
    toString: { // дескриптор определяет свойство toString
        value() { // свойство value это функция
            return Object.keys(this).join(', '); // которая возвращает список ключей
        }
    }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for (let key in dictionary) { 
    console.log(key); // метод toString не будет выведен, так как Object.create создает свойства у которых все флаги по умолчанию false
}

console.log(dictionary.toString());
