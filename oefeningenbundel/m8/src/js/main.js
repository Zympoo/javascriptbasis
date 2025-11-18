//import van onze custom css
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

//eigen js
const inpTitle = document.getElementById('m8_title')
const inpDescription = document.getElementById('m8_desc')
const inpEmail = document.getElementById('m8_email')

function meldenFeedback(){
    const outTitle = document.getElementById('m8_title_help')
    const outDescription = document.getElementById('m8_desc_help')
    const outEmail = document.getElementById('m8_email_help')

    if(inpTitle.value !== ""){
        outTitle.classList = "text-success"
        outTitle.innerHTML = "OK."
    }
    else{
        outTitle.classList = "text-danger"
        outTitle.innerHTML = "Titel is verplicht."
    }

    if(inpDescription.value.length >= 10){
        outDescription.classList = "text-success"
        outDescription.innerHTML = "Beschrijving is lang genoeg."
    }
    else{
        outDescription.classList = "text-danger"
        outDescription.innerHTML = "Minstens 10 tekens."
    }

    if(inpEmail.value.includes('@') && inpEmail.value.includes('.')){
        outEmail.classList = "text-success"
        outEmail.innerHTML = "E-mailadres lijkt geldig."
    }
    else{
        outEmail.classList = "text-danger"
        outEmail.innerHTML = "E-mailadres bevat minstens een @ en een punt."
    }
}
function tellerIngevuldeVelden(){
    let teller = 0

    if(inpTitle.value !== ""){
        teller += 1;
    }
    if(inpDescription.value.length >= 10){
        teller += 1;
    }
    if(inpEmail.value.includes('@') && inpEmail.value.includes('.')){
        teller += 1;
    }

    return teller;
}
function opmaakOutput(){
    const outStatus = document.getElementById('m8_status')
    const outSummary = document.getElementById('m8_summary')
    const aantal = tellerIngevuldeVelden()

    if(aantal >= 1 && aantal <= 2){
        outStatus.innerHTML = `${aantal} van de 3 velden ingevuld`
        outStatus.classList = "alert alert-primary mb-3";
        outSummary.innerHTML = `<li class="text-muted">Samenvatting verschijnt zodra alle velden geldig zijn.</li>`
    }
    else if(aantal === 3){
        outStatus.innerHTML = "Alle velden zijn ingevuld. 🎉"
        outStatus.classList = "alert alert-success mb-3";

        outSummary.innerHTML = `<li class="text-muted"><strong>Titel</strong>: ${inpName.value}</li>
                                        <li class="text-muted"><strong>Beschrijving</strong>: ${inpMsg.value}</li>
                                        <li class="text-muted"><strong>E-mail</strong>: ${inpEmail.value}</li>`
    }
    else{
        outStatus.innerHTML = "Nog geen velden ingevuld."
        outStatus.classList = "alert alert-secondary mb-3";

        outSummary.innerHTML = `<li class="text-muted">Samenvatting verschijnt zodra alle velden geldig zijn.</li>`
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('m8_focus_btn')?.addEventListener('click', () => {
        meldenFeedback();

        if (inpTitle.value === "") {
            inpTitle.focus();
            return
        }

        if (inpDescription.value.length < 10) {
            inpDescription.focus();
            return
        }

        if (!inpEmail.value.includes('@') || !inpEmail.value.includes('.')) {
            inpEmail.focus();
        }
    })

    document.querySelectorAll('.form-control').forEach(el => {
        el.addEventListener('focus', (e) => {
            el.classList.add('border-danger')
        })
        el.addEventListener('blur', (e) => {
            el.classList.remove('border-danger')
            meldenFeedback()
            opmaakOutput()
        })
    })
})