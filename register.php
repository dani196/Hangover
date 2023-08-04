<?php
// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Database connection details
    $host = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'signup';

    // Create a new connection
    $conn = new mysqli($host, $username, $password, $database);

    // Check the connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and bind the SQL statement
    $stmt = $conn->prepare("INSERT INTO registeration (firstname, lastname, Email, phonenum, Age, Gender, username, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssss", $firstname, $lastname, $Email, $phonenum, $Age, $Gender, $username, $password);

    // Get the form data
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $Email = $_POST['Email'];
    $phonenum = $_POST['phonenum'];
    $Age = $_POST['Age'];
    $Gender = $_POST['Gender'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Execute the statement
    if ($stmt->execute()) {
        // Redirect to registercomplete.php 
        header("Location: registercomplete.html");
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
}
?>
