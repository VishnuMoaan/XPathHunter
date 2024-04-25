document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("uniqueID");
    const copyBtn = document.getElementById("copyBtn");
  
    // Function to copy text from input field
    function copyText() {
      display.select();
      document.execCommand("copy");
      alert("Copied to clipboard!");
    }
  
    // Add click event listener to copy button
    copyBtn.addEventListener("click", copyText);
  
    // Fetch text content from JS and display it in the input field
    fetchTextContent();
  });
  
  // Function to fetch text content from JS
  function fetchTextContent() {
    // Simulating fetching data
    const data = { len: "Text from JS file" }; // Replace with your actual data or API call
    const display = document.getElementById("uniqueID");
    display.value = data.len;
  }
  