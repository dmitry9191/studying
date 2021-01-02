'use strict';

const numberOfFilms = +prompt('How many films did you see?', '');

const film = prompt('One of the last watched film', ''),
      filmScore = prompt('What is the score you estimate this film?', ''),
      filmB = prompt('One of the last watched film', ''),
      filmScoreB = prompt('What is the score you estimate this film?', '');

const personalMovieDB = {
    
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

personalMovieDB.movies[film] = filmScore;
personalMovieDB.movies[filmB] = filmScoreB;
console.log(personalMovieDB);
 