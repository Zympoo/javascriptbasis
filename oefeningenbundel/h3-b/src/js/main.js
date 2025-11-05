//import van onze custom css
import '../scss/styles.scss'

//import al bootstrap zijn js
import * as bootstrap from 'bootstrap'

//eigen js
const out = document.getElementById('sm_slug')
const input = document.getElementById('sm_title')
function slugMaker(){
    let tekst =  input.value;
    console.log(tekst)
    return tekst
        .replaceAll("_","-")
        .replaceAll(" ", "-")
        .replaceAll(/[^a-zA-Z0-9<>\S\W]/g, "")
        .trim()
        .toLowerCase();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('sm_title') ?.addEventListener('keyup', () => {
        out.textContent = slugMaker();
    })
});