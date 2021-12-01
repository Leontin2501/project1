'use strict';

const numberOfFilms = +prompt('how much films you watched already?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a  = prompt('the one of the last watching film?', ''),
    b = prompt('what mark can you give to film?'),
    c  = prompt('the one of the last watching film?', ''),
    d = prompt('what mark can you give to film?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



