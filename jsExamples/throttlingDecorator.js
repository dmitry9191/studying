function f(a) {
    console.log(a);
}

function throttle(func, ms) {
    let currentContext;
    let currentArgs;
    let isCooldown = false;
    function wrapper() {
        if (isCooldown) {
            currentContext = this;
            currentArgs = arguments;
            return;
        };
        func.apply(this, arguments);
        isCooldown = true;
        setTimeout(function() {
            isCooldown = false;
            if(currentArgs) {
                wrapper.apply(currentContext, currentArgs);
                currentArgs = currentContext = null;
            }
        }, ms);
    }
    return wrapper;
}

let f1000 = throttle(f, 1000);

f1000(1);
f1000(2);
f1000(3);
f1000(4);
f1000(5);
f1000(6);
f1000(7);
