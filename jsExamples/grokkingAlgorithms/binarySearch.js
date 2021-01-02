function binarySearch(list, item) {
    let low = 0; // low и high - это границы той части списка, в которой выполняется поиск
    let high = list.length - 1;

    while (low <= high) { // пока эта часть не сократится до одного элеманта...
        let mid = Math.floor((low + high) / 2); // ...проверяем средний элемент
        let guess = list[mid];
        if (guess === item) { // значение найдено
            return mid;
        }
        if (guess > item) { // Если перебор
            high = mid - 1;
        } else { // Если недобор
            low = mid + 1;
        }
    }
    return null; // Если значение не найдено
}

myList = [1, 3, 5, 7, 9];
console.log(binarySearch(myList, 3));
console.log(binarySearch(myList, -1));  
    