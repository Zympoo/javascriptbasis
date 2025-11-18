// Import our custom CSS
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

//eigen js
// Imports van onze modules
import { fetchProducts } from "./services/apiService.js";
import { productCard } from "./components/productCard.js";
// DOM
document.addEventListener("DOMContentLoaded", async () => {
    const out = document.getElementById("mod_out");
    out.textContent = "⏳ Laden...";
    try {
        const p = await fetchProducts();
        out.innerHTML = p.map(productCard).join("");
    } catch {
        out.innerHTML = `<div class="alert alert-danger">❌ Kon product niet laden</div>`;
    }
});
