let userName;

chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({
        color: "#3aa757"
    }, function () {
        console.log("The color is green.");
    });
});

chrome.identity.getProfileUserInfo(function (userInfo) {
    chrome.storage.sync.set({
        userEmail: userInfo.email
    });
});
