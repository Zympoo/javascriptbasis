// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const boxen = document.querySelectorAll('.kleur-box')
function kleurenBox(kleur){
    boxen.forEach(box => {
        box.style.backgroundColor = kleur;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('ks_red').addEventListener('click', () => {kleurenBox(("red"))});
    document.getElementById('ks_blue').addEventListener('click', () => {kleurenBox(("blue"))});
    document.getElementById('ks_green').addEventListener('click', () => {kleurenBox(("green"))});
});