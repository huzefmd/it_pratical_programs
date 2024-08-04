function validateForm() {
    var username = document.forms["registration"]["username"].value;
    var email = document.forms["registration"]["email"].value;
    var password = document.forms["registration"]["password"].value;

    // Check if any field is empty
    if (username === "" || email === "" || password === "") {
        alert("All fields must be filled out.");
        return false; // Prevent form submission
    }

    // Basic email validation regex
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
        alert("Invalid email format.");
        return false; // Prevent form submission
    }

    // Check password length
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false; // Prevent form submission
    }

    alert('Registration successful!');
    return true; // Allow form submission
}
