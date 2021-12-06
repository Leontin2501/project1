'use strict';

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

// const numberOfFilms = prompt('how much films you watched already?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function showMyDB () {
//     if (personalMovieDB.privat == false){
//         console.log(personalMovieDB);
//     } 
// }

// function writeYourGenres () {
//     for(let i = 0; i < 3; i++) {
//         let a = prompt("your favorite gener?", "");
//         personalMovieDB.genres[i] = a;
//     }
// }

// writeYourGenres();
// showMyDB();





    


// const a  = prompt('the one of the last watching film?', ''),
//     b = prompt('what mark can you give to film?'),
//     c  = prompt('the one of the last watching film?', ''),
//     d = prompt('what mark can you give to film?');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


// "use strict";

// let num = 20;

// function showFirstMessage(test) {
//     console.log (test);
//     num = 10;
// }

// showFirstMessage('hello world');
// console.log(num);

// function calc(a, b) {
//     return ((a + b) * (a + b));
// }
// console.log(calc(4, 3));

// function ret() {
//     let num = 50;
//     return num;
// }

// console.log(ret());


// const calc = (a, b) => a + b; 

// or 

// const calc = (a, b) => {
//     console.log(1);
//     return a + b;
// };

// const str = "test";
// const arr = [1, 2, 4];

// console.log(str.length);
// console.log(arr.length);

// const fruit = "Some fruit i like fruit";
// console.log(fruit.indexOf("fruit"));

// const logg = "hello world";
// console.log(logg.slice(6, 11))


// function qqq (a, b) {
//     let result;
//     result = a % b;
//     if (result == false){
//         return console.log('vse chotko');
//     } else {
//         return console.log('ne chotko');
//     }
// }
// qqq(9, 3);

// const logg = "hello world";
// console.log(logg.slice(6));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));



// let numberOfFilms;


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: {},
// };

// function rememberMyFilms(){
//     for(let i = 0; i < 1; i++) {
//         const a = prompt('the one of the last watching film?', ''),
//             b = prompt('what mark can you give to film?');
//         if (a != null && b != null && a !='' && b != '' && a.length < 50){
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         }else{
//             console.log('error');
//             i--;
//         }
//     }
// }

// function showMyDB () {
//     if (personalMovieDB.privat == false){
//         console.log(personalMovieDB);
//     } 
// }

// function writeYourGenres () {
//     for(let i = 0; i < 3; i++) {
//         let a = prompt(`your favorite gener? № ${i + 1}` , "");
//         personalMovieDB.genres[i] = a;
//     }
// }

// function start() {

//     numberOfFilms = +prompt('how much films you watched already?', '');
//     personalMovieDB.count = numberOfFilms;

//     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt('how much films you watched already?', '');
//         personalMovieDB.count = numberOfFilms;
//     }
// }

// function prr(){
//         let question = prompt('do you want to show your info?', '');
//         if(question == '' || question == null || question == "no"){
//             question = true;
//         } else {
//             question = false;
//         }
//         personalMovieDB.privat = question;
// }


// prr();
// start();
// rememberMyFilms();
// writeYourGenres();
// showMyDB();


// function first (){
//     setTimeout(function(){
//     console.log(1);
//     }, 500);
// }

// function second (){
//     console.log(2);
// }


// first();
// second();

// function learnJS(lang, callback){
//     console.log(`я учу: ${lang}`);
//     callback();
// }

// function done(){
//     console.log('я прошел етот урок');
// }

// learnJS('JavaScript', done);


const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(Object.keys(options).length);

// let counter = 0;
// for (let key in options) { //перебирає об'єкти
//     if (typeof(options[key]) === 'object'){
//         for (let i in options[key]) {
//             console.log(`свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//     console.log(`свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//     }
// }
// console.log(counter);


