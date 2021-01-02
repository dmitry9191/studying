let room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value) {
    return (value == meetup && key != '') ? undefined : value; 
}));
// Первый вызов функции replacer - объект-обертка "": meetup. Поэтому в первом вызове нужно проверить, что ключ не равен "".
// Тогда объект обертка останется и все остальные пары ключ-значения пройдут проверку и отсечется ненужное.

