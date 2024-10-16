document.getElementById("signupForm").onsubmit = function (e) {
    e.preventDefault();
    
    // Get input values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confpassword = document.getElementById("confpw").value;
    const errorMsg = document.getElementById("errorMsg");
    const loginErrorMsg = document.getElementById("loginErrorMsg");

    loginErrorMsg.style.display = "none"; // Hide feedback initially
    loginErrorMsg.className = ''; // Remove previous classes

    // Validate email or mobile
    if (!validateEmailOrMobile(email)) {
        loginErrorMsg.style.display = "block";
        loginErrorMsg.className = 'error'; // Add error class
        loginErrorMsg.innerText = "Invalid email or mobile number!";
    } 
    // Check for empty password
    else if (password === "") {
        loginErrorMsg.style.display = "block";
        loginErrorMsg.className = 'error'; // Add error class
        loginErrorMsg.innerText = "Password cannot be empty!";
    } 
    // Check if passwords match
    else if (password !== confpassword) {
        errorMsg.style.display = "block";
        errorMsg.innerText = "Both passwords should match!";
    } 
    // If all validations pass
    else {
        loginErrorMsg.style.display = "block";
        loginErrorMsg.className = 'success'; // Add success class
        loginErrorMsg.innerText = "SignUp successful!";
        
        // Redirect to the login page after a short delay
        setTimeout(function() {
            window.location.href = 'login.html'; // Change to your actual login page URL
        }, 1000); // Adjust the delay as needed (1500ms = 1.5 seconds)

        // Optionally, reset the form here
        document.getElementById("signupForm").reset(); // Clear the form
    }
};

// Email and mobile validation function
function validateEmailOrMobile(input) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email pattern
    const mobilePattern = /^\d{10}$/; // Mobile number pattern
    return emailPattern.test(input) || mobilePattern.test(input); // Return true if either matches
}
