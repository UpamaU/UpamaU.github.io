// Define the validateForm function
function validateForm() {
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
    document.getElementById("submitBtn").innerText = "Submitted";
    return true;
}