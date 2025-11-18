// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
// ---------------------------------------------------
// Hoofdstuk 25: JSON File Load (Local API Simulator)
// ---------------------------------------------------

function skeletonUI() {
    return `
<div class="mb-2 skeleton" style="height: 25px; width: 60%;"></div>
<div class="mb-2 skeleton" style="height: 18px; width: 90%;"></div>
<div class="mb-2 skeleton" style="height: 18px; width: 80%;"></div>
<div class="mb-2 skeleton" style="height: 18px; width: 70%;"></div>
`;
}

// -------------------------------------------------------
// Hoofdstuk 31: Promise.all + Skeleton Loading
// -------------------------------------------------------
async function loadUserAndPosts() {
    const out = document.getElementById("multi_output");
// skeleton
    out.innerHTML = skeletonUI();
    try {
        const movieRes = await fetch("https://api.tvmaze.com/search/shows?q=star");

        if (!movieRes.ok) throw new Error("API fout");
        const movies = await movieRes.json();
        console.log(movies[0].show.image.medium)
        out.innerHTML = movies.slice(0,3).map(p => `
            <div class="alert alert-success">
                ${p.show.name}
                <p>${p.show.rating.average}</p>
                <img src="${p.show.image?.medium}" alt="">
            </div>`).join("")
    } catch {
        out.innerHTML = `<div class="alert alert-danger">
                            ❌ Kon data niet laden, probeer opnieuw
                         </div>`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("multi_btn")
        ?.addEventListener("click", loadUserAndPosts);
});
