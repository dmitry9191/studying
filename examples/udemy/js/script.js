'use strict';

let numberOfFilms;

const personalMovieDB = {
    
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    
    start() {
        numberOfFilms = +prompt('How many films did you see?', '');
    
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('How many films did you see?', '');
        }
        this.count = numberOfFilms;
    },

    rememberMyFilms() {
        for (let i = 1; i <= 2; i++) {
    
            const film = prompt('One of the last film you watched', ''),
                  filmScore = prompt('What is the score you estimate this film?', '');
        
            if (film != '' && filmScore != '' && film.length < 50 && film != null && filmScore != null) {
                this.movies[film] = filmScore;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
               
        }
    },

    detectPersonalLevel() {
    
        if (this.count < 10) {
            alert('Too less films watched');
        } else if (10 <= this.count && this.count < 30) {
            alert('You are a classical watchman');
        } else {
            alert('You are wannabe');
        }
         
    },

    showMyDB() {
        if (this.privat === false) {
            console.log(this);
        } else {
            return;
        }
    },

    toggleVisibleMyDB() {
        if (this.privat === false) {
            this.privat = true;
        } else {
            this.privat = false;
        }
    },

    writeYourGenres() {
        for (let i = 0; i < 3; i++) {
            const yourGenre = prompt(`Your favourite genre under the number ${i + 1}:`, '');
            if (yourGenre == null || yourGenre == '') {
                i--;
                continue;
            }
            this.genres[i] = yourGenre;
        }
        
        this.genres.forEach(function(elem, i, arr) {
            console.log(`Favourite genre ${i + 1} is ${arr[i]}`);
        });
    }

};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();

console.log(personalMovieDB); 
