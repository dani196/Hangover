// Function to handle joining the group
function joinGroup(groupId) {
  // Send an AJAX request to join the group
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Successful response
        var response = JSON.parse(xhr.responseText);
        if (response.success) {
          // Joining the group was successful
          alert("You have joined the group successfully!");
          // Hide the join button and show the leave button
          document.getElementById('join-btn').style.display = "none";
          document.getElementById('leave-btn').style.display = "block";
          // Refresh the page to update the members list
          location.reload();
        } else {
          // Joining the group failed
          alert("Failed to join the group. Please try again.");
        }
      } else {
        // Request failed
        alert("An error occurred while processing your request. Please try again.");
      }
    }
  };

  // Send a POST request to the server
  xhr.open("POST", "join-group.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send("groupId=" + groupId);
}

// Function to handle leaving the group
function leaveGroup(groupId) {
  // Send an AJAX request to leave the group
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Successful response
        var response = JSON.parse(xhr.responseText);
        if (response.success) {
          // Leaving the group was successful
          alert("You have left the group successfully!");
          // Hide the leave button and show the join button
          document.getElementById('leave-btn').style.display = "none";
          document.getElementById('join-btn').style.display = "block";
          // Refresh the page to update the members list
          location.reload();
        } else {
          // Leaving the group failed
          alert("Failed to leave the group. Please try again.");
        }
      } else {
        // Request failed
        alert("An error occurred while processing your request. Please try again.");
      }
    }
  };

  // Send a POST request to the server
  xhr.open("POST", "leave-group.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send("groupId=" + groupId);
}
