//import van onze custom css
import '../scss/styles.scss'

//import al bootstrap zijn js
import * as bootstrap from 'bootstrap'

//eigen js
let isEven = num => num % 2 === 0

const verwerkGetal = () => {
    const num = Number(document.getElementById("ev_input").value);
    const out = document.getElementById("ev_out");

    let resultaat = "";

    if (!num) {
        out.className = "alert alert-warning mt-3 mb-0";
        out.textContent = `⚠️ Vul een getal in`;
        return;
    }

    if(isEven(num)) {
        resultaat = `${num} is even`;
        out.className = "alert alert-success mt-3 mb-0";
    }
    else{
        resultaat = `${num} is oneven`;
        out.className = "alert alert-danger mt-3 mb-0";
    }

    out.textContent = `Resultaat: ${resultaat}`;
};

// Event
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ev_btn")
        ?.addEventListener("click", verwerkGetal);
});