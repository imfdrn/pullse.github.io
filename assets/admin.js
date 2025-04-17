function checkPassword() {
    const input = document.getElementById('password-input').value;
    if (input === 'igor23122011') {
        document.getElementById('password-overlay').style.display = 'none';
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
}