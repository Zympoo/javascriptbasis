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
        const [userRes, postsRes] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users/1"),
            fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
        ]);
        if (!userRes.ok || !postsRes.ok) throw new Error("API fout");
        const user = await userRes.json();
        const posts = await postsRes.json();
        out.innerHTML = `<div class="alert alert-success">
👤                          <strong>${user.name}</strong> (${user.email})
                         </div>
                         <h6>📬 Laatste posts:</h6>
                         <ul class="list-group">
                         ${posts.slice(0, 3).map(p => `<li class="list-groupitem">${p.title}</li>`).join("")}
                         </ul>`;
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
