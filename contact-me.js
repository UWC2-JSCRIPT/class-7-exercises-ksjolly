// TODO

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

selectEl.addEventListener('change', showAppropriateResponse);


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

    //selectEl.addEventListener('change', showAppropriateResponse);

    //if(email.value.match(regex)) //continue


    form.addEventListener('submit', (e) => {
        checkValidation(e)
    })

});