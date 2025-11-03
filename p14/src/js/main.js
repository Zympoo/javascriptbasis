//import van onze custom css
import '../scss/styles.scss'

//import al bootstrap zijn js
import * as bootstrap from 'bootstrap'

//eigen js
//pure function
function berekenVierkant(nummer){
    return nummer**2;
}

//impure function
function handleBerekenClick(){
    const nummerInput = document.getElementById('sq_input');
    const output = document.getElementById('sq_output');

    const nummer = parseInt(nummerInput.value);

    if(!nummer){
        output.className = "alert alert-warning mt-3 mb-0";
        output.textContent = "⚠️ Geef een nummer in!";
        return;
    }
    else{
        const resultaat = berekenVierkant(nummer);
        output.textContent = `${nummer}² = ${resultaat}`;
        output.className = "alert alert-success mt-3 mb-0";
    }
}

//event koppelen
document.addEventListener('DOMContentLoaded', () => {
    const btnCalculate = document.getElementById('sq_btn');
    btnCalculate.addEventListener('click', handleBerekenClick);

    //document.getElementById('sq_btn') ?.addEventListener('click', handleBerekenClick) ;
});