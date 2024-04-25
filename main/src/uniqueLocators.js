/*##############################################################################################################################
FILE NAME   : attributeBasedXpath.js
FILE TYPE   : javascript
DESCRIPTION : Brain of the Extention
AUTHOR      : VISHNU MOAAN KANNAN
CREATED ON  : 22ND-APR-2024
##############################################################################################################################**/



//This function finds the Unique ID
function GetUniqueID(element) {
    let Value = element.id;
    let idPattern = `//*[@id='${Value}']`;
    let count = getCountofXPath(idPattern);
    if(count == 1) {
        console.log("The Id is :",Value);
        // XPATHDATA.push(id_Value)
        return Value;
    }
    else {
        // console.log("ID is not unique");
    }
}

//This function finds the Unique Name
function GetUniqueName(element) {
    let Value = element.name;
    let NameValue = `//*[@name='${Value}']`;
    let count = getCountofXPath(NameValue);
    if(count == 1) {
        console.log("The Name is :",Value);
        // XPATHDATA.push(Value)
        return Value;
    }
    else {
        // console.log("Name is  not unique");
    }
}

//This function finds the Unique ClassName
function GetUniqueClassName(element) {
    let temp = element.className;
    let temp2 = temp.split(" ");
    let Value = temp2[0];

    let NameValue = `//*[@class='${Value}']`;
    let count = getCountofXPath(NameValue);
    if(count == 1) {
        // XPATHDATA.push(Value)
        console.log("The ClassName is :",Value);
        return Value;
    }
}


