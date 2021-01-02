// функция возвращает массив без анаграм

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
        let elem = Array
        .from(arr[i])
        .sort()
        .join('')
        .toLowerCase();
        if (set.has(elem)) {
            arr.splice(i, 1);
            i--;
        }
        set.add(elem);
    }
    return arr;
}

console.log(aclean(arr));

/* Альтернативное решение: 
function aclean(arr) {
    let map = new Map();
    for (let word of arr) {
        let sorted = word.toLowerCase()
        .split('')
        .sort()
        .join('');
        map.set(sorted, word);
    }
    return Array.from(map.values());
}
*/