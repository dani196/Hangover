<?php
// Assuming your signup.php file sets up the $conn variable for the database connection

// Database connection details
$servername = "localhost";
$username = "root";
$password = ""; // Assuming no password is set
$dbname = "signup";

// Establish the database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form input values
    $email = $_POST['Email'];
    $password = $_POST['password'];
 // Check the user's credentials in the database
    // Example query (make sure to replace 'users' with your actual table name)
    $query = "SELECT * FROM registeration WHERE Email = '$email' AND password = '$password'";
    $result = mysqli_query($conn, $query);

    if (!$result) {
        die('Database query failed: ' . mysqli_error($conn));
    }
    // Check if the user exists and the credentials are correct
    if (mysqli_num_rows($result) == 1) {
        // Login successful
        // Redirect the user to the dashboard or perform any desired action
        header("Location: dashboard.html");
        exit();
    } else {
        // Login failed
        // Display an error message to the user
        $error_message = "Invalid email or password";
    }
}


?>
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <!-- Add your CSS and other HTML head elements here -->
</head>
<body>
    <!-- Add your login form and other HTML elements here -->
    <?php if (isset($error_message)): ?>
        <p><?php echo $error_message; ?></p>
    <?php endif; ?>
</body>
</html>