//import van onze custom css
import '../scss/styles.scss'

//import al bootstrap zijn js
import * as bootstrap from 'bootstrap'

//eigen js
function geheimBericht(){
    const secret = "Code unlocked 🔑";
    function leesSecret(){
        return secret;
    }
    return leesSecret();
}
function handleScope(){
    const output = document.getElementById("sc2_output")

    const bericht = geheimBericht();
    output.className = "alert alert-success mt-3 mb-0"
    output.textContent = bericht;
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("sc2_btn");
    btn.addEventListener("click", handleScope);
});