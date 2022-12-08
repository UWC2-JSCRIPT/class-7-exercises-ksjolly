// TODO

document.addEventListener("DOMContentLoaded", function() {
    console.log('wemade it here right');
    const firstName = document.getElementById("name");
    const comment = document.getElementById("comment");
    const email = document.getElementById("email");
    const form = document.querySelector('form');

    const selectEl = document.getElementById('contact-kind');
    document.getElementById("jobs").style.display = "none";
    document.getElementById("tech").style.display = "none";
    
    
    
    


    const showAppropriateResponse = function() {
        let jobs = document.getElementById("jobs");
        let tech = document.getElementById("tech"); 
        if(selectEl.value === 'business')
        {
            jobs.style.display = "block";
            tech.style.display = "none";
        }
        else 
        {
            jobs.style.display = "none";
            tech.style.display = "block";
           
        }
    }

    function checkValidation(e) {
        console.log('did we ever get here');
        let allValid = false; 
        let firstValid = false;
        let commentValid = false;
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

        if(comment.value.length < 10)
        {
            comment.validity.valid = false;
            comment.classList.add("invalid");
            comment.setCustomValidity('Your last name is too short');
            comment.reportValidity();
        }

        else {
            comment.validity.valid = true;
            commentValid = true;

        }

        if(email.value == null || (email.value && email.value.match(/\w+@\w+\.\w+/).length == 0) )
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

        allValid = firstValid && commentValid && emailValid;
        console.log('firstvalid is', firstValid);
        console.log('lastvalid is ', commentValid);
        console.log('allvalid is ', allValid);
        console.log('emailValid is ', emailValid);

        if(!allValid) {
            e.preventDefault();
        }
    }

    selectEl.addEventListener('change', showAppropriateResponse);
    form.addEventListener('submit', (e) => {
        checkValidation(e)
    })

    
});