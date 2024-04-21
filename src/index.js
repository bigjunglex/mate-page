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




// let img = document.createElement('img');
// img.src = treeImg;
// console.log('imported', treeImg);

// contentContainer.appendChild(img);
