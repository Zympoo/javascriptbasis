// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
// ---------------------------------------------
// Hoofdstuk 20: ES6 Classes + extends + super
// ---------------------------------------------

class Animal {
    constructor(name, soort) {
        this.name = name;
        this.soort = soort;
    }

    speak() {
        return `${this.name} is een ${this.soort}`;
    }
}

class Hond extends Animal {
    constructor(name, soort) {
        super(name, soort);
    }

    speak() {
        return `${this.name} blaft!`;
    }
}

const clsAnimals = [];

function addClassAnimal() {
    const name = document.getElementById("cls_name").value.trim();
    const soort = document.getElementById("cls_animal").value;
    const list = document.getElementById("cls_list");

    if (!name || !soort) return;

    const animal = soort === "hond"
        ? new Hond(name, soort)
        : new Animal(name, soort);

    clsAnimals.push(animal);

    list.innerHTML = clsAnimals
        .map(a => `<li class="list-group-item">${a.speak()}</li>`)
        .join("");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("cls_btn")
        ?.addEventListener("click", addClassAnimal);
});
