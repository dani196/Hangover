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
  $groupId = $_POST["groupid"];
  $username = $_SESSION['username']; // Retrieve the username from the session variable

  // Check if the user is already a member of the group
  $sql = "SELECT * FROM user_groups WHERE user_id = '$username' AND group_id = '$groupId'";
  $result = mysqli_query($conn, $sql);

  if (mysqli_num_rows($result) > 0) {
    // User is already a member of the group
    $response = array("success" => false, "message" => "You are already a member of this group.");
  } else {
    // Insert the user into the user_groups table
    $sql = "INSERT INTO user_groups (user_id, group_id) VALUES ('$username', '$groupId')";
    if (mysqli_query($conn, $sql)) {
      $response = array("success" => true);
    } else {
      $response = array("success" => false, "message" => "Failed to join the group. Please try again.");
    }
  }

  // Send the response back to the client as JSON
  echo json_encode($response);
}

mysqli_close($conn);
?>
