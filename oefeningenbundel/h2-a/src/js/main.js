//import van onze custom css
import '../scss/styles.scss'

//import al bootstrap zijn js
import * as bootstrap from 'bootstrap'

//eigen js
const items = []
const lijst = document.getElementById('sc_vars');



function toevoegenLijst(items){
    return items.map(item => `<li class="list-group-item">${item}</li>`).join("");
}
function global(){
    var a = "variabele buiten functie";
    let b = "let buiten functie";
    const c = "const buiten functie";

    function inner(){
        var d = "var binnen functie";
        let e = "let binnen functie";
        const f = "const binnen functie";

        try{
            items.push(a);
        }
        catch(e) {
            items.push("a niet bereikbaar");
        }
        try{
            items.push(b);
        }
        catch(e) {
            items.push("b niet bereikbaar");
        }
        try{
            items.push(c);
        }
        catch(e) {
            items.push("c niet bereikbaar");
        }
        try{
            items.push(d);
        }
        catch(e) {
            items.push("d niet bereikbaar");
        }
        try{
            items.push(e);
        }
        catch(e) {
            items.push("e niet bereikbaar")
        }
        try{
            items.push(f);
        }
        catch(e){
            items.push("f niet bereikbaar");
        }
        try{
            items.push(g);
        }
        catch(e) {
            items.push("g niet bereikbaar");
        }
        try{
            items.push(h);
        }
        catch(e) {
            items.push("h niet bereikbaar");
        }
        try{
            items.push(i);
        }
        catch(e) {
            items.push("i niet bereikbaar");
        }
    }

    inner();
    lijst.innerHTML = toevoegenLijst(items);
}



function statusOut(string){
    const out = document.getElementById('sc_status')
    out.textContent = string;
    out.className = "badge text-bg-info";
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('sc_global') ?.addEventListener('click', () => {
        global();
        statusOut("Global uitgevoerd.");
    })
    document.getElementById('sc_local').addEventListener('click', () => {
        statusOut("Local uitgevoerd.")
    })
})