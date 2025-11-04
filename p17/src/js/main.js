//import van onze custom css
import '../scss/styles.scss'

//import al bootstrap zijn js
import * as bootstrap from 'bootstrap'

//eigen js
function toonBericht(){
    const binnen = "Ik leef binnen de functie";
    function inner(){
        return `Inner ziet: ${binnen}`;
    }
    return inner();
}
function handleScope(){
    const output = document.getElementById("sc_output")

    const bericht = toonBericht();
    output.className = "alert alert-success mt-3 mb-0"
    output.textContent = bericht;
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("sc_btn");
    btn.addEventListener("click", handleScope);
});