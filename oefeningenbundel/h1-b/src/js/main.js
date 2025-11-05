//import van onze custom css
import '../scss/styles.scss'

//import al bootstrap zijn js
import * as bootstrap from 'bootstrap'

//eigen js
function berekenMeter(waarde){
    return (waarde / 100).toFixed(2);
}
function berekenInches(waarde){
    return (berekenMeter(waarde) * 39.37).toFixed(2);
}

function handleBerekeningMeterClick(){
    const inp = document.getElementById('uc_cm');
    const outMeter =document.getElementById('uc_m');
    const outInch = document.getElementById('uc_in');


    const waarde = Number(inp.value);
    console.log("test");
    if(waarde <= 0){
        outMeter.textContent = "Ongeldig";
        outInch.textContent = "Ongeldig";
    }
    else{

        outMeter.textContent = `${berekenMeter(waarde)} m`;
    }
}
function handleBerekeningInchClick(){
    const inp = document.getElementById('uc_cm');
    const outMeter =document.getElementById('uc_m');
    const outInch = document.getElementById('uc_in');


    const waarde = Number(inp.value);
    console.log("test");
    if(waarde <= 0){
        outMeter.textContent = "Ongeldig";
        outInch.textContent = "Ongeldig";
    }
    else{

        outInch.textContent = `${berekenInches(waarde)} in`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('uc_to_m') ?.addEventListener('click', handleBerekeningMeterClick);
    document.getElementById('uc_to_in') ?.addEventListener('click', handleBerekeningInchClick);
})