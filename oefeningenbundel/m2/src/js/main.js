//import van onze custom css
import '../scss/styles.scss'

//import al bootstrap zijn js
import * as bootstrap from 'bootstrap'

//eigen js
const input = document.getElementById('m2_c');
const out = document.getElementById('m2_out');
function berekenKelvin(){
    const c = Number(input.value);
    return Number(c + 273.15)
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('m2_btn').addEventListener('click', () => {
        out.classList = "alert alert-success mb-0"
        out.innerHTML = `${Number(input.value)}°C = ${berekenKelvin()} K`;
    });
})