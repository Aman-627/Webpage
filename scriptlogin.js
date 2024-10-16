document.getElementById("loginForm").onsubmit = function (e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const loginErrorMsg = document.getElementById("loginErrorMsg");
    
    // Reset feedback styles
    loginErrorMsg.style.display = "none"; // Hide feedback initially
    loginErrorMsg.className = ''; // Remove previous classes

    // Validation logic
    if (!validateEmailOrMobile(email)) {
        loginErrorMsg.style.display = "block";
        loginErrorMsg.className = 'error'; // Add error class
        loginErrorMsg.innerText = "Invalid email or mobile number!";
    } else if (password === "") {
        loginErrorMsg.style.display = "block";
        loginErrorMsg.className = 'error'; // Add error class
        loginErrorMsg.innerText = "Password cannot be empty!";
    } else {
        // If validation passes, you can show a success message instead of an alert
        loginErrorMsg.style.display = "block";
        loginErrorMsg.className = 'success'; // Add success class
        loginErrorMsg.innerText = "Login successful!";
        // Optionally, reset the form here or redirect to another page
        document.getElementById("loginForm").reset(); // Clear the form
    }
};

function validateEmailOrMobile(input) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^\d{10}$/;
    return emailPattern.test(input) || mobilePattern.test(input);
}
