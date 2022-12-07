// TODO

const selectEl = document.getElementById('contact-kind');

const showAppropriateResponse = function() {
    if(selectEl.value === 'business')
    {
        alert('hi there i am job');
    }
    else 
    {
        alert('i am not job');
    }
}

selectEl.addEventListener('change', showAppropriateResponse);
// document.getElementById("contact-kind").onchange = function(e) {
//     id = document.getElementById("contact-kind").value;
//     alert("id: ", id);
// }
// function showJobs() {
//     var x = document.getElementById("jobs");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }