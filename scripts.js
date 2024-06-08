// Define the validateForm function
function validateForm(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Get the form elements
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Check if all fields are filled
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Change the submit button text to "Submitted"
    document.getElementById("submitButton").innerText = "Submitted";
    return true;
}

// Get the form element
var form = document.getElementById("contactForm");

// Add a submit event listener to the form
form.addEventListener("submit", validateForm);
