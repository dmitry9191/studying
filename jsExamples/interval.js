/* Решение через setInterval
function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function() {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}
printNumbers(3, 14);
*/

// Решение с помощью рекурсивного setTimeout
function printNumbers(from, to) {
    let timerId = setTimeout(function counter() {
        console.log(from);
        from++;
        if (from <= to) {
            timerId = setTimeout(counter, 1000);
        }
    }, 1000);
}

printNumbers(5, 10);
    