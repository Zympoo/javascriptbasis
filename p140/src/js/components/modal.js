export function modalList(p){
    return `
        <div class="card mb-2 shadow-sm">
            <div class="card-body">
                <h5>${p.name}</h5>
                <p class="text-muted">€${p.price}</p>
            </div>
        </div>
`;
}