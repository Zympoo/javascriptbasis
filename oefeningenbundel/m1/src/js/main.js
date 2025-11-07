// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const out = document.getElementById('m1_out')
const inpA = document.getElementById('m1_a');
const inpB = document.getElementById('m1_b');
function optellen(){
    const num1 = Number(inpA.value);
    const num2 = Number(inpB.value);
    return num1 + num2;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('m1_btn').addEventListener('click', () => {
        out.classList = "alert alert-success mb-0"
        out.innerHTML = `${Number(inpA.value)} + ${Number(inpB.value)} = ${optellen()}`
    })
})