/*##############################################################################################################################
FILE NAME   : textBasedXpatj.js
FILE TYPE   : javascript
DESCRIPTION : This file contains the text based XPATH functionality
AUTHOR      : VISHNU MOAAN KANNAN
CREATED ON  : 23rd-APR-2024
##############################################################################################################################**/

function getTextXpath(element) {
    if(element.textContent != "") {
    let tagname = element.tagName.toLowerCase()
    let text = element.textContent

    let pattern = `//${tagname}[text()='${text}']`
    // console.log(pattern);
    // XPATHDATA.push(pattern)
    }
}