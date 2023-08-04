// Assuming you have a database connection and user collection

// Function to check if the user exists in the database
function checkUserExists(email, password) {
    // Perform a database query to check if the user exists with the provided email and password
    // Return a promise that resolves with the user data if found, or rejects if not found or an error occurs
    return new Promise((resolve, reject) => {
      // Perform the database query here
      // Example using a mock user collection
      const user = users.find((user) => user.Email === email && user.password === password);
      if (user) {
        resolve(user);
      } else {
        reject(new Error('Invalid email or password'));
      }
    });
  }
  
  // Function to handle the login form submission
  function handleLoginFormSubmit(event) {
    event.preventDefault();
    
    // Get the form input values
    const email = document.getElementById('Email').value;
    const password = document.getElementById('password').value;
    
    // Call the checkUserExists function to validate the credentials
    checkUserExists(Email, password)
      .then((user) => {
        // Login successful
        // Redirect the user to the dashboard.html or perform any desired action
        window.location.href = 'dashboard.html';
      })
      .catch((error) => {
        // Login failed
        // Display an error message to the user
        const errorElement = document.getElementById('error-message');
        errorElement.textContent = error.message;
      });
  }
  
  // Add event listener to the login form submit event
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', handleLoginFormSubmit);
  