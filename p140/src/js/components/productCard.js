import {euro} from "../utils/currency";

export function productCard(p, index) {
    return `
        <div class="card mb-2 shadow-sm">
            <div class="card-body">
                <h5>${p.name}</h5>
                <p class="text-muted">${euro(p.price)}</p>
                <button class="btn btn-primary w-100 add_cart_btn" data-name="${p.name}" data-price = "${p.price}" data-idx="${index}">Toevoegen</button>
            </div>
        </div>
`;
}