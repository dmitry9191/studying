'use strict';
function askPassword(ok, fail) {
    let password = prompt('Password?', '');
    if (password == 'rockstar') ok();
    else fail();
}

let user = {
    name: 'Vasya',
    loginOk() {
        alert(`${this.name} logged in`);
    },
    loginFail() {
        alert(`${this.name} failed to log in`);
    } 
};

askPassword(() => user.loginOk(), () => user.loginFail()); // or: askPassword(user.loginOk.bind(user), user.loginFail.bind(user));