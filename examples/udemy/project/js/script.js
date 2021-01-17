/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adversity = document.querySelectorAll('.promo__adv img'),
          promoBg = document.querySelector('.promo__bg'),
          checkbox = document.querySelector('.add input[type="checkbox"]'),
          genre = document.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list');
    
    adversity.forEach(item => item.remove());
    
    genre.textContent = 'драма';
    
    promoBg.style.backgroundImage = 'url("img/bg.jpg")';
    
    document.querySelector('.add button').addEventListener('click', addFilm);
    
    getSort();
    
    function addFilm(e) {
        
        e.preventDefault();
        const input = document.querySelector('.adding__input');
    
        if (input.value) {
            if (input.value.length > 21) {
                input.value = cutName(input.value);
            }
            
            movieDB.movies.push(input.value);
            getSort();
            check(checkbox);
        }
    
    }
    
    function getSort() {
        movieList.innerHTML = '';
        movieDB.movies.sort();
        movieDB.movies.forEach((film, i) => {
            movieList.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
        console.log(movieDB.movies);
        document.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click', () => {
                item.parentElement.remove();
                movieDB.movies.splice(i, 1);
    
                getSort();
            });
        });
    
    }
    
    function cutName(inputValue) {
        const name = inputValue.slice(0, 22);
        return `${name}...`;
    }
    
    function check(elem) {
        if (elem.checked) {
            console.log('Добавляем любимый фильм');
        }
    }
});
