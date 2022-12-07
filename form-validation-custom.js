// TODO
document.addEventListener("DOMContentLoaded", function() {
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const form = document.getElementById('form');


    function checkValidation() {
        let allValid = false; 
        // check firstname >= 3
        if(firstName.value.length > 3) {
            firstName.validity.valid = false;
            firstName.classList.add("invalid");
            firstName.setCustomValidity('Your name is too short');
            firstName.reportValidity();
        }
        else {
            firstName.validity.valid = true; 
            firstName.classList.remove("invalid");
            allValid == true;
        }
    }


    if(email.value.match(regex)) //continue


    form.addEventListener('submit', (e) => {
        checkValidation(e)
    })

    



});