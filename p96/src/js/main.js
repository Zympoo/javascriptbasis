// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
function showBOM() {
    let touchDevice;
    let schermType;
    let os;

    touchDevice = navigator.maxTouchPoints > 0
    schermType =
        screen.width < 768 ? "Mobiel" :
        screen.width < 1024 ? "Tablet" :
            "Desktop";
    os =
        navigator.userAgent.includes("Windows") ? "Windows" :
        navigator.userAgent.includes("Mac") ? "Mac" :
        navigator.userAgent.includes("Linux") ? "Linux" :
            "Andere";

    const data = [
        `📡 Online: ${navigator.onLine ? "✅" : "⛔"}`,
        `🪟 Touch Device: ${touchDevice ? "✅" : "⛔"} `,
        `🪟 Schermtype: ${schermType}`,
        `🖥️ OS: ${os}`,
        `💬 Browser taal: ${navigator.language}`,
    ];

    document.getElementById("dc_list").innerHTML =
        data.map(item => `<li class="list-group-item">${item}</li>`).join("");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dc_btn")
        ?.addEventListener("click", showBOM);
});