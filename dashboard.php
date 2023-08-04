<?php
// dashboard.php

// Include the auth.php file
require_once 'auth.php';

// Check if the user is logged in
if (!isLoggedIn()) {
  // Redirect to the login page if not logged in
  header('Location: login.php');
  exit();
}

// The user is logged in, proceed with the dashboard page
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Dashboard</title>
  <!-- Add your CSS stylesheets here -->
</head>
<body>
  <h1>Welcome, <?php echo $_SESSION['username']; ?></h1>
  
  <!-- Add your dashboard content here -->
  
  <a href="logout.php">Logout</a> <!-- Link to the logout page -->
  
  <!-- Add your JavaScript files here -->
</body>
</html>
