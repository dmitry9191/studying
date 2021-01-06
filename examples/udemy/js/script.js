'use strict';

let numberOfFilms;

const personalMovieDB = {
    
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

start();
rememberMyFilms();
detectPersonalLevel();
showMyDB(personalMovieDB.privat);
writeYourGenres();

function start() {
    numberOfFilms = +prompt('How many films did you see?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films did you see?', '');
    }
}

function rememberMyFilms() {
    for (let i = 1; i <= 2; i++) {

        const film = prompt('One of the last film you watched', ''),
              filmScore = prompt('What is the score you estimate this film?', '');
    
        if (film != '' && filmScore != '' && film.length < 50 && film != null && filmScore != null) {
            personalMovieDB.movies[film] = filmScore;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
           
    }
}

function detectPersonalLevel() {
    
    if (personalMovieDB.count < 10) {
        alert('Too less films watched');
    } else if (10 <= personalMovieDB.count && personalMovieDB.count < 30) {
        alert('You are a classical watchman');
    } else {
        alert('You are wannabe');
    }
     
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } else {
        return;
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        const yourGenre = prompt(`Your favourite genre under the number ${i + 1}:`, '');
        personalMovieDB.genres[i] = yourGenre;
    }
}

console.log(personalMovieDB); 
