'use strict';

let f = debounce(console.log, 1000);

function debounce(f, ms) {
    let switcher = false;

    function wrapper() {
        
        if (switcher === false) {
            f.apply(this, arguments);
            switcher = true;
            setTimeout(() => switcher = false, ms);
        }
        
    }
    return wrapper;
}

setInterval(() => f(1), 100);

