'use strict';
/*

Promises

console.log('Запрос данных...');

const req = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Подготовка данных...');
    
        const product = {
            name: 'TV',
            price: 2000
        };
    
        resolve(product);
    }, 2000);
});

req.then((product) => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            product.status = 'order',
            resolve(product);
        }, 2000);
    });
}).then((data) => {
    data.modify = true;
    return data;
}).then(data => {
    console.log(data);
}).catch(() => {
    console.error('error');
}).finally(() => {
    console.log('finally');
});
*/


// Fetch API

// new RegExp('pattern', 'flags');
// /pattern/[i(ignoreRegister), g(global), m(multipleStrings)]
/*

RegularExp classes:
\d (digits),
\w (letters),
\s (spaces)
\D (not digits),
\W (not words),
\S (not spaces)

*/
