//import van onze custom css
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

//eigen js
let filter = [];
class Product{
    constructor(name, category, price, description){
        this.name = name;
        this.category = category;
        this.price = price;
        this.description = description;
    }
}
const allProducts = [
    new Product(
        'JavaScript Basis',
        'books',
        29.99,
        'Boek voor absolute beginners in JavaScript.'
    ),
    new Product(
        'Geavanceerde JavaScript Patterns',
        'books',
        49.5,
        'Voor ontwikkelaars die hun JS kennis willen verdiepen.'
    ),
    new Product(
        'Online cursus HTML en CSS',
        'courses',
        39,
        'Stapsgewijze videoreeks om webpagina s te leren bouwen.'
    ),
    new Product(
        'Full Stack traject',
        'courses',
        99,
        'Een traject dat front end en back end combineert.'
    ),
    new Product(
        'Task Manager App',
        'software',
        15,
        'Eenvoudige tool om dagelijkse taken bij te houden.'
    ),
    new Product(
        'Budget Planner',
        'software',
        9.99,
        'Software om inkomsten en uitgaven overzichtelijk te beheren.'
    )
];

function gevondenCounter(){
    const out = document.getElementById('m13_status')

    if(filter.length > 0){
        out.innerHTML = `Gevonden producten: ${filter.length}`;
        out.classList = "alert alert-success mb-3"
    }
    else{
        out.innerHTML = `Geen producten gevonden met deze filter.`
        out.classList = "alert alert-warning mb-3"
    }
}
function uitvoerFilter(category, price){
    filter = allProducts.filter(product => (product.category === category && product.price <= price) || product.price <= price);
    aanmakenLijst();
}
function aanmakenLijst() {
    const list = document.getElementById('m13_products');
    if (filter.length === 0) {
        list.innerHTML = allProducts.map(product => {
            return `
                <div class="col-md-6 col-lg-4">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <h5 class="card-title mb-0">${product.name}</h5>
                                <span class="badge bg-secondary">${product.category}</span>
                            </div>
                            <p class="card-text mb-2">${product.description}</p>
                            <p class="mt-auto fw-bold">€${product.price.toFixed(2)}</p>
                        </div>
                    </div>
                </div>`;
        }).join('');
    }
    else{
        list.innerHTML = filter.map(product => {
            return `
                <div class="col-md-6 col-lg-4">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <h5 class="card-title mb-0">${product.name}</h5>
                                <span class="badge bg-secondary">${product.category}</span>
                            </div>
                            <p class="card-text mb-2">${product.description}</p>
                            <p class="mt-auto fw-bold">€${product.price.toFixed(2)}</p>
                        </div>
                    </div>
                </div>`;
        }).join('');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    aanmakenLijst();
    document.getElementById('m13_filter')?.addEventListener('click', () => {
        const category = document.getElementById('m13_cat').value;
        const price = parseFloat(document.getElementById('m13_max').value);

        uitvoerFilter(category, price);
        gevondenCounter();
    });
});