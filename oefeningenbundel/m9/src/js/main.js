//import van onze custom css
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

//eigen js
const inpName = document.getElementById('m9_name')
const inpMsg = document.getElementById('m9_msg')
const inpEmail = document.getElementById('m9_email')

function meldenFeedback(){
    const outName = document.getElementById('m9_name_help')
    const outMsg = document.getElementById('m9_msg_help')
    const outEmail = document.getElementById('m9_email_help')

    if(inpName.value !== ""){
        outName.classList = "text-success"
        outName.innerHTML = "Naam is OK."
        inpName.classList.remove("is-invalid");
        inpName.classList.add("is-valid");
    }
    else{
        outName.classList = "text-danger"
        outName.innerHTML = "Naam is verplicht."
        inpName.classList.remove("is-valid");
        inpName.classList.add("is-invalid");
    }

    if(inpMsg.value.length >= 10){
        outMsg.classList = "text-success"
        outMsg.innerHTML = "Bericht is lang genoeg."
        inpMsg.classList.remove("is-invalid");
        inpMsg.classList.add("is-valid");
    }
    else{
        outMsg.classList = "text-danger"
        outMsg.innerHTML = "Minstens 10 tekens."
        inpMsg.classList.remove("is-valid");
        inpMsg.classList.add("is-invalid");
    }

    if(inpEmail.value.includes('@') && inpEmail.value.includes('.')){
        outEmail.classList = "text-success"
        outEmail.innerHTML = "E-mailadres lijkt geldig."
        inpEmail.classList.remove("is-invalid")
        inpEmail.classList.add("is-valid");
    }
    else{
        outEmail.classList = "text-danger"
        outEmail.innerHTML = "E-mailadres bevat minstens een @ en een punt."
        inpEmail.classList.remove("is-valid");
        inpEmail.classList.add("is-invalid");
    }
}
function tellerIngevuldeVelden(){
    let teller = 0

    if(inpName.value !== ""){
        teller += 1;
    }
    if(inpMsg.value.length >= 10){
        teller += 1;
    }
    if(inpEmail.value.includes('@') && inpEmail.value.includes('.')){
        teller += 1;
    }

    return teller;
}
function opmaakOutput(){
    const outStatus = document.getElementById('m9_status')
    const outSummary = document.getElementById('m9_summary')
    const aantal = tellerIngevuldeVelden()

    if(aantal >= 1 && aantal <= 2){
        outStatus.innerHTML = `${aantal} van de 3 velden ingevuld`
        outStatus.classList = "alert alert-primary mb-3";
        outSummary.innerHTML = `<li class="text-muted">Samenvatting verschijnt zodra alle velden geldig zijn.</li>`
    }
    else if(aantal === 3){
        outStatus.innerHTML = `Je hebt alles ingevuld`
        outStatus.classList = "alert alert-success mb-3";
        outSummary.innerHTML = `<li class="text-muted"><strong>Naam</strong>: ${inpName.value}</li>
                                <li class="text-muted"><strong>E-mail</strong>: ${inpEmail.value}</li>
                                <li class="text-muted"><strong>Bericht</strong>: ${inpMsg.value}</li>`

    }
    else{
        outStatus.innerHTML = "Nog geen velden ingevuld."
        outStatus.classList = "alert alert-secondary mb-3";

        outSummary.innerHTML = `<li class="text-muted">Samenvatting verschijnt zodra alle velden geldig zijn.</li>`
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('m9_form')?.addEventListener('submit', (e) => {
        e.preventDefault()
        opmaakOutput();
    })

    document.querySelectorAll('.form-control').forEach(el => {
        el.addEventListener('input', () => {
            meldenFeedback()
        })
        el.addEventListener('blur', () => {
            meldenFeedback()
        })
    })
})