let page = document.getElementById('buttonDiv');
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

// 4 color options are provided then generated as buttons on the options page
// with onclick event listeners. onclick, update color value in global storage
function constructOptions(kButtonColors) {
    for (let item of kButtonColors) {
        let button = document.createElement('button');
        button.style.backgroundColor = item;
        button.addEventListener('click', function() {
            chrome.storage.sync.set({color: item}, function() {
            console.log('color is ' + item);
        })
    });
    page.appendChild(button);
    }
}

constructOptions(kButtonColors);