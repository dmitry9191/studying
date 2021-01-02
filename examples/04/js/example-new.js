var table = 3; 	// Элемент таблицы
var operator = 'multiple'; // Тип вычисления
var i = 1; // Значение счетчика
var msg = ''; // Сообщение


if (operator === 'addition') { // Если оператор 'сложение'
	while (i < 11) {						 // Пока счетчик меньше 11
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br>'; // Вычисление
    i++; // Инкремент
  }
} else {
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br>';
    i++;
  }
}

var el = document.getElementById('blackboard');
el.innerHTML = msg;
