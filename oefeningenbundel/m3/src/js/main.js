//import van onze custom css
import '../scss/styles.scss'

//import al bootstrap zijn js
import * as bootstrap from 'bootstrap'

//eigen js
const inputW = document.getElementById('bmi_w');
const inputH = document.getElementById('bmi_h');
const out = document.getElementById('bmi_out');
function berekenMeter(){
    const cm = Number(inputH.value);
    return cm / 100;
}
function berekenBMI(){
    const gewicht = Number(inputW.value);
    return gewicht / (berekenMeter() **2)
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('bmi_btn').addEventListener('click', () => {
        out.classList = "alert alert-success mb-0";
        out.innerHTML = berekenBMI();
    });
})