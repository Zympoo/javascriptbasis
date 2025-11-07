//import van onze custom css
import '../scss/styles.scss'

//import al bootstrap zijn js
import * as bootstrap from 'bootstrap'

//eigen js
const inputW = document.getElementById('bmi2_w');
const inputH = document.getElementById('bmi2_h');
const out = document.getElementById('bmi2_out');
function berekenMeter(){
    const cm = Number(inputH.value);
    return cm / 100;
}
function berekenBMI(){
    const gewicht = Number(inputW.value);
    return (gewicht / (berekenMeter() **2)).toFixed(2);
}
function categorieBepalen(){
    let categorie ="";
    const bmi = berekenBMI();
    if(bmi < 18.5){
        categorie = "Ondergewicht"
        out.classList = "alert alert-primary mb-0"
    }
    else if (bmi >= 18.5 && bmi <= 24.9){
        categorie = "Gezond gewicht"
        out.classList = "alert alert-success mb-0"
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        categorie = "Overgewicht"
        out.classList = "alert alert-warning mb-0"
    }
    else if (bmi >= 30){
        categorie = "Obesitas"
        out.classList = "alert alert-danger mb-0"
    }
    return categorie;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('bmi2_btn').addEventListener('click', () => {
        out.innerHTML = `BMI = ${berekenBMI()} - Categorie: ${categorieBepalen()}`;
    });
})