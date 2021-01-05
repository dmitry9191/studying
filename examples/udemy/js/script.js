'use strict';

const numberOfFilms = +prompt('How many films did you see?', '');

const personalMovieDB = {
    
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};


for (let i = 1; i <= numberOfFilms; i++) {

    let film = prompt('One of the last watched film', '');
    let filmScore = prompt('What is the score you estimate this film?', '');

    if (!film || !filmScore) {
        alert('you need enter something');
        i--;
        continue;       
    } else if (film.length > 50 || filmScore > 50) {
        i--;
        continue;
    }

    personalMovieDB.movies[film] = filmScore;

}

if (personalMovieDB.count < 10) {
    alert('Too less films watched');
} else if (10 <= personalMovieDB.count && personalMovieDB.count < 30) {
    alert('You are a classical watchman');
} else {
    alert('You are wannabe');
}
 
console.log(personalMovieDB);
