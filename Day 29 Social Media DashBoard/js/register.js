document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;

        // Simple validation
        if (username && email && password) {
            localStorage.setItem('username', username);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password); // In practice, hash passwords
            alert('Account created successfully!');
            window.location.href = 'login.html'; // Redirect to login page
        } else {
            alert('Please fill in all fields.');
        }
    });
});
