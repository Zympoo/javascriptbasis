//import van onze custom css
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

//eigen js
const weekdagen = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"]

function leeftijdBereken(now, birth) {
    let leeftijd = now.getFullYear() - birth.getFullYear() - 1;
    if ((now.getMonth() < birth.getMonth()) || (now.getMonth() === birth.getMonth() && now.getDate() >= birth.getDate())) {
        leeftijd += 1;
    }
    return leeftijd
}

function bepalenGeboorteDag(birth) {
    return weekdagen[birth.getDay()]
}

function bepalenVolgendeVerjaardag(now, birth) {
    let nextBirthday = new Date(now.getFullYear() + 1, birth.getMonth(), birth.getDate());
    if (nextBirthday.getMonth() < now.getMonth() || (nextBirthday.getMonth() === now.getMonth() && nextBirthday.getDate() > now.getDate())) {
        nextBirthday = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
    }
    return nextBirthday;
}

function dagenTotVolgendeVerjaardag(nextBirthday, now) {
    const diffMs = nextBirthday - now;
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    return diffDays;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('m11_btn')?.addEventListener('click', () => {
        const now = new Date();
        const birth = new Date(document.getElementById('m11_date').value);
        const outSummary = document.getElementById('m11_summary');
        const outStatus = document.getElementById('m11_status')

        if(!Date.parse(birth) || Math.sign(leeftijdBereken(now, birth)) === -1){
            outStatus.innerText = "Vul geldige geboortedatum in"
            outStatus.classList = 'alert alert-warning mb-3'
        }
        else{
            outStatus.innerText = `Je bent ongeveer ${leeftijdBereken(now, birth)} jaar oud, geboren op een ${bepalenGeboorteDag(birth)}.`;
            outStatus.classList = 'alert alert-success mb-3'
            outSummary.innerHTML = `<li class="text-muted"><strong>Leeftijd</strong>: ${leeftijdBereken(now, birth)}</li>
                         <li class="text-muted"><strong>Geboortdag</strong>: ${bepalenGeboorteDag(birth)}</li>
                         <li class="text-muted"><strong>Volgende verjaardag</strong>: ${bepalenVolgendeVerjaardag(now, birth).toLocaleDateString()}</li>
                         <li class="text-muted"><strong>Dagen tot volgende verjaardag</strong>: ${dagenTotVolgendeVerjaardag(bepalenVolgendeVerjaardag(now, birth), now)}</li>`
        }
    })
})