'use strict';

function work(a, b) {
    console.log(a + b);
}

function spy(func) {
    wraper.calls = [];
    function wrapper(...arguments) {
        wrapper.calls.push(arguments);
        return func.apply(this, arguments);
    }
    return wrapper;
}

work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls) {
    console.log('call:' + args.join());
}
