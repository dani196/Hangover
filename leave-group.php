<?php
// Connect to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "signup";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Include the auth.php file for user authentication functions
include "auth.php";

// Check if the user is logged in
if (isLoggedIn() && $_SERVER["REQUEST_METHOD"] === "POST") {
  $groupId = $_POST["groupId"];
  $username = $_SESSION['username']; // Retrieve the username from the session variable

  // Delete the user from the user_groups table
  $sql = "DELETE FROM user_groups WHERE user_id = '$username' AND group_id = '$groupId'";
  if (mysqli_query($conn, $sql)) {
    $response = array("success" => true);
  } else {
    $response = array("success" => false, "message" => "Failed to leave the group. Please try again.");
  }

  // Send the response back to the client as JSON
  echo json_encode($response);
}

mysqli_close($conn);
?>
