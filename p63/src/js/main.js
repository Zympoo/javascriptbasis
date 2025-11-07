// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
function toggleDarkMode() {
    const body = document.body
    const out = document.getElementById('dm2_status')
    body.classList.toggle('dark-mode')
    if(body.classList.contains('dark-mode')) {
        out.textContent = 'Dark Mode actief 🌙'
    }
    else{
        out.textContent = 'Light Mode actief ☀️'
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dm2_btn")
        ?.addEventListener("click", toggleDarkMode);
});