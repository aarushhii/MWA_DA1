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
      // Send the registration data to the server via AJAX
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'process.php', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          if (response.success) {
            alert(response.message); // Display the success message from PHP
            regForm.reset();
          } else {
            alert('Registration failed. Please try again later.');
          }
        }
      };
      const data = `regName=${name}&regEmail=${email}&regMobile=${mobile}&regPassword=${password}`;
      xhr.send(data);
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
