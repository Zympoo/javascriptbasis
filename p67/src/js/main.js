// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const input = document.getElementById('em_input');
function checkMailInput(){
    const mailAdres = input.value.trim();
    const out = document.getElementById('em_preview');
    let valid;

    if(mailAdres.includes("@") && mailAdres.includes(".", mailAdres.indexOf('@')+1) && !mailAdres.includes(" ")){
        out.textContent = "✓ geldig";
        valid = true;
    }
    else{
        out.textContent = "✗ ongeldig";
        valid = false
    }

    return valid;
}
function handleSubmit(event){
    event.preventDefault();

    const out = document.getElementById('em_status');

    if(checkMailInput()){
        out.textContent = "Geldig e-mailadres"
        out.classList = "alert alert-success mt-3 mb-0"
    }
    else{
        out.textContent = "Ongeldig e-mailadres";
        out.classList = "alert alert-danger mt-3 mb-0"
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('em_input').addEventListener('change', checkMailInput);
    document.getElementById('em_form').addEventListener('submit', handleSubmit);
});