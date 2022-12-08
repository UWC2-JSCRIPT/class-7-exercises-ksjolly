// TODO
document.addEventListener("DOMContentLoaded", function() {
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const form = document.querySelector('form');




    function checkValidation(e) {
        let allValid = true; 
        let firstValid = false;
        let lastValid = false;
        let emailValid = false;
        // check firstname >= 3
        if(firstName.value.length < 3) 
        {    
            firstName.validity.valid = false;
            firstName.classList.add("invalid");
            firstName.setCustomValidity('Your name is too short');
            firstName.reportValidity();
        }
        else {
            firstName.validity.valid = true; 
            // firstName.classList.remove("invalid");
            firstValid = true;
        }

        if(lastName.value.length < 3)
        {
            lastName.validity.valid = false;
            lastName.classList.add("invalid");
            lastName.setCustomValidity('Your last name is too short');
            lastName.reportValidity();
        }

        else {
            lastName.validity.valid = true;
            lastValid = true;

        }

        if(email.value.match(/\w+@\w+\.\w+/).length == 0)
        {
            console.log('we got here');
            email.validity.valid = false;
            email.classList.add("invalid");
            email.setCustomValidity('Your email is in incorrect format');
            email.reportValidity();
        }
        else {
            console.log(email.value.match(/\w+@\w+\.\w+/));
            email.validity.valid = true;
            emailValid = true;
        }

        allValid = firstValid && lastValid && emailValid;
        console.log('firstvalid is', firstValid);
        console.log('lastvalid is ', lastValid);
        console.log('allvalid is ', allValid);
        console.log('emailValid is ', emailValid);

        if(!allValid) {
            e.preventDefault();
        }
    }




    form.addEventListener('submit', (e) => {
        checkValidation(e)
    })

    



});