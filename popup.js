//let changeColor = document.querySelector('#changeColor');
let test = document.querySelector('#test');
let welcome = document.querySelector('.welcome');
let slider = document.querySelector('.slider');
let date = document.querySelector('.date');
let nextQuestion = document.querySelector('#q1');
let q1 = document.querySelector('.questionContainer');
let q2 = document.querySelector('.questionContainer2');
let feeling = document.querySelector('.feeling');

// grabs button from popup.html and requests color value from storage
// then applies color as background of the button
/*chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});*/

// get the users email and display it
chrome.storage.sync.get('userEmail', function(data) {
    let email = data.userEmail.slice(0, -10);
    welcome.innerHTML = "Hello, " + email; 
});

// adds onclick event to trigger a programatically injected content script
// turns background color of the page the same color as the button

/*changeColor.onclick = function(element) {
  let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
        tabs[0].id, {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
};
test.addEventListener('click', function() {
    chrome.tabs.create({url: 'https://people.rit.edu/taw7904/portfolio/'});  
    
    http://code.iamkate.com/html-and-css/styling-buttons-with-css3/
});
*/

let currDay = new Date().toLocaleDateString();
date.innerHTML = currDay;

nextQuestion.addEventListener('click', function() {
    q1.style.display = "none";
    q2.style.display = "block";
    feeling.innerHTML = "How did you sleep?";
    welcome.style.visibility = "hidden";
});