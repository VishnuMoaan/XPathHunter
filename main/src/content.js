/*##############################################################################################################################
FILE NAME   : content.js
FILE TYPE   : javascript
DESCRIPTION : Brain of the Extention
AUTHOR      : VISHNU MOAAN KANNAN
CREATED ON  : 22ND-APR-2024
##############################################################################################################################**/


//targetElement is the variable that is storing the node value of the DOM clicked by user from init function
let targetElement = null;
let XPATHDATA = [];
let ID ;
let Name ;
let ClassName ;


//receiver is the variable that will recieve message from background page and calls the function that extracts the node
let receiver = (message, sender, sendResponse) => {
    if (message.type === "GetXpath"){
       // console.log(message);
        extractNode(targetElement);
    }
};

// The sent msg from background page (huntXpath function) is recieved here
chrome.runtime.onMessage.addListener(receiver);

//this will call the function init once the DOM is loaded
window.addEventListener('DOMContentLoaded', (event) => {
    init();
});

// this function is used to display the event(DOM node) of the target clicked,(the target is place where mouse is clicked on DOM)
function init(){
    document.addEventListener("mousedown", (event) => {
        // console.log(event.target);
        targetElement=event.target;
    }, false)
}

// This function will display the selected node in the console
function extractNode(targetElement ) {
    let tag_Value = targetElement.tagName.toLowerCase();
    let attributes = targetElement.attributes;
    FindUniqueLocators(attributes, tag_Value, targetElement)
    getTextXpath(targetElement)
    console.log(XPATHDATA);
    let message = {
        request:"sendtodevtools",
        // xpath:XPATHDATA
        id:ID,
        name:Name,
        class:ClassName

    }
    chrome.storage.local.set({len:ID})
    chrome.runtime.sendMessage(message)
    XPATHDATA=[];
}

//This function will check if the given format is unique
function getCountofXPath(xpath) {
    let count = document.evaluate(
        `count(${xpath})`,document,null,XPathResult.ANY_TYPE,null).numberValue;
    // console.log('The count is:' + count);
    return count;
}

function FindUniqueLocators(attributes, tagName, targetElement) {
    Array.prototype.slice.call(attributes).forEach(element => {
   
        switch (element.name) {
        case "id":
            ID = GetUniqueID(targetElement);
            break;
        case "Name":
            Name = GetUniqueName(targetElement);
            break;
        case "class":
            ClassName = GetUniqueClassName(targetElement);
            break;
        default:
            if (element.value ='') {
            GetAttributeBasedXpath(element, tagName)
            }
            break;
        }
    });
}