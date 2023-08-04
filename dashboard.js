// dashboard.js

// Add event listeners to join and leave buttons
const joinButtons = document.querySelectorAll('.join-btn');
joinButtons.forEach((button) => {
  button.addEventListener('click', handleJoinButtonClick);
});

const leaveButtons = document.querySelectorAll('.leave-btn');
leaveButtons.forEach((button) => {
  button.addEventListener('click', handleLeaveButtonClick);
});

// Handle join button click
function handleJoinButtonClick(event) {
  const groupId = event.target.dataset.groupId;

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
          updateUIAfterJoin(groupId);
        } else {
          // Joining the group failed
          alert(response.message || "Failed to join the group. Please try again.");
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

// Handle leave button click
function handleLeaveButtonClick(event) {
  const groupId = event.target.dataset.groupId;

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
          updateUIAfterLeave(groupId);
        } else {
          // Leaving the group failed
          alert(response.message || "Failed to leave the group. Please try again.");
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

// Update the UI after joining the group
function updateUIAfterJoin(groupId) {
  const joinButton = document.querySelector(`.join-btn[data-group-id="${groupId}"]`);
  const leaveButton = document.querySelector(`.leave-btn[data-group-id="${groupId}"]`);

  if (joinButton && leaveButton) {
    joinButton.style.display = "none";
    leaveButton.style.display = "inline-block";
  }
}

// Update the UI after leaving the group
function updateUIAfterLeave(groupId) {
  const joinButton = document.querySelector(`.join-btn[data-group-id="${groupId}"]`);
  const leaveButton = document.querySelector(`.leave-btn[data-group-id="${groupId}"]`);

  if (joinButton && leaveButton) {
    joinButton.style.display = "inline-block";
    leaveButton.style.display = "none";
  }
}

// Check if the user has already joined the group and update the UI accordingly
function checkJoinedGroups() {
  const groupElements = document.querySelectorAll('.group');
  groupElements.forEach((groupElement) => {
    const groupId = groupElement.querySelector('.join-btn').dataset.groupId;
    const leaveButton = groupElement.querySelector('.leave-btn');

    // Check if the user has already joined the group
    // You need to implement the logic to check if the user is a member of the group on the server-side

    // Assuming you have a function `isUserMemberOfGroup` that checks if the user is a member of the group
    const isMember = isUserMemberOfGroup(groupId);

    if (isMember) {
      groupElement.querySelector('.join-btn').style.display = "none";
      leaveButton.style.display = "inline-block";
    } else {
      groupElement.querySelector('.join-btn').style.display = "inline-block";
      leaveButton.style.display = "none";
    }
  });
}

// Call the function to check if the user has joined any groups when the page loads
checkJoinedGroups();
