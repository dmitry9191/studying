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

function printList(list) {
    console.log(list.value);
    list = list.next;
    if (list.next == null) {
        console.log(list.value);
    } else {
        printList(list);
    }
} 

printList(list);

/* более лаконичное решение:
function printList(list) {
    console.log(list.value);
    if (list.next) { // next будет равен null условие не сработает
        printList(list.next);
    }
}
Способ с циклом:
function printList(list) {
    let tmp = list;
    while (tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}
*/
