(function() {
  
//ЧАСТЬ ПЕРВАЯ: СОЗДАЕМ ОБЪЕКТ HOTEL И ДЕТАЛИ ПРЕДЛОЖЕНИЯ
//Создаем объект hotel при помощи синтаксиса объектного литерала
	var hotel = {
    name: 'Отель "Пляж"',
    roomRate: 240, //Сумма в рублях
    discount: 15, //Процентное значение скидки
    offerPrice: function() {
      var offerRate = this.roomRate * ((100 - this.discount) / 100);
      return offerRate;
    }
  }
// Записываем название отеля, стандартную ставку и специальную ставку
  var hotelName, roomRate, specialRate; //Объявляем переменные
  
  hotelName = document.getElementById('hotelName'); //Получаем элементы
  roomRate = document.getElementById('roomRate');
  specialRate = document.getElementById('specialRate');
  
  hotelName.textContent = hotel.name; //Записываем название отеля
  roomRate.textContent = hotel.roomRate.toFixed(2) + 'Р'; //Ставка за номер
  specialRate.textContent = hotel.offerPrice() + 'Р'; //Записываем цену по акции
  
// ЧАСТЬ ВТОРАЯ: ВЫЧИСЛЯЕМ И ЗАПИСЫВАЕМ ИНФОРМАЦИЮ ОБ ИСТЕЧЕНИИ АКЦИИ
	var expiryMsg; //Сообщение, выводимое пользователем
  var today; //Сегодняшняя дата
  var elEnds; //Элемент в котором записывается сообщение об окончании акции
  
  function offerExpires(today) {
  //Внутри функции объявляем переменные с локальной областью видимости
  	var weekFromToday, day, date, month, year, dayNames, monthNames;
  //Добавляем еще 7 дней (в миллисекундах)
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60  * 1000);
  //Создаем массивы, в которых будут содержаться названия дней и месяцев
    dayNames = ['Понедельник', 'Вторник', 'Среду', 'Четверг', 'Пятницу', 'Субботу', 'Воскресенье'];
    monthNames = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
  //Собираем фрагменты даты, которые будут отображаться на странице
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();
  //Создаем сообщение
    expiryMsg = 'Акция завершается в';
    expiryMsg += day + '<br>(' + date + '' + month + '' + year + ')';
    return expiryMsg;
  }
  
  today = new Date(); //Записываем сегодняшнюю дату в переменную
  elEnds = document.getElementById('offerEnds'); //Получаем элемент offerEnds
  elEnds.innerHTML  = offerExpires(today); //Добавляем сообщение об истечении акции
  
//Завершаем выражение функции, вызванной сразу после создания
}());  

