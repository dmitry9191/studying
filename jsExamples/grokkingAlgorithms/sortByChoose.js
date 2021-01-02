function findSmallest(arr) { // функция поиска наименьшего значения
    let smallest = arr[0]; // Для хранения наименьшего значения
    let smallestIndex = 0; // Для хранения индекса наименьшего значения
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

function selectionSort(arr) { // Функция сортировки массива
    let newArr = [];
    let i = 0;
    while (i < arr.length) {
        let smallest = findSmallest(arr); // Находит наименьший элемент в массиве...
        newArr.push(arr[smallest]); // ... и добавляет его в новый массив
        arr.splice(smallest, 1);
    }
    return newArr;
}
console.log(findSmallest([5, 3, 6, 2, 10, -5, 14, 28, 18, 400, 11, 12]));
console.log(selectionSort([5, 3, 6, 2, 10, -5, 14, 28, 18, 400, 11, 12]));
 