'use strict';

function quicksort(arr) {
    if (arr.length < 2) { // The base case: arrays with 0 and 1 elements are already sorted
        return arr;
    } else {
        let pivot = arr[0]; // Recursive case
        let less = []; // The subarray for elements, that are less than pivot element
        let more = []; // The subarray for elements, that are more than pivot element
        for (let item of arr.slice(1)) {
            if (item > pivot) {
                more.push(item);
            } else {
                less.push(item);
            }
        }
        return [...quicksort(less), pivot, ...quicksort(more)];
    }
}

console.log(quicksort([10, 5, 2, 3, 7, 11, 13, 18, -1, -11]));
