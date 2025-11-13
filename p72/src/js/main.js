// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
document.addEventListener("DOMContentLoaded", () => {
    const out = document.getElementById('rb_msg')

    document.getElementById('rb_box')?.addEventListener('mouseover', (e) => {
        out.textContent = "Hallo"
        out.classList = 'alert alert-success mb-0'
    })
    document.getElementById('rb_box')?.addEventListener('mouseleave', (e) => {
        out.textContent = "Kom terug"
        out.classList = 'alert alert-secondary mb-0'
    })
    document.getElementById('rb_box')?.addEventListener('click', (e) => {
        out.textContent = "Je klikt"
        out.classList = 'alert alert-secondary mb-0 border-5'
    })
    document.getElementById('rb_box')?.addEventListener('dblclick', (e) => {
        out.textContent = "Dubbelklik wow"
        out.classList = 'alert alert-secondary mb-0 border border-danger'
    })
})

