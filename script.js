document.addEventListener('DOMContentLoaded', function() {
    // Setup and Initial Code Structure
    // Form Selection
    const form = document.getElementById('registration-form');
    // Feedback Division Selection
    const feedbackDiv = document.getElementById('form-feedback');

    // Form Submission and Event Prevention
    form.addEventListener('submit', function(event) {
        // Crucial: Prevent the form from submitting to the server
        event.preventDefault(); 

        // Input Retrieval and Trimming
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validation Logic
        // Initialize Validation Variables
        let isValid = true;
        const messages = [];

        // --- Username Validation ---
        // Check if username.length is less than 3
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // --- Email Validation ---
        // Check if email includes both ‘@’ and ‘.’ characters
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Email must contain both '@' and '.' characters.");
        }

        // --- Password Validation ---
        // Ensure password.length is at least 8
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Displaying Feedback
        // Make feedbackDiv visible
        feedbackDiv.style.display = "block";
        
        // Remove previous success/error classes
        feedbackDiv.classList.remove('success');

        if (isValid) {
            // Success feedback
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#155724"; // Dark green text
            feedbackDiv.style.backgroundColor = "#d4edda"; // Light green background
            feedbackDiv.style.borderColor = "#c3e6cb"; // Green border
            feedbackDiv.classList.add('success');
            
            // Optional: Clear the form inputs after success
            // form.reset(); 
        } else {
            // Error feedback
            // Revert styles for error
            feedbackDiv.style.color = "#d8000c"; // Red text
            feedbackDiv.style.backgroundColor = "#ffbaba"; // Light red background
            feedbackDiv.style.borderColor = "#d8000c"; // Red border
            
            // Join messages with <br> and assign to innerHTML
            feedbackDiv.innerHTML = messages.join('<br>');
        }
    });
});
