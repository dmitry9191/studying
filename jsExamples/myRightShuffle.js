function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от нуля до i
        /* Далее меняем элементы местами
        для этого используется 'деструктирующее' присваивание
        можно также записать так:
        let t = array[i];
        array[i] = array[j];
        array[j] = t;
        Деструктирующее присваивание: */
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };

for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
  }

for (let key in count) {
    console.log(`${key}: ${count[key]}`);
}
