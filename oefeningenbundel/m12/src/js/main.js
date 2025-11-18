//import van onze custom css
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

//eigen js
let m12_accounts = []
let userCounter = 0;
let adminCounter = 0;

let inpName = document.getElementById('m12_name');
let inpAge = document.getElementById('m12_age');
let inpRole = document.getElementById('m12_role');

class User{
    constructor(name, age, role){
        this.name = name;
        this.age = age;
        this.role = role;
    }

    getLabel(){
        return `${this.name} (${this.age}) is een gewone gebruiker.`;
    }
}
class Admin extends User{
    constructor(name, age, role){
        super(name, age);
        this.role = role;
    }

    getLabel() {
        return `${this.name} (${this.age}) is een administrator.`;
    }
}

function addUser(){
    const inpRoleVal = inpRole.value
    const inpNameVal = inpName.value
    const inpAgeVal = Number(inpAge.value);

    if(inpRoleVal === "user"){
        m12_accounts.push(new User(inpNameVal, inpAgeVal, inpRoleVal));
    }
    else if(inpRoleVal === "admin"){
        m12_accounts.push(new Admin(inpNameVal, inpAgeVal, inpRoleVal));
    }
}
function updateList(){
    const list = document.getElementById('m12_list');

    list.innerHTML = m12_accounts.map(account => {
        if(account.role === "user") {
            return `
            <div class="col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm">
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <h5 class="card-title mb-0">${account.name}</h5>
                            <span class="badge bg-secondary">User</span>
                        </div>
                        <p class="card-text mb-1">
                            Leeftijd: <strong>${account.age}</strong>
                        </p>
                        <p class="card-text small text-muted mt-auto">
                            ${account.getLabel()}
                        </p>
                    </div>
                </div>
            </div>`
        }
        else{
            return `
            <div class="col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm">
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <h5 class="card-title mb-0">${account.name}</h5>
                            <span class="badge bg-danger">Admin</span>
                        </div>
                        <p class="card-text mb-1">
                            Leeftijd: <strong>${account.age}</strong>
                        </p>
                        <p class="card-text small text-muted mt-auto">
                            ${account.getLabel()}
                        </p>
                    </div>
                </div>
            </div>`
        }
    }).join('');
}
function updateCounters(){
    const outTotaal = document.getElementById('m12_total_count')
    const outUser = document.getElementById('m12_user_count')
    const outAdmin = document.getElementById('m12_admin_count')

    outTotaal.innerHTML = m12_accounts.length;

    userCounter = 0;
    adminCounter = 0;

    m12_accounts.forEach(account => {
        if(account.role === "user"){
            userCounter++;
        }
        else{
            adminCounter++;
        }
    })
    outUser.innerHTML = userCounter;
    outAdmin.innerHTML = adminCounter;
}
function resetFormulier(){
    inpName.value = "";
    inpRole.value = "user";
    inpAge.value = "";
    inpName.focus();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('m12_add')?.addEventListener('click', () => {
        if(inpName.value === "" || inpAge.value === "") return
        addUser();
        updateList();
        updateCounters();
        resetFormulier();
    })
})