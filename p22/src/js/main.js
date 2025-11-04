//import van onze custom css
import '../scss/styles.scss'

//import al bootstrap zijn js
import * as bootstrap from 'bootstrap'

//eigen js
function bepaalFruitEmoji(fruit) {
    const input = fruit.toLowerCase()

    if (input === "appel") return { text: "Je koos appel", emoji: "🍎" };
    if (input === "banaan") return { text: "Je koos banaan", emoji: "🍌" };

    return { text: "Waarschuwing", emoji: "❓" };
}
function toonFruitEmoji() {
    const inp = document.getElementById("fr_input");
    const out = document.getElementById("fr_text");
    const box = document.getElementById("fr_box");

    const waarde = inp.value.trim();

    if (!waarde) {
        out.className = "alert alert-warning mt-3 mb-2";
        out.textContent = "Waarschuwing";
        box.textContent = "❓";
        return;
    }

    const resultaat = bepaalFruitEmoji(waarde);

    out.className = "alert alert-success mt-3 mb-2";
    out.textContent = resultaat.text;
    box.textContent = resultaat.emoji;
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("fr_btn");
    btn.addEventListener("click", toonFruitEmoji)
})