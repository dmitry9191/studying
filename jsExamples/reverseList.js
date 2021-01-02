// вывод значений связанного списка в обратном порядке методом рекурсии

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

/* Более лаконичное решение:
function printList(list) {
    if (list.next) {
        printList(list.next);
    }
    console.log(list.value);
}
Мое решение:
function printList(list) {
    if (list.next) {
        printList(list.next);
        console.log(list.value);
    } else {
        console.log(list.value);
    }
}
*/

// Решение циклом:

function printList(list) {
    let tmp = list;
    let tmpArr = [];
    while (tmp) {
        tmpArr.push(tmp.value);
        tmp = tmp.next;
    }
    tmpArr
        .reverse()
        .forEach((item) => console.log(item));
}

printList(list);
