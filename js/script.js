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
//     prr,
//     start,
//     rememberMyFilms,
//     writeYourGenres,
//     showMyDB
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


// personalMovieDB.prr();
// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB();


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


// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function(){
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

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


// const arr = [2, 13, 26, 8, 10];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b){
//     return a - b;
// }

// // arr[99] = 0; //вказати позицію в масиві
// console.log(arr.length); вказує останню позицію в масиві +1
// // console.log(arr); 

// arr.forEach(function(item, i, arr){ // item - перемінна, і - ключ масива, массив до якого звертаємося
//     console.log(`${i}: ${item}   внутри массива ${arr}`);
// });




// arr.pop(); //удаляє останній елемент масиву
// arr.push(10); //додає до кінця масиву

// console.log(arr);

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt('', '');
// const products = str.split(", "); // робить масив з строки при розділенні ", "
// products.sort(); 
// console.log(products.join(';')); // робить строку і додає";"


// let stroka = "aaa bbb ccc"
// console.log(stroka.slice(-7, -4));

// let data = '2025-12-31'
// let date = data.split("-");
// date.sort(ppp)
// function ppp (a, b){
//     return a - b;
// }
// let dataa = date.join('/');
// console.log(dataa);


// let a = 5, 
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // при при присвоєнні об'єкту, передаються не дані а ссилка на об'єкт
// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy (mainObj) {  // функція, яка робить копію об'єкта і вводить нові дані
//     let objCopy = {};
//     let key;
//     for (key in mainObj){
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// } 

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;
// console.log(add);
// console.log(clone);

// console.log(Object.assign({}, add)); // з'єднати два об'єкти. перший в дужках куда вставити, другий в дужках - шо вставити.


// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'sdsdsds'
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];
// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b'];
// const newAarray = [...array];

// console.log(newAarray);

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};
// newObj.one = 3;
// console.log(q);
// console.log(newObj);

// let str = "some";
// let strObj = new String(str);

// // console.log(typeof(str));
// // console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function(){
//         console.log('Hello');
//     }
// };

// const john =  Object.create(soldier); 

// Object.setPrototypeOf(john, soldier);
// john.sayHello();




let numberOfFilms;


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    prr,
    toggleVisibleMyDB,
    start,
    rememberMyFilms,
    writeYourGenres,
    showMyDB
};

function toggleVisibleMyDB () {
    if (personalMovieDB.privat == false) {
        personalMovieDB.privat = true;
    } else  {
        personalMovieDB.privat = false;
    }
    
}

function rememberMyFilms(){
    for(let i = 0; i < 1; i++) {
        const a = prompt('the one of the last watching film?', ''),
            b = prompt('what mark can you give to film?');
        if (a != null && b != null && a !='' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        }else{
            console.log('error');
            i--;
        }
    }
}

function showMyDB () {
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    } 
}


function writeYourGenres () {
    for(let i = 0; i < 3; i++) {
        let a = prompt(`your favorite gener? № ${i + 1}` , "");
        while (a == null || a == '') {
            a = prompt (`your favorite gener? № ${i + 1}` , "");
        }
        personalMovieDB.genres[i] = a;
    }
    personalMovieDB.genres.forEach(function(item, i){
        console.log(`любимий жанр ${i+1} це ${item}`);
    });
}

function start() {

    numberOfFilms = +prompt('how much films you watched already?', '');
    personalMovieDB.count = numberOfFilms;

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('how much films you watched already?', '');
        personalMovieDB.count = numberOfFilms;
    }
}

function prr(){
        let question = prompt('do you want to show your info?', '');
        if(question == '' || question == null || question == "no"){
            question = true;
        } else {
            question = false;
        }
        personalMovieDB.privat = question;
}


personalMovieDB.prr();
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
