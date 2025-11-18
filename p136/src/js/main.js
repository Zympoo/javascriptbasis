// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
// Imports van onze modules
import { fetchUser } from "./services/apiService.js";
import { userCard } from "./components/userCard.js";
import { capitalize } from "./utils/format.js";
// DOM
document.addEventListener("DOMContentLoaded", async () => {
    const out = document.getElementById("mod_out");
    out.textContent = "⏳ Laden...";
    try {
        const user = await fetchUser(1);
        out.innerHTML = userCard(user);
        console.log(capitalize("module systeem actief!"));
    } catch {
        out.innerHTML = `<div class="alert alert-danger">❌ Kon user niet laden</div>`;
    }
});
