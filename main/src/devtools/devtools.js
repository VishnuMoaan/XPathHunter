console.log("hi from devtools");

chrome.devtools.panels.elements.createSidebarPane("XPath Hunter", (panel) => {
    console.log("Vanakam");
    chrome.devtools.panels.elements.onSelectionChanged.addListener(() => {
        // panel.setExpression(`$0.attributes`)
        chrome.devtools.inspectedWindow.eval("extractNode($0)",
        { useContentScriptContext: true });
    });
    panel.setPage("panel/panel.html")
});

