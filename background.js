let userName;

chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({
        color: "#3aa757"
    }, function () {
        console.log("The color is green.");
    });
/*
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {
                        hostEquals: 'developer.chrome.com'
                    },
                })
                        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
    */
});

chrome.identity.getProfileUserInfo(function(userInfo) {
    chrome.storage.sync.set({
        userEmail: userInfo.email
    });
        });


//chrome.identity.getProfileUserInfo(function(info) {email = info.email;});
