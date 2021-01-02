let worker = {
    slow(min, max) {
        console.log(`Called with ${min}, ${max}`);
        return min + max; // здесь могут быть очень ресурсоемкие вычисления
    }
}
// Хеш-функция превращает два аргумента в одну строку для помещения в коллекцию
function hash(args) {
    return [].join.call(args); // берется метод join для обычного массива [], и применяется в контексте псевдомассива args
}

function cachingDecorator(func, hash) {
    let cache = new Map();
    return function() {
        let key = hash(arguments); // вызывается функция hash которой передаются аргументы для создания одного ключа
        if (cache.has(key)) {
            return cache.get(key);
        }
        let result = func.call(this, ...arguments); // call передает вызову функции (методу) контекcт this, а также все аргументы. Аналог func.apply(context, args), где args превдомассив аргументов
        cache.set(key, result);
        return result;
    };
}

worker.slow = cachingDecorator(worker.slow, hash); // теперь worker.slow будет кэшироваться

console.log(worker.slow(3, 5));
console.log(worker.slow(3, 5)); // Второй вызов уже берет данные из кэша
