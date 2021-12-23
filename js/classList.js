'use strict';

                    // 1-2 уроки

// const btns = document.querySelectorAll('button'),
//       wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);

// console.log(btns[0].classList.item(1));

// console.log(btns[1].classList.add('red'));

// // console.log(btns[0].classList.remove('blue'));

// // console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

// btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // }else {
    //     btns[1].classList.remove('red');
    // }

//     btns[1].classList.toggle('red');
// });

// wrapper.addEventListener('click', (e) => {
//     if (e.target && e.target.classList.contains('blue')) {
//         console.log('Hello');
//     }
// });

// wrapper.addEventListener('click', (e) => {
//     if (e.target && e.target.tagName == "BUTTON") {
//         console.log('Hello');
//     }
// });

// wrapper.addEventListener('click', (e) => {
//     if (e.target && e.target.matches ("button.red")) {
//         console.log('Hello');
//     }
// });

// btns.forEach(btn =>{
//     btn.addEventListener('click',() => {
//         console.log('Hello');
//     });
// });

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);



                    // 3 урок (создать таби є окремо)
                    // 4 урок (сет інтервал, чет таймаут)
                    


// const btn = document.querySelector('.btn');
// let timerID,
//     i = 0;

// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame () {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//         }
//     }
// }

// btn.addEventListener('click', myAnimation);




// function logger () {
//     if (i === 3){
//         clearInterval(timerID);
//     }
//     console.log('text');
//     i++;
// }

// let id = setTimeout (function log(){
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);

                        // урок 5 (робота з датами)
                    
// const now = new Date();
// // new Date.parse('2020-05-01');

// console.log(now.setHours(18));
// console.log(now);

// // console.log(now.getFullYear());
// // console.log(now.getMonth());
// // console.log(now.getDate());
// // console.log(now.getHours());
// // console.log(now.getUTCHours());


// // console.log(now.getTimezoneOffset());

// // console.log(now.getTime());

// let start = new Date ();
// for (let i = 0; i < 100000; i++) {
//     let some = i ** 3;
// }

// let end = new Date();

// alert(`цикл отроботал за ${end - start} миллисекунд`);


                                  // урок 6 (таймер окремо в Фуд)
                                  // урок 7 (параметри документа, окна, и робота с ними)

// const box = document.querySelector('.box'),
//     btn = document.querySelector('button');

// const width = box.scrollWidth;
// const height = box.scrollHeight;


// btn.addEventListener('click', () => {
//    box.classList.toggle('box1');
// });


// const but = document.querySelector('.but');

// but.addEventListener('click', () =>{
//     window.scrollTo(0, 0);
//     box.scrollTo(0, 0);
// });

// box.addEventListener('scroll', () => {
//     if (box.scrollTop > 10){
//         but.style.display = 'block';
//         } else {
//             but.style.display = 'none';
            
//         }
        
// });
// document.addEventListener('scroll', () => {
//     if (document.documentElement.scrollTop > 10){
//         but.style.display = 'block';
//         } else {
//             but.style.display = 'none';
            
//         }
        
// });

                        // 8-9 урок this

// const btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     this.style.backgroundColor = 'red';
// });

// const obj = {
//     num: 5,
//     sayNumber: function (){
//         const say = () => { 
//             console.log(this.num);
//         };

//         say();
//     }
// };

// obj.sayNumber();

// const double = (a) => a*2;

// console.log(double(4));



                        // 10 урок класи в ЕС6

// class Rectangle {
//     constructor (height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }

// class ColoredRectangWidthText extends Rectangle {
//     constructor (height, width, text, bgColor) {
//         super(height, width);
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showMyProps(){
//         console.log(`Text: ${this.text}, color: ${this.bgColor}`);
//     }
// }

// const div = new ColoredRectangWidthText(25, 10, 'Hello world', 'red');

// div.showMyProps();
// console.log(div.calcArea());


// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log((long.calcArea()));

        // урок 11 (практика класів)
        // урок 12 (rest оператор и параметр по умолчанию)


// const log = function (a, b, ...rest) {
//     console.log(a, b, rest);
// };

// log('basic', 'rest', 'operator', 'usage');

// function calcOrDouble(number, basis = 2) {
//     console.log(number * basis);
// }

// calcOrDouble(3);


            //блок 4 урок 1 (мамп)
            // урок 2 (JSON)

// const persone = {
//     name: 'Alex',
//     tel: '+380502838877',
//     parents: {
//         mom: 'Olga',
//         dad: 'Mile'
//     }
// };

// const clone = JSON.parse(JSON.stringify(persone));

// clone.parents.mom = 'Ann';
// console.log(persone);
// console.log(clone);

            // урок 3 (AJAX)

// const inputUAH = document.querySelector('#UAH'),
//       inputUSD = document.querySelector('#USD');

// inputUAH.addEventListener('input', () => {
//     const request = new XMLHttpRequest();

//     request.open('GET', 'js/current.json');  //method ('GET or POST'), url, async, login, password;
//     request.setRequestHeader('Content-type', 'application/json; chatset=utf-8');
//     request.send();

//     request.addEventListener('readystatechange' , () => {
//         if (request.readyState === 4 && request.status === 200){
//             console.log(request.response);
//             const data = JSON.parse(request.response);
//             inputUSD.value = (+inputUAH.value / data.curent.usd).toFixed(2);
//         } else {
//             inputUSD.value = "Error";
//         }
//     });


//     //status
//     //statusText
//     //response
//     //readyState


// });

            // урок 4 (spinner and practice)
            // урок 5 (Promise ES6)

// console.log('Zapros');

// const req = new Promise(function(resolve, reject){  //resolve, reject
//     setTimeout(() => {
//         console.log('podgotovka');
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
    
//         resolve(product);
//     }, 2000);
// });

// req.then((product) =>{
//     setTimeout(() => {
//         product.status = 'ordered';
//         console.log(product); 
//        }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.error('error');
// }).finally(() => {
//     console.log("finally");
// });



// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), time);
//     });
// };

// test(1000).then(() => console.log('1000 ms'));

// test(2000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('all');
// });

// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log('all');
// });


            // урок 6 (Fech API (food))

    








