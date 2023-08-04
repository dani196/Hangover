<?php
// auth.php

// Start the session
session_start();

// Function to authenticate the user
function authenticateUser($username, $password) {
  // Replace this with your actual authentication logic
  // For example, if you have a database table for users, you can validate the username and password against that table
  // You can use prepared statements and password hashing for enhanced security
  
  // Assuming you have a users table with columns "username" and "password"
  $validUser = "testuser";
  $validPassword = password_hash("testpassword", PASSWORD_DEFAULT); // Hashed password for "testpassword"
  
  // Check if the provided username exists and the password is correct
  if ($username === $validUser && password_verify($password, $validPassword)) {
    // Authentication successful
    $_SESSION['username'] = $username;
    return true;
  } else {
    // Authentication failed
    return false;
  }
}

// Function to check if the user is logged in
function isLoggedIn() {
  return isset($_SESSION['username']);
}

// Function to log out the user
function logout() {
  // Remove the username from the session
  unset($_SESSION['username']);
  // Destroy the session
  session_destroy();
}
?>
