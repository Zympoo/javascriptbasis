//import van onze custom css
import '../scss/styles.scss'

//import al bootstrap zijn js
import * as bootstrap from 'bootstrap'

//eigen js
const out = document.getElementById('discount_out')
const inpPrijs = document.getElementById('price')
const inpKorting = document.getElementById('discount')

function berekenenKorting(){
    const prijs = Number(inpPrijs.value).toFixed(2)
    const korting = Number(inpKorting.value)

    return (prijs * (1 - korting / 100)).toFixed(2);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('discount_btn').addEventListener('click', () => {
        out.classList = "alert alert-success mb-0";
        out.innerHTML = `Nieuwe prijs: €${berekenenKorting()} (Korting: ${inpKorting.value}%)`
    })
})