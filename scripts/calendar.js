let checkin = document.querySelectorAll('.checkin');
let opaque = document.querySelector('.opaque');
let opaque1 = document.querySelector('.opaque1');
let close = document.querySelector("#close");

const showPopUp = (e) => {
    resultsDiv.style.display = "block";
    opaque.style.opacity = "0.3";
    opaque1.style.opacity = "0.3";
    close.addEventListener('click', function() {
        resultsDiv.style.display = "none";
        opaque.style.opacity = "1";
        opaque1.style.opacity = "1";
    });
}

for (let i = 0 ; i < checkin.length ; ++i) {
        checkin[i].addEventListener("click", showPopUp);
}

                                           