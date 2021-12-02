//'use strict';

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('no');
//         break; 
//     case 100:
//         console.log ('no no');
//         break;
//     case 50:
//         console.log ('super');
//         break;
//     default:
//         console.log ('not now');
//         break;
// }


// let num = 50;

// while (num <=55){
//     console.log (num);
//     num++;
// }

// do {
//     console.log (num);
//     num++;
// }
// while (num < 55);

// for(let i = 1; i < 8; i++){
//     console.log (i);
//     num++;
// }

// console.log(num);


// let num = 3;
// let result = num;
// switch (num) {
//     case 1:
//         console.log ('winter');
//         break;
//     case 2:
//         console.log ('spring');
//         break;
//     case 3:
//         console.log ('summer');
//         break;
//     case 4:
//         console.log ('autumn');
//         break;
// }
// console.log (result);


// const day = 1;
// if(day < 10) {
//     console.log (1);
// } else if(day < 20) {
//     console.log (2);
// } else {
//     console.log(3);
// }

// let month = 3;

// if(month <= 2 || month == 12) {
//     console.log('winter');
// }else if(month >=3 && month <= 5) {
//     console.log('spring');
// }else if(month >= 6 && month <= 8) {
//     console.log('summer');
// }else if(month >= 9 && month <= 11) {
//     console.log('autumn');
// }

// let arr = [2, 5, 3, 9];
// let result;
// alert(result = arr[0] * arr[1] + arr[2] * arr[3]);

// 'use strict';



// const numberOfFilms = prompt('how much films you watched already?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for(let i = 0; i < 1; i++) {
//     const a = prompt('the one of the last watching film?', ''),
//         b = prompt('what mark can you give to film?');
//     if (a != null && b != null && a !='' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     }else{
//         console.log('error');
//         i--;
//     }
// }
// console.log(personalMovieDB);


// for(let i = 0; i < numberOfFilms; i++) {
//     let a = prompt('the one of the last watching film?', '');
//     let b = prompt('what mark can you give to film?');
// personalMovieDB.movies[a] = b;
// }
// console.log(personalMovieDB);




    


// const a  = prompt('the one of the last watching film?', ''),
//     b = prompt('what mark can you give to film?'),
//     c  = prompt('the one of the last watching film?', ''),
//     d = prompt('what mark can you give to film?');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


"use strict";

function showFirstMessage() {
    console.log ('hello world');
}

showFirstMessage();