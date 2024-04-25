/*##############################################################################################################################
FILE NAME   : attributeBasedXpath.js
FILE TYPE   : javascript
DESCRIPTION : Brain of the Extention
AUTHOR      : VISHNU MOAAN KANNAN
CREATED ON  : 22ND-APR-2024
##############################################################################################################################**/


function GetAttributeBasedXpath(element, tagName) {
    // Array.prototype.slice.call(attributes).forEach(element => { 
        //  console.log(element);
    let temp = `//${tagName}[@${element.name}='${element.value}']`;
    // console.log(temp);
    let count = getCountofXPath(temp);
    if(count == 1) {
        // console.log(temp);
        // XPATHDATA.push(temp);
    } else {
        // console.log("Duplicate");
    }
    // });
}