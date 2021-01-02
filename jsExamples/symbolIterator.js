let range = {
    from: 1,
    to: 25000
};

// вызов for..of сначала вызывает эту функцию:
range[Symbol.iterator] = function() {

    // ...она возвращает объект итератора
    // Далее, for..of работает только с этим итератором, запрашивая у него новые значения
    return {
        current: this.from,
        last: this.to,

        // next() вызывается на каждой итерации цикла for..of
        next() {
            // он должен вернуть значение в виде объекта {done:.., value:...}
            if (this.current <= this.last) {
                return{done: false, value: this.current++};
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

for (let num of range) {
    console.log(num);
}

/* Итерирование строк 
let str = 'fuck';
let iterator = str[Symbol.iterator]();
while(true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
} */
