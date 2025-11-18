// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
async function loadUsers() {
    const status = document.getElementById("api_status");
    const list = document.getElementById("api_list");

    try {
        status.className = "alert alert-warning mb-0";
        status.textContent = "⏳ Data laden...";

        const res = await fetch("https://icanhazdadjoke.com/", {
            headers: { "Accept": "application/json" }
        });

        if (!res.ok) throw new Error("Netwerk fout");

        const joke = await res.json();

        status.className = "alert alert-success mb-0";
        status.textContent = ` ${joke.joke}`;

    } catch (err) {
        status.className = "alert alert-danger mb-0";
        status.textContent = "❌ Fout bij laden van data";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("api_btn")
        ?.addEventListener("click", loadUsers);
});