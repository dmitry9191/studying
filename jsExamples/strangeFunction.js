"use strict";
function sum(num) { // num - первый параметр функции (первая скобка в вызове)
  return function(bum) { // возвращает вложенную функцию с bum (вторая скобка в вызове)
    return num + bum; // берет параметр num из своего лексического окружения
  }
}

console.log(sum(1)(-5));
