document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    const inputFields = [nameField, emailField, messageField]; // Collect form fields

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Reset pesan kesalahan dan sukses sebelumnya
        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';
        
        // Validasi formulir
        let valid = true;

        if (!nameField.value || !emailField.value || !messageField.value) {
            errorMessage.textContent = 'Please input your name, email, and your message, so you could submit this!';
            errorMessage.style.display = 'block'; // Show error message
            valid = false;
        } else if (!validateEmail(emailField.value)) {
            errorMessage.textContent = 'Please enter a valid email address!';
            errorMessage.style.display = 'block'; // Show error message
            valid = false;
        }

        if (valid) {
            successMessage.textContent = 'Thank you for your message, love.';
            successMessage.style.display = 'block'; // Show success message
            // Hide form inputs after success
            inputFields.forEach(field => field.style.display = 'none');
            form.reset(); // Reset form after submission
        }
    });

    form.addEventListener('reset', () => {
        errorMessage.style.display = 'none'; // Hide error message
        successMessage.style.display = 'none'; // Hide success message
        // Show form inputs when reset is clicked
        inputFields.forEach(field => field.style.display = 'block');
    });

    // Function to validate email format
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
});
