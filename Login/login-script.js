
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const loginEmail = document.getElementById('loginEmail').value;
      const loginPassword = document.getElementById('loginPassword').value;
      
      // Retrieve user data from local storage and check the email and password
      const userDataJSON = localStorage.getItem(loginEmail);
      if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        if (userData.password === loginPassword) {
          redirectToHomePage();
        } else {
          alert('Login failed. Please check your credentials.');
        }
      } else {
        alert('User not found. Please register first.');
      }
    });
  });
  
  function redirectToHomePage() {
  
    window.location.href = '../../index.html';
  }
  