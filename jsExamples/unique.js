function unique(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i], i + 1)) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];



unique(strings);

console.log(strings);

/* 
Another way:
function unique(arr) {
    let result = [];
    for (let item of arr) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    return result;
} 
*/

