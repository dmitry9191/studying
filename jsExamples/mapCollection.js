/* Методы с свойства коллекции Map:
    new Map() – создаёт коллекцию.
    map.set(key, value) – записывает по ключу key значение value.
    map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
    map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
    map.delete(key) – удаляет элемент по ключу key.
    map.clear() – очищает коллекцию от всех элементов.
    map.size – возвращает текущее количество элементов.
*/

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomato', 350],
    ['onion', 50]
]);

// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);
}

// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
    console.log(amount);
}

// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap.entries()) {
    console.log(entry);
}
