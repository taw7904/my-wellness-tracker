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

// get the users email and display it
chrome.storage.sync.get('userEmail', function (data) {
    let email = data.userEmail.split('@')[0];
    let formattedEmail = email.charAt(0).toUpperCase() + email.slice(1);
    welcome.innerHTML = "Hello, " + formattedEmail + "!";
    if(data.userEmail==undefined) {
        welcome.innerHTML = "Hello there!";
    }
});

let currDay = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let weekday = days[currDay.getDay()];
let month = months[currDay.getMonth()];
date.innerHTML = weekday + ", " + month + " " + currDay.getDate();

const saveAnswer = (ans, noteVal) => {
    if (currQuestion == 1) {
        chrome.storage.sync.set({
            answer1: ans,
            note1: noteVal
        });
    } else if (currQuestion == 2) {
        chrome.storage.sync.set({
            answer2: ans,
            note2: noteVal
        });
    } else if (currQuestion == 3) {
        chrome.storage.sync.set({
            answer3: ans,
            note3: noteVal
        });
    } else if (currQuestion == 4) {
        chrome.storage.sync.set({
            answer4: ans,
            note4: noteVal
        });
    } else {
        chrome.storage.sync.set({
            answer5: ans,
            note5: noteVal
        });
    }
};

const moveQuestions = (e) => {
    let ansVal = parseInt(answerVal.innerHTML, 10);
    saveAnswer(ansVal, note.value);
    answerContainer.style.marginLeft = "120px";
    note.value = "";
    currQuestion++;
    if (currQuestion == 2) {
        feeling.innerHTML = "How is your physical health?";
    } else if (currQuestion == 3) {
        feeling.innerHTML = "How in control of your emotions are you?";
    } else if (currQuestion == 4) {
        feeling.innerHTML = "How accomplished do you feel?";
    } else if (currQuestion == 5) {
        feeling.innerHTML = "How connected to others do you feel?";
    } else {
        mainSection.style.display = "none";
        confirmation.style.display = "block";
    }
    answerVal.innerHTML = "5";
    welcome.style.visibility = "hidden";
};

const changeVal = (e) => {
    let path;
    if (!e.path[1].classList[1]) {
        path = e.target.classList[1]
    } else {
        path = e.path[1].classList[1]
    }

    let val = parseInt(answerVal.innerHTML, 10);
    let newVal = val;
    if (path == 'downBtn') {
        if (newVal > 0) {
            newVal--;
            answerContainer.style.marginLeft = "120px";
        }
    } else {
        if (newVal < 10) {
            newVal++;
        }
        if (newVal == 10) {
            answerContainer.style.marginLeft = "100px";
        }
    }
    answerVal.innerHTML = newVal;
};

nextQuestion.addEventListener('click', moveQuestions);
skip.addEventListener('click', moveQuestions);
qc.addEventListener('click', changeVal);
