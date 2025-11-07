// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const input = document.getElementById('ft_input');
input.addEventListener('focus', () => {
    input.style.border = '2px solid blue';
})
input.addEventListener('blur', () => {
    input.style.border = '2px solid #ccc';
})

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('ft_btn').addEventListener('click', () => {input.focus()})
})