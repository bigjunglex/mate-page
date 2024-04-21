import treeImg from "../img/mate_tree.jpg";

export default function homePage(container) {
    container.innerHTML = '';
    const img = document.createElement('img');
    const welcome = document.createElement('h1');
    const foreword = document.createElement('h4');
    const learnMore = document.createElement('button');

    
    img.src = treeImg;
    welcome.innerHTML = 'Welcome To Mate World';
    welcome.dataset.value = 'Welcome To Mate World';
    foreword.textContent = 'The history of the yerba mate begins with the Guarani people. In addition to being part of their diet, this medicinal plant was also used as offerings during ritual ceremonies. Story of mate speaks of a gift from the Gods.';
    learnMore.classList.add('learnMore');
    learnMore.innerHTML = '&#x1F525; Learn More &#x1F525;';

    container.appendChild(welcome);
    container.appendChild(foreword)
    container.appendChild(img)
    container.appendChild(learnMore)

    // meme animation 
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
        iterations += 2 ;
    }, 30);
}


}