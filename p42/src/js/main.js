// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const htmlElement = document.documentElement;
const bodyElement = document.body;
function veranderAchtergrondDonker() {
    htmlElement.style.background = "#212529";
    htmlElement.style.color = "#fff";

    bodyElement.style.background = "#212529";
    bodyElement.style.color = "#fff";
}
function veranderAchtergrondLicht(){
    htmlElement.style.background = "#fff";
    htmlElement.style.color = "#212529";

    bodyElement.style.background = "#fff";
    bodyElement.style.color = "#212529";
}

function toonFeedback(tekst) {
    const out = document.getElementById("dm_status");
    out.className = "alert alert-success mb-0";
    out.textContent = tekst;
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dm_on")
        ?.addEventListener("click", () => {
            veranderAchtergrondDonker();
            toonFeedback("Donker");
        });

    document.getElementById("dm_off")
        ?.addEventListener("click", () => {
            veranderAchtergrondLicht();
            toonFeedback("Licht");
        });
});