import './style.css';
// import treeImg from "./img/mate_tree.jpg";
import aboutPage from './pages/about.js';
import homePage from './pages/home.js';
import menuPage from './pages/menu.js';

const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const about = document.querySelector('#about');


home.addEventListener('click', () => {
    console.log('HOME PAGE')
    homePage();
})
menu.addEventListener('click', () => {
    console.log('MENY PAGE')
    menuPage();
})
about.addEventListener('click', () => {
    console.log('ABOUT PAGE')
    aboutPage();
})



homePage()



// const contentContainer = document.querySelector('#content');

// let img = document.createElement('img');
// img.src = treeImg;
// console.log('imported', treeImg);

// contentContainer.appendChild(img);
