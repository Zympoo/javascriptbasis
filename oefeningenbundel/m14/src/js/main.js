//import van onze custom css
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import data from "bootstrap/js/src/dom/data";

//eigen js
let personages = []

const input = document.getElementById('m14_search');
const outStatus = document.getElementById('m14_status')

async function loadPersonages(){
    outStatus.classList = "alert alert-secondary mb-3"
    try{
        const res = await fetch("https://rickandmortyapi.com/api/character/?page=1")

        if(!res.ok) throw new Error("Fout laden API")
        const data = await res.json()

        personages = data.results

        uitvoerenFilter()
        input.disabled = false
    }
    catch{
        outStatus.innerHTML = "❌ Fout bij het laden van de personages ❌"
        outStatus.classList = "alert alert-danger mb-3"
    }
}
function uitvoerenFilter(){
    const inputNaam = input.value
    const outCards = document.getElementById('m14_cards')

    const filter = personages.filter(p => p.name.toLowerCase().includes(inputNaam.toLowerCase()));

    if(filter.length === 0){
        outCards.innerHTML = personages.map(p => {
        return `
            <div class="col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm">
                    <img src="${p.image}" class="card-img-top" alt="${p.name}">
                    <div class="card-body">
                        <h5 class="card-title">${p.name}</h5>
                        <p class="card-text mb-1"><strong>Status:</strong> ${p.status}</p>
                        <p class="card-text mb-1"><strong>Soort:</strong> ${p.species}</p>
                        <p class="card-text mb-0"><strong>Locatie:</strong> ${p.location.name}</p>
                    </div>
                </div>
            </div>`
        }).join('')
    }
    else{
        outCards.innerHTML = filter.map(p => {
            return `
            <div class="col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm">
                    <img src="${p.image}" class="card-img-top" alt="${p.name}">
                    <div class="card-body">
                        <h5 class="card-title">${p.name}</h5>
                        <p class="card-text mb-1"><strong>Status:</strong> ${p.status}</p>
                        <p class="card-text mb-1"><strong>Soort:</strong> ${p.species}</p>
                        <p class="card-text mb-0"><strong>Locatie:</strong> ${p.location.name}</p>
                    </div>
                </div>
            </div>`
        }).join('')
    }
    outStatus.classList = "alert alert-success mb-3"
    outStatus.innerHTML = `${outCards.children.length} personages geladen`
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('m14_load')?.addEventListener('click', loadPersonages)
    document.getElementById('m14_search')?.addEventListener('input', uitvoerenFilter)
})

