let name = document.querySelector('#name');
let date = document.querySelector('.date');

chrome.storage.sync.get('userEmail', function(data) {
    let email = data.userEmail.slice(0, -10);
    name.innerHTML = email + "!";
});

let currDay = new Date().toLocaleDateString();
date.innerHTML = currDay;