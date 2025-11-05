//import van onze custom css
import '../scss/styles.scss'

//import al bootstrap zijn js
import * as bootstrap from 'bootstrap'

//eigen js
const inpVoornaam = document.getElementById('tp_first');
const inpAchternaam = document.getElementById('tp_last');
const inpStad = document.getElementById('tp_city');
const out = document.getElementById('tp_preview');

const knopP1 = document.getElementById('tp_p1');
const knopP2 = document.getElementById('tp_p2');

function opmakenZin(){

    const voornaam = inpVoornaam.value;
    const achternaam = inpAchternaam.value;
    const stad = inpStad.value;

    if(knopP1.classList.contains('active')){
        out.innerHTML = `Hallo ${voornaam} ${achternaam} uit ${stad}!`;
    }
    else{
        out.innerHTML = `Hallo ${voornaam} ${achternaam}, je komt uit ${stad}!`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    knopP1 ?.addEventListener('click', () => {
        knopP1.className = 'nav-link active';
        knopP2.className = 'nav-link';
        opmakenZin();

    })
    knopP2 ?.addEventListener('click', () => {
        knopP2.className = 'nav-link active';
        knopP1.className = 'nav-link';
        opmakenZin();
    })
})