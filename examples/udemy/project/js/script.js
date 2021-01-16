/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adversity = document.querySelectorAll('.promo__adv img');
adversity.forEach(item => item.remove());

document.querySelector('.promo__genre').textContent = 'драма';

const promoBg = document.querySelector('.promo__bg');

promoBg.style.backgroundImage = 'url("img/bg.jpg")';

const filmList = document.querySelectorAll('.promo__interactive-list .promo__interactive-item');
movieDB.movies.sort();

filmList.forEach((item, i) => {
    item.textContent = `${i + 1}. ${movieDB.movies[i]}`;
    i++;
});

console.log(promoBg);
