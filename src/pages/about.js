export default function aboutPage(container) {
    container.innerHTML = '';

    const guide = document.createElement('h1');
    const stepsToDrink = document.createElement('ul');
    
    for (let i = 1; i <= 5; i++) {
        const li = document.createElement("li");
        stepsToDrink.appendChild(li);
    }

    guide.textContent = 'Guide';
    stepsToDrink.children[0].textContent = 'Fill your mate gourd with 3/4 of Yerba Mate.';
    stepsToDrink.children[1].textContent = 'Shake your mate and make a “montañita"';
    stepsToDrink.children[2].textContent = 'Pour warm water to soak the dry leaves.';
    stepsToDrink.children[3].textContent = 'Introduce the bombilla in the mate.';
    stepsToDrink.children[4].textContent = 'Serve your first mate.';

    container.appendChild(guide);
    container.appendChild(stepsToDrink);
}
