let name = document.querySelector('#name');
let date = document.querySelector('.date');
let questions = [
    "How happy are you?", "How is your physical health?", "How in control of your emotions are you?", "How accomplished do you feel?", "How connected to others do you feel?"
];
let answers = [];
let notes = [];
let a1, a2, a3, a4, a5;

// write out the highest questions and answers to the page
const writeToPage = (ques1, ques2, ans1, ans2) => {
    quest1.innerHTML = questions[ques1];
    firstQ.innerHTML = ans1 + "/10";
    note1.innerHTML = notes[ques1];
    quest2.innerHTML = questions[ques2];
    secondQ.innerHTML = ans2 + "/10";
    note2.innerHTML = notes[ques2];
    // if the value isn't high enough, don't show anything
    if(questions[ques2]==undefined) {
        quest2.innerHTML = "";
        secondQ.innerHTML = "";
        note2.innerHTML = "";
    }
    if(notes[ques1]==undefined) {
        note1.innerHTML = "";
    }
    if(notes[ques2]==undefined) {
        note2.innerHTML = "";
    }
}

// grab the users email
chrome.storage.sync.get('userEmail', function (data) {
    let email = data.userEmail.split('@')[0];
    let formattedEmail = email.charAt(0).toUpperCase() + email.slice(1);
    name.innerHTML = ", " + formattedEmail + "!";
    if(data.userEmail==undefined) {
        name.innerHTML = "there!";
    }
});

// grab answer 1 data
chrome.storage.sync.get('answer1', function (data) {
    answers.push(data.answer1);

});

// grab note 1
chrome.storage.sync.get('note1', function (data) {
    notes.push(data.note1);
});

// grab answer 2 data
chrome.storage.sync.get('answer2', function (data) {
    answers.push(data.answer2);
});

// grab note 2
chrome.storage.sync.get('note2', function (data) {
    notes.push(data.note2);
});

// grab answer 3 data
chrome.storage.sync.get('answer3', function (data) {
    answers.push(data.answer3);
});

// grab note 3
chrome.storage.sync.get('note3', function (data) {
    notes.push(data.note3);
});

// grab answer 4 data
chrome.storage.sync.get('answer4', function (data) {
    answers.push(data.answer4);
});

// grab note 4
chrome.storage.sync.get('note4', function (data) {
    notes.push(data.note4);
});

// grab answer 5 data and evaluate max values
chrome.storage.sync.get('answer5', function (data) {
    answers.push(data.answer5);
    let max = -Infinity, result = -Infinity;
    let arrIndex = -1;
    let arrIndex1, arrIndex2;
    
    for (const value of answers) {
        const nr = Number(value);
        if (nr > max) {
            [result, max] = [max, nr] // save previous max
        } 
        else if (nr < max && nr > result) {
            result = nr; // new second biggest
        }
    }
    
    arrIndex1 = answers.indexOf(max);
    arrIndex2 = answers.indexOf(result);
    writeToPage(arrIndex1, arrIndex2, max, result);
});

// grab note 5
chrome.storage.sync.get('note5', function (data) {
    notes.push(data.note5);
});

// set the proper date string
let currDay = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let weekday = days[currDay.getDay()];
let month = months[currDay.getMonth()];
date.innerHTML = weekday + ", " + month + " " + currDay.getDate();
