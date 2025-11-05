//import van onze custom css
import '../scss/styles.scss'

//import al bootstrap zijn js
import * as bootstrap from 'bootstrap'

//eigen js
const items = [];
const input = document.getElementById('fs_text');
const lijst = document.getElementById('fs_results');
function toevoegenLijst(items){
    return items.map(item => `<li class="list-group-item">${item}</li>`).join("");
}
function verwijderenLijst(){
    if(items.length === 5){
        items.splice(0,1);
    }
}
function toUpper(string){
    items.push(string.toUpperCase());
}
function toLower(string){
    items.push(string.toLowerCase());
}
function capitalize(string){
    items.push(string.charAt(0).toUpperCase() + string.slice(1));
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fs_upper') ?.addEventListener('click', () => {
        verwijderenLijst();
        toUpper(input.value);
        lijst.innerHTML = toevoegenLijst(items);
    });
    document.getElementById('fs_lower') ?.addEventListener('click', () => {
        verwijderenLijst();
        toLower(input.value);
        lijst.innerHTML = toevoegenLijst(items);
    });
    document.getElementById('fs_cap') ?.addEventListener('click', () => {
        verwijderenLijst();
        capitalize(input.value);
        lijst.innerHTML = toevoegenLijst(items);
    });
})