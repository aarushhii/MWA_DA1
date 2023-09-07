document.addEventListener('DOMContentLoaded', function () {
  const regForm = document.getElementById('registration-form');
  const nameInput = document.getElementById('regName');
  const emailInput = document.getElementById('regEmail');
  const mobileInput = document.getElementById('regMobile');
  const passwordInput = document.getElementById('regPassword');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const mobileError = document.getElementById('mobileError');

  regForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const mobile = mobileInput.value.trim();
    const password = passwordInput.value;

    nameError.textContent = '';
    emailError.textContent = '';
    mobileError.textContent = '';

    if (name === '') {
      nameError.textContent = 'Name is required';
    }

    if (email === '') {
      emailError.textContent = 'Email is required';
    } else if (!isValidEmail(email)) {
      emailError.textContent = 'Invalid email format';
    }

    if (mobile === '') {
      mobileError.textContent = 'Mobile number is required';
    } else if (!isValidMobile(mobile)) {
      mobileError.textContent = 'Invalid mobile number format';
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    if (name !== '' && isValidEmail(email) && isValidMobile(mobile)) {
      // Store the user's data (including password) in local storage
      const userData = { name, email, mobile, password };
      localStorage.setItem(email, JSON.stringify(userData));
      alert(`Registration successful!, ${name}!`);
      regForm.reset();
    }
  });
});

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function isValidMobile(mobile) {
  const mobilePattern = /^[0-9]{10}$/;
  return mobilePattern.test(mobile);
}
