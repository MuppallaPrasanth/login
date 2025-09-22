document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear any previous error messages
    document.getElementById('error-message').textContent = '';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (for demo purposes)
    if (username === "" || password === "") {
        document.getElementById('error-message').textContent = 'Both fields are required!';
        return;
    }

    // Dummy login validation (you can replace this with actual backend validation)
    if (username === 'admin' && password === 'password123') {
        alert('Login successful!');
        // Redirect to another page or dashboard (for example)
        window.location.href = '/dashboard.html'; // Change this to your target page
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password!';
    }
});
