//import van onze custom css
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

//eigen js
let counterEnter = 0;
let counterEscape = 0;
let counterSpace = 0;
let counterArrow = 0;

function m10_updateCounters() {
    const outEnterCount = document.getElementById('m10_enter_count')
    const outEscapeCount = document.getElementById('m10_escape_count')
    const outSpaceCount = document.getElementById('m10_space_count')
    const outArrowCount = document.getElementById('m10_arrow_count')

    outEnterCount.textContent = counterEnter;
    outEscapeCount.textContent = counterEscape;
    outSpaceCount.textContent = counterSpace;
    outArrowCount.textContent = counterArrow;
}
function m10_updateDisplay(key_value, key_code, ctrlKey, altKey, shiftKey) {
    let output = "";

    const outKeyCode = document.getElementById('m10_key_code')
    const outKeyValue = document.getElementById('m10_key_value')
    const outModifiers = document.getElementById('m10_modifiers')

    outKeyCode.textContent = key_code
    outKeyValue.textContent = key_value

    if (ctrlKey) {
        output = "Ctrl ingedrukt"
    } else if (altKey) {
        output = "Alt ingedrukt"
    } else if (shiftKey) {
        output = "Shift ingedrukt"
    } else {
        output = "Geen modifier keys ingedrukt"
    }

    outModifiers.textContent = output
}
function m10_clearStats() {
    counterEnter = 0;
    counterEscape = 0;
    counterSpace = 0;
    counterArrow = 0;
    m10_updateCounters();
}
function m10_checkShortcut(ctrlKey, shiftKey, key_value) {
    const switchbox = document.getElementById('m10_shortcut_mode');
    const out = document.getElementById('m10_shortcut_status');
    if(switchbox.checked){
        if(ctrlKey && !shiftKey && key_value === "s") {
            out.innerHTML = "Sneltoets gedetecteerd: Ctrl + S (Opslaan)"
        }
        else if(ctrlKey && !shiftKey && key_value === "p") {
            out.innerHTML = "Sneltoets gedetecteerd: Ctrl + P (Printen)"
        }
        else if(ctrlKey && shiftKey && key_value === "n") {
            out.innerHTML = "Sneltoets gedetecteerd: Ctrl + Shift + N (Nieuw venster)"
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('m10_reset_stats')?.addEventListener('click', () => {
        m10_clearStats()
    })
    document.body.addEventListener('keydown', (e) => {
        const key_value = e.key
        const key_code = e.code
        const ctrlKey = e.ctrlKey
        const altKey = e.altKey
        const shiftKey = e.shiftKey

        if (key_value === "Enter") counterEnter++;
        if (key_value === " ") counterSpace++;
        if (key_value === "Escape") counterEscape++;
        if (key_value === "ArrowLeft" || key_value === "ArrowRight" ||
            key_value === "ArrowUp" || key_value === "ArrowDown") counterArrow++;

        e.preventDefault()
        m10_updateDisplay(key_value, key_code, ctrlKey, altKey, shiftKey);
        m10_updateCounters();
        m10_checkShortcut(ctrlKey, shiftKey, key_value.toLowerCase());
    })
})