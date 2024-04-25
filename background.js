/*##############################################################################################################################
FILE NAME   : background.js
FILE TYPE   : javascript
DESCRIPTION : 
AUTHOR      : VISHNU MOAAN KANNAN
CREATED ON  : 22ND-APR-2024
##############################################################################################################################**/


// this function helps to create a option in the contextmenu
chrome.contextMenus.create({
    "id": "XpathHunter",
    "title":"Hunt Xpath",
    "contexts":["all"]
})

let huntXPath = (info, tab) => {
    // creating a variable msg of type GetXpath and displays in background page
    let msg={
        type: 'GetXpath'
    }
    // The displayed msg value is sent to content.js page
    chrome.tabs.sendMessage(tab.id, msg,() => {
        console.log("Message Sent");
    })
    console.log(tab);

}

// This will call the function(huntXpath) only on mouse click at context menu
chrome.contextMenus.onClicked.addListener((info, tab) => {
huntXPath(info, tab)
})

