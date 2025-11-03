//import van onze custom css
import '../scss/styles.scss'

//import al bootstrap zijn js
import * as bootstrap from 'bootstrap'

//eigen js
//pure function
function maakGroet(naam){
    return `Hallo ${naam}`;
}

//impure function
function handleGroetClick(){
    const naamInput = document.getElementById('fn_naamInput');
    const output = document.getElementById('fn_output');

    const naam = naamInput.value.trim();

    if(!naam){
        output.className = "alert alert-warning mt-3 mb-0";
        output.textContent = "Geef een naam in!";
        return;
    }
    else{
        const boodschap = maakGroet(naam);
        output.textContent = boodschap;
        output.className = "alert alert-success mt-3 mb-0";
    }
}

//event koppelen
document.addEventListener('DOMContentLoaded', () => {
    const btnGreet = document.getElementById('fn_btnGreet');
    btnGreet.addEventListener('click', handleGroetClick);

    //document.getElementById('fn_btnGreet') ?.addEventListener('click', handleGroetClick) ;
});