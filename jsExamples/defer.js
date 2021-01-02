'use strict';
Function.prototype.defer = function(ms) {
    let f = this;
    function wrapper() {
        setTimeout(() => f.apply(this, arguments), ms);
    }
    return wrapper;
}

function f(a, b) {
    console.log(a + b);
}

f.defer(1000)(5, 2);
