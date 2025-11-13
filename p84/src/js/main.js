// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const producten = []

function Product(naam, prijs){
    this.naam = naam
    this.prijs = prijs
    this.label = function() {
        return `${this.naam} — €${(this.prijs).toFixed(2)}`
    }
}

function addProduct(){
    const naam = document.getElementById('prod_name').value.trim();
    const prijs = Number(document.getElementById('prod_price').value);
    const lijst = document.getElementById('prod_list');

    if(!naam || !prijs) return;

    const product = new Product(naam, prijs);
    producten.push(product);

    lijst.innerHTML = producten
        .map(p => `<li class="list-group-item">${p.label()}</li>`)
        .join("");
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('prod_btn')?.addEventListener('click', () => {addProduct()});
})