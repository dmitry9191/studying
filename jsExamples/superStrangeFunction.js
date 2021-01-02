'use strict';
function sum(value) { // задача sum записать первое значение value и вернуть функцию increase
    sum.count = value; // свойство count становится равным первому аргументу
    function increase(value2) {
        sum.count += value2; // функция вызывается и берет следующее значение, суммируя его с sum.count
        return increase; // и возвращает себя же саму но уже со следующим значением
    }
    increase[Symbol.toPrimitive] = function() { // когда increase возвращается в последний раз мы преобразуем ее... 
        return sum.count; // и возвращаем в виде числа, суммы всех операций
    };
    return increase; // здесь не рекурсия а простой вызов, так как не increase()
}

console.log(sum(6)(-1)(-2)(-3));
