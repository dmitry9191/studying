'use strict';
function f(x) {
    console.log(x);
}

function delay(f, ms) {
    function wrapper() {
        setTimeout(() => f.apply(this, arguments), ms);
    }
    return wrapper;
}

let f1000 = delay(f, 1000);
let f2000 = delay(f, 5000);

f1000('Hello', 'John');
f2000('test');