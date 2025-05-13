document.addEventListener("DOMContentLoaded", () => {
  const activitiesList = document.getElementById("activities-list");
  const activitySelect = document.getElementById("activity");
  const signupForm = document.getElementById("signup-form");
  const messageDiv = document.getElementById("message");
}
  // Function to fetch activities from API
  async function fetchActivities() {
    try {mily: Arial, sans-serif;
      const response = await fetch("/activities");
      const activities = await response.json();
  max-width: 1200px;
      // Clear loading message
      activitiesList.innerHTML = "";
  background-color: #f5f5f5;
      // Populate activities list
      Object.entries(activities).forEach(([name, details]) => {
        const activityCard = document.createElement("div");
        activityCard.className = "activity-card";
  padding: 20px 0;
        const spotsLeft = details.max_participants - details.participants.length;
  background-color: #1a237e;
        // Create participants list
        const participantsList = details.participants.length
          ? `<ul class="participants-list">
              ${details.participants.map((participant) => `<li>${participant}</li>`).join("")}
            </ul>`
          : "<p class='no-participants'>No participants yet.</p>";ottom: 10px;
}
        activityCard.innerHTML = `
          <h4>${name}</h4>main {
          <p>${details.description}</p>
          <p><strong>Schedule:</strong> ${details.schedule}</p>
          <p><strong>Availability:</strong> ${spotsLeft} spots left</p>
          <div class="participants-section">
            <h5>Participants:</h5>
            ${participantsList}
          </div>8px) {
        `;

        activitiesList.appendChild(activityCard);

        // Add option to select dropdown
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        activitySelect.appendChild(option);  border-radius: 5px;
      });
    } catch (error) {
      activitiesList.innerHTML = "<p>Failed to load activities. Please try again later.</p>";  max-width: 500px;
      console.error("Error fetching activities:", error);
    }
  }
bottom: 20px;
  // Handle form submission
  signupForm.addEventListener("submit", async (event) => {bottom: 1px solid #ddd;
    event.preventDefault(); #1a237e;
}
    const email = document.getElementById("email").value;
    const activity = document.getElementById("activity").value;.activity-card {

    try {
      const response = await fetch(
        `/activities/${encodeURIComponent(activity)}/signup?email=${encodeURIComponent(email)}`,
        {olor: #f9f9f9;
          method: "POST",
        }
      );ty-card h4 {
  margin-bottom: 10px;
      const result = await response.json();
}
      if (response.ok) {
        messageDiv.textContent = result.message;
        messageDiv.className = "success";
        signupForm.reset();
        fetchActivities(); // Refresh activities to show updated participants
      } else {
        messageDiv.textContent = result.detail || "An error occurred";
        messageDiv.className = "error";
      }
-group label {
      messageDiv.classList.remove("hidden");play: block;
  margin-bottom: 5px;
      // Hide message after 5 seconds;
      setTimeout(() => {
        messageDiv.classList.add("hidden");
      }, 5000);.form-group input,.form-group select {  width: 100%;  padding: 10px;  border: 1px solid #ddd;  border-radius: 4px;  font-size: 16px;}button {  background-color: #1a237e;  color: white;  border: none;  padding: 10px 15px;  font-size: 16px;  border-radius: 5px;  cursor: pointer;  transition: background-color 0.2s;}button:hover {  background-color: #3949ab;}.message {  margin-top: 20px;  padding: 10px;  border-radius: 4px;}.success {  background-color: #e8f5e9;  color: #2e7d32;  border: 1px solid #a5d6a7;}.error {  background-color: #ffebee;  color: #c62828;  border: 1px solid #ef9a9a;}.info {  background-color: #d1ecf1;  color: #0c5460;  border: 1px solid #bee5eb;}.hidden {  display: none;}footer {  text-align: center;  margin-top: 30px;  padding: 20px;  color: #666;}












});  fetchActivities();  // Initialize app  });    }      console.error("Error signing up:", error);      messageDiv.classList.remove("hidden");      messageDiv.className = "error";      messageDiv.textContent = "Failed to sign up. Please try again.";    } catch (error) {.participants-section {
  margin-top: 15px;
  padding: 10px;
  background-color: #f1f8e9;
  border: 1px solid #c5e1a5;
  border-radius: 5px;
}

.participants-section h5 {
  margin-bottom: 10px;
  color: #558b2f;
}

.participants-list {
  list-style-type: disc;
  padding-left: 20px;
  margin: 0;
}

.no-participants {
  color: #757575;
  font-style: italic;
}
