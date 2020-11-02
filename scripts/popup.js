//let changeColor = document.querySelector('#changeColor');
let test = document.querySelector('#test');
let welcome = document.querySelector('.welcome');
let slider = document.querySelector('.slider');
let date = document.querySelector('.date');
let nextQuestion = document.querySelector('#nextQuestion');
let qc = document.querySelector('.questionContainer');
let answerContainer = document.querySelector('.answerContainer');
let feeling = document.querySelector('.feeling');
let skip = document.querySelector('.skip');

let currQuestion = 1;

// grabs button from popup.html and requests color value from storage
// then applies color as background of the button
/*chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});*/

// get the users email and display it
chrome.storage.sync.get('userEmail', function(data) {
    let email = data.userEmail.slice(0, -10);
    let formattedEmail = email.charAt(0).toUpperCase() + email.slice(1);
    welcome.innerHTML = "Hello, " + formattedEmail + "!";
});

let currDay = new Date().toLocaleDateString();
date.innerHTML = currDay;

const moveQuestions = (e) => {
    answerContainer.style.marginLeft = "120px";
    note.value = "";
    currQuestion++;
    if(currQuestion==2) {
        feeling.innerHTML = "How is your physical health?"; 
    }
    else if(currQuestion==3) {
        feeling.innerHTML = "How in control of your emotions are you?"; 
    }
    else if(currQuestion==4) {
        feeling.innerHTML = "How accomplished do you feel?"; 
    }
    else if(currQuestion==5) {
        feeling.innerHTML = "How connected to others do you feel?";
    }
    else {
        mainSection.style.display = "none";
        confirmation.style.display = "block";
    }
    answerVal.innerHTML = "5";
    welcome.style.visibility = "hidden";
};

const changeVal = (e) => {
    let path;
    if(!e.path[1].classList[1]){ path = e.target.classList[1] }
    else { path = e.path[1].classList[1] }
    
    let val = parseInt(answerVal.innerHTML, 10);
    let newVal = val;
    if(path=='downBtn') {
        if(newVal>0) {
        newVal--;
        answerContainer.style.marginLeft = "120px";
    }
    }
    else {
        if(newVal<10) {
        newVal++;
    }
    if(newVal==10) {
        answerContainer.style.marginLeft = "100px";
    }
    }
    answerVal.innerHTML = newVal;
};

nextQuestion.addEventListener('click', moveQuestions);
skip.addEventListener('click', moveQuestions);
qc.addEventListener('click', changeVal);
