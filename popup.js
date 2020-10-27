//let changeColor = document.querySelector('#changeColor');
let test = document.querySelector('#test');
let welcome = document.querySelector('.welcome');
let slider = document.querySelector('.slider');
let date = document.querySelector('.date');

// grabs button from popup.html and requests color value from storage
// then applies color as background of the button
/*chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});*/

// get the users email and display it
chrome.storage.sync.get('userEmail', function(data) {
    let email = data.userEmail.slice(0, -10);
    welcome.innerHTML = "Welcome, " + email; 
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
});
*/

slider.oninput = function() {
    let mood;
    if(this.value==1) {
        slider.classList.remove('slider2');
        slider.classList.remove('slider3');
        slider.classList.remove('slider4');
        slider.classList.remove('slider5');
        slider.classList.add('slider1');
        mood = "Sad";
    }
    if(this.value==2) {
        slider.classList.remove('slider1');
        slider.classList.remove('slider3');
        slider.classList.remove('slider4');
        slider.classList.remove('slider5');
        slider.classList.add('slider2');
        mood = "Indifferent";
    }
    if(this.value==3) {
        slider.classList.remove('slider1');
        slider.classList.remove('slider2');
        slider.classList.remove('slider4');
        slider.classList.remove('slider5');
        slider.classList.add('slider3');
        mood = "Neutral";
    }
    if(this.value==4) {
        slider.classList.remove('slider1');
        slider.classList.remove('slider2');
        slider.classList.remove('slider3');
        slider.classList.remove('slider5');
        slider.classList.add('slider4');
        mood = "Content";
    }
    if(this.value==5) {
        slider.classList.remove('slider1');
        slider.classList.remove('slider2');
        slider.classList.remove('slider3');
        slider.classList.remove('slider4');
        slider.classList.add('slider5');
        mood = "Happy";
    }
    rangeText.innerHTML = mood;
}

let currDay = new Date().toLocaleDateString();
date.innerHTML = currDay;
