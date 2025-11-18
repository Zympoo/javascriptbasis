import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import { productCard } from "./components/productCard.js";
import { skeletonCard } from "./components/skeletonCard.js";
import { getLocalProducts } from "./services/productService.js";
import { getRecommendations } from "./services/recommendService.js";
import {saveCart, loadCart, clearCart} from "./utils/storage.js";
import {Product} from "./objects/product.js";
import {modalList} from "./components/modal";

let cart = loadCart();
function updateCartBadge() {
    document.getElementById("cart_badge").textContent = cart.length;
}
async function loadProducts() {
    const cont = document.getElementById("product_list");
    cont.innerHTML = skeletonCard().repeat(4);
    try {
        const data = await getLocalProducts();
        cont.innerHTML = data.map(productCard).join("");
    } catch {
        cont.innerHTML = `<div class="alert alert-danger">❌ Producten konden niet geladen worden</div>`;
    }
}
async function loadRecommendations() {
    const cont = document.getElementById("rec_list");
    cont.innerHTML = skeletonCard().repeat(3);
    try {
        const rec = await getRecommendations();
        cont.innerHTML = rec.slice(0,3)
            .map(r => productCard({name: r.show.name, price: 0}, 0))
            .join("");
    } catch {
        cont.innerHTML = `<div class="alert alert-warning">⚠️ Aanraders niet beschikbaar</div>`;
    }
}

function openModal() {
    const out = document.getElementById('cart_items')
    let totaal = 0;
    document.getElementById('cartModal').style.display = 'flex';
    out.innerHTML = cart.map(modalList).join("")
    cart.forEach((item) => {
        totaal += parseFloat(item.price);
    })
    return totaal;
}
function closeModal() {
    document.getElementById('cartModal').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", async () => {
    updateCartBadge();
    loadProducts();
    loadRecommendations();
    document.getElementById('cart_clear')?.addEventListener('click', () => {
        clearCart();
        cart = [];
        updateCartBadge();
    });
    document.getElementById('cart_close')?.addEventListener('click', closeModal);
    document.body.addEventListener("click", e => {
        if (e.target.classList.contains("add_cart_btn")) {
            const newProduct = new Product(e.target.dataset.name, e.target.dataset.price);
            const outTotaal = document.getElementById('cart_total');

            cart.push(newProduct);
            saveCart(cart);
            updateCartBadge();
            outTotaal.innerHTML = openModal();
        }
    });
});