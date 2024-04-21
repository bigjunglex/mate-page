import svgOne from '../img/mate-icon1.svg'
import svgTwo from '../img/mate-icon2.svg'


export default function menuPage(container) {
    container.innerHTML = '';
    container.classList.add('menu')

    const menuHeader = document.createElement('h1');
    const cardContainer = document.createElement('div');
    
    
    menuHeader.textContent = "Menu";
    cardContainer.classList.add('cardContainer');
    
    container.appendChild(menuHeader);
    container.appendChild(cardContainer);
    
    
    for (let i = 0; i < 4; i++){
        let div = document.createElement('div');
        div.classList.add('card');
        div.id = `${i}`;
        
        const icon1 = document.createElement('img');
        const icon2 = document.createElement('img');
        const cardButton = document.createElement('button');

        cardButton.innerHTML = '&#x1F525; &#x1F525; &#x1F525;'

        icon1.src = svgOne;
        icon2.src = svgTwo;
        
        (i % 2 === 0) ? div.appendChild(icon2) : div.appendChild(icon1)
        div.appendChild(cardButton)
        cardContainer.appendChild(div);
        

    }


}