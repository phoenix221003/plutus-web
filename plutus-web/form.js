const form = document.querySelector("#contact-form")
const submitButton = document.querySelector("#submit")
const scriptURL = 'https://script.google.com/macros/s/AKfycbzuANdk4EmE-bXwl4wU_I88uAM7qyJD_ZvcmH4hDk3X2fSmrhIJGhjxAlgUXJbf0fI/exec'

form.addEventListener('submit', e => {
    submitButton.disabled = true
    e.preventDefault()
    let requestBody = new FormData(form)
    fetch(scriptURL, {method: 'POST', body: requestBody})
        .then(response => {
            alert('Success!', response)
            submitButton.disabled=false
            form.reset()
        })
        .catch(error => {
            alert("Error!", error.message)
            submitButton.disabled=false
        })
})