"use strict";
// исправлена ошибка, цикл while заменен на for чтобы i существовала в лексическом окружении, которое соответствует текущей итерации
/* альтернативное решение
function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 10) {
        let j = i; // создается локальная для каждой итерации переменная j в которую копируется текущее значение i
        ... далее так же...
    }
}
*/
function makeArmy() {
    let shooters = []; 
    for (let i = 0; i < 10; i++) {
        let shooter = function() {
            console.log(i);
        };
        shooters.push(shooter);
    }
    return shooters;
}
let army = makeArmy();
army[0]();
army[5]();

