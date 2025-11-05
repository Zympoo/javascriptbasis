//import van onze custom css
import '../scss/styles.scss'

//import al bootstrap zijn js
import * as bootstrap from 'bootstrap'

//eigen js
const inputNummer1 = document.getElementById('mt_a');
const inputNummer2 = document.getElementById('mt_b');
const output = document.getElementById('mt_out');
//pure function
function berekenOptelling(a,b){
    return a+b;
}
function berekenAftrekking(a,b){
    return a-b;
}
function berekenVermenigvuldiging(a,b){
    return a*b;
}
function berekenDeling(a,b){
    return a/b;
}

//impure function
function handleOptellingClick(){
    const inputNummer1 = document.getElementById('mt_a');
    const inputNummer2 = document.getElementById('mt_b');
    const output = document.getElementById('mt_out');

    const nummer1 = Number(inputNummer1.value);
    const nummer2 = Number(inputNummer2.value);

    if(nummer1 == "" || nummer2 == ""){
        output.className = "alert alert-warning mt-3 mb-0";
        output.textContent = "⚠️ Ongeldige invoer, vul beide getallen in!";
    }
    else{
        const resultaat = berekenOptelling(nummer1, nummer2);
        output.textContent = `Resultaat : ${resultaat}`;
        output.className = "alert alert-success mt-3 mb-0";
    }
}
function handleAftrekkingClick(){
    const inputNummer1 = document.getElementById('mt_a');
    const inputNummer2 = document.getElementById('mt_b');
    const output = document.getElementById('mt_out');

    const nummer1 = Number(inputNummer1.value);
    const nummer2 = Number(inputNummer2.value);

    if(nummer1 == "" || nummer2 == ""){
        output.className = "alert alert-warning mt-3 mb-0";
        output.textContent = "⚠️ Ongeldige invoer, vul beide getallen in!";
    }
    else{
        const resultaat = berekenAftrekking(nummer1, nummer2);
        output.textContent = `Resultaat : ${resultaat}`;
        output.className = "alert alert-success mt-3 mb-0";
    }
}
function handleVermenigvuldigingClick(){
    const inputNummer1 = document.getElementById('mt_a');
    const inputNummer2 = document.getElementById('mt_b');
    const output = document.getElementById('mt_out');

    const nummer1 = Number(inputNummer1.value);
    const nummer2 = Number(inputNummer2.value);

    if(nummer1 == "" || nummer2 == ""){
        output.className = "alert alert-warning mt-3 mb-0";
        output.textContent = "⚠️ Ongeldige invoer, vul beide getallen in!";
    }
    else{
        const resultaat = berekenVermenigvuldiging(nummer1, nummer2);
        output.textContent = `Resultaat : ${resultaat}`;
        output.className = "alert alert-success mt-3 mb-0";
    }
}
function handleDelingClick(){
    const inputNummer1 = document.getElementById('mt_a');
    const inputNummer2 = document.getElementById('mt_b');
    const output = document.getElementById('mt_out');

    const nummer1 = Number(inputNummer1.value);
    const nummer2 = Number(inputNummer2.value);

    if(nummer1 == "" || nummer2 == ""){
        output.className = "alert alert-warning mt-3 mb-0";
        output.textContent = "⚠️ Ongeldige invoer, vul beide getallen in!";
    }
    else if(nummer2 === "0"){
        output.className = "alert alert-warning mt-3 mb-0";
        output.textcontent = "️⚠️ Kan niet delen door 0."
    }
    else{
        const resultaat = berekenDeling(nummer1, nummer2);
        output.textContent = `Resultaat : ${resultaat}`;
        output.className = "alert alert-success mt-3 mb-0";
    }
}

//event koppelen
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('mt_add') ?.addEventListener('click', handleOptellingClick);
    document.getElementById('mt_sub') ?.addEventListener('click', handleAftrekkingClick);
    document.getElementById('mt_mul') ?.addEventListener('click', handleVermenigvuldigingClick);
    document.getElementById('mt_div') ?.addEventListener('click', handleDelingClick);
});