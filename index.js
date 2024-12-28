function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.src = 'unvisible eye.png'; // Update with the "hide" eye icon
    } else {
        passwordField.type = 'password';
        eyeIcon.src = 'visible eye.png'; // Update with the "show" eye icon
    }
}
