// Добавление новых элементов к началу и концу списка
var list = document.getElementsByTagName('ul')[0]; // Получаем элемент ul

// Добавление нового элемента к концу списка
var newItemLast = document.createElement('li'); // Создаем элемент
var newTextLast = document.createTextNode('деревенская сметана'); // Создаем текстовое содержимое документа
newItemLast.appendChild(newTextLast); // Добавляем текст в элемент
list.appendChild(newItemLast); // Добавляем элемент в список

// Добавление нового элемента к началу списка 
var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('белокачанная капуста');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild) // Добавляем элемент в начало списка

// Добавляем класс cool ко всем элементам списка
var listItems = document.querySelectorAll('li'); // Все элементы ли
// Перебираем элементы и присваеваем класс 'cool'
for (var i = 0; i < listItems.length; i++) {
	listItems[i].className = 'cool';
} 
var heading = document.querySelector('h2'); // Элемент h2
var headingText = heading.firstChild.nodeValue; // Текст элемента h2
var totalItems = listItems.length; // Количество элементов li
var newHeading = headingText + '<span>' + totalItems + '</span>'; // Контент
heading.innerHTML = newHeading; // Обновляем h2
