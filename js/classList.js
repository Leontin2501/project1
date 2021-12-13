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
                    


const btn = document.querySelector('.btn');
let timerID,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame () {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);




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


                    
                    

