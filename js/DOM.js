'use strict';

// const box = document.getElementById('box');

// console.log(box);

// const btns = document.getElementsByTagName('button');

// console.log(btns[0]);

// const circles = document.getElementsByClassName('circle');
// console.log(circles);

// const hearts = document.querySelectorAll('.heart');
// console.log(hearts);

// hearts.forEach(item =>{
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');
    

// box.style.backgroundColor = 'red';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'blue';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'black';
// }

hearts.forEach(item =>{
    item.style.backgroundColor = 'black';
});

const div = document.createElement('div');
// const text = document.createTextNode('Туй бов я');

div.classList.add('black');

wrapper.append(div);



// hearts[0].before(div);


// hearts[0].after(div);

// circles[0].remove();

// wrapper.removeChild(hearts[1]);

hearts[0].replaceWith(circles[0]);

// wrapper.replaceChild(circles[0], hearts[0]);



// wrapper.appendChild(div);

// wrapper.insertBefore(div, hearts[1]);

div.innerHTML = '<h1>pizdec</h1>';

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>')

// div.textContent = "hello";

