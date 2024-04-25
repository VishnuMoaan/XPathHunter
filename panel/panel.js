

/**chrome.runtime.onMessage.addListener((req,rec,res) => {
    console.log(req);

    if(req.request == "sendtodevtools") {
        buildUI(req.xpath);
    }
})

function buildUI(data) {
    // document.write(data);

    chrome.storage.local.get(["len"], (data) => {
        //document.write(data.len);
        let display =  document.getElementById("uniqueID");
        display.textContent = '';
        display.textContent = data.len;
    })
}

**/


// Listen for messages from the background script
chrome.runtime.onMessage.addListener((req, rec, res) => {
    if (req.request === "sendtodevtools") {
        buildUI(req.xpath);
    }
});

// Function to build the UI in the sidebar panel
function buildUI(data) {
    chrome.storage.local.get(["len"], (result) => {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
            return;
        }

        const lenData = result.len || "No data available"; // Default message if data is not found

        // Display the data in the sidebar panel
        const display = document.getElementById("uniqueID");
        if (display) {
            display.textContent = lenData;
        } else {
            console.error("Element with ID 'uniqueID' not found.");
        }
    });
}

// Add click event listener to trigger the buildUI function
document.addEventListener("DOMContentLoaded", function() {
    const copyBtn = document.getElementById("copyBtn");
    if (copyBtn) {
        copyBtn.addEventListener("click", buildUI);
    } else {
        console.error("Button with ID 'copyBtn' not found.");
    }
});
