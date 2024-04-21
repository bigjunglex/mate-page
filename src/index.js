import './style.css';
import aboutPage from './pages/about.js';
import homePage from './pages/home.js';
import menuPage from './pages/menu.js';

const contentContainer = document.querySelector('#content');
const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const about = document.querySelector('#about');



home.addEventListener('click', () => {
    console.log('HOME PAGE')
    homePage(contentContainer);
    menu.classList.remove('disabled');
    about.classList.remove('disabled');
    home.classList.add('disabled');
})
menu.addEventListener('click', () => {
    console.log('MENY PAGE')
    menuPage(contentContainer);
    home.classList.remove('disabled');
    about.classList.remove('disabled');
    menu.classList.add('disabled');
})
about.addEventListener('click', () => {
    console.log('ABOUT PAGE')
    aboutPage(contentContainer);
    menu.classList.remove('disabled');
    home.classList.remove('disabled');
    about.classList.add('disabled');
})



homePage(contentContainer);

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
document.querySelector("h1").onmouseover = event => {
    let iterations = 0;
    const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter,index) => {
        if(index < iterations) {
            return event.target.dataset.value[index];
        }
            return letters[Math.floor(Math.random() * 26)]
        })
    .join("");
        if(iterations >= event.target.dataset.value.length) clearInterval(interval)
        iterations += 1 ;
    }, 30);
}



// let img = document.createElement('img');
// img.src = treeImg;
// console.log('imported', treeImg);

// contentContainer.appendChild(img);
