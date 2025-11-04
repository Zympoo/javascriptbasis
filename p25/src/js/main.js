//import van onze custom css
import '../scss/styles.scss'

//import al bootstrap zijn js
import * as bootstrap from 'bootstrap'

//eigen js
function maakWelkomsBericht(naam, leeftijd) {
    const inputNaam = naam;
    const inputLeeftijd = leeftijd;

    return `Welkom ${inputNaam}, je bent ${inputLeeftijd} jaar oud.`
}
function handleScope() {
    const inpNaam = document.getElementById("fr_inputName");
    const inpLeeftijd = document.getElementById("fr_inputAge");
    const out = document.getElementById("fr_text");

    const resultaat = maakWelkomsBericht(inpNaam.value.trim(), inpLeeftijd.value.trim());

    out.className = "alert alert-success mt-3 mb-2";
    out.textContent = resultaat;
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("fr_btn");
    btn.addEventListener("click", handleScope);
})