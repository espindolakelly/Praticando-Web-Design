function togglePasswordVisibility() {
  const passwordInput = document.getElementById('senha');
  const toggleIcon = document.querySelector('.toggle-password');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleIcon.classList.add('active');
  } else {
    passwordInput.type = 'password';
    toggleIcon.classList.remove('active');
  }
}
