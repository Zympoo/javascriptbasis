//import van onze custom css
import '../scss/styles.scss'

//import al bootstrap zijn js
import * as bootstrap from 'bootstrap'

//eigen js
const input = document.getElementById('ig_full')
const out = document.getElementById('ig_out')

function initialenGenerator(){
    const array = input.value.split(' ');
    let arrayString = "";
    for(let stuk in array){
        arrayString += `${array[stuk].charAt(0).toUpperCase()}.`;
    }
    out.textContent = arrayString;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('ig_make') ?.addEventListener('click', () => {initialenGenerator()})
})