 // script.js
 // Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array called tasks
// TODO: Call the render function to update the table with the new tasks.

// Section 2: App State Variables
let tasks = [];

// Section 3: Cached Element References
let taskForm = null;
let taskTable = null;

document.addEventListener("DOMContentLoaded", () => {
  taskForm = document.getElementById("taskForm");
  taskTable = document.getElementById("taskTable");

  // Log the values to the console
  console.log("taskForm:", taskForm);
  console.log("taskTable:", taskTable);

  // Check if elements are selected correctly
  if (taskForm === null || taskTable === null) {
    console.error("Failed to select elements. Check the IDs and try again.");
    return;
  }

  // Register form submission
  taskForm.addEventListener("submit", handleSubmission);
});

// Function to handle form submissions
function handleSubmission(event) {
  event.preventDefault();

  // TODO: Get form input values
  const taskName = document.getElementById("taskName").value;
  const taskDescription = document.getElementById("taskDescription").value;
  const taskDeadline = document.getElementById("taskDeadline").value;

  // TODO: Validate input fields
  if (taskName === '' || taskDeadline === '') {
    alert('Task name and deadline are required!');
    return;
  }

  // TODO: Update the tasks array
  tasks.push({ name: taskName, description: taskDescription, deadline: taskDeadline });

  render();
}

// Function to render tasks in the table
function render() {
  // TODO: Use array methods to create a new table row of data for each item in the arr
  taskTable.innerHTML = `
    <tr>
      <th>Task Name</th>
      <th>Task Description</th>
      <th>Task Deadline</th>
      <th>Actions</th>
    </tr>
    ${tasks.map(task => `
      <tr>
        <td>${task.name}</td>
        <td>${task.description}</td>
        <td>${task.deadline}</td>
        <td>
          <button onclick="markTaskComplete(this)">Complete</button>
          <button onclick="removeTask(this)">Remove</button>
        </td>
      </tr>
    `).join('')}
  `;
}

// Function to initialize the table
function init() {
  taskTable.innerHTML = ''; // Clear the table
  tasks = []; // Reset the tasks array
  render(); // Call the render function
}

// Placeholder functions for actions
function markTaskComplete(button) {
    // Implementation for marking task as complete
  }
  
  function removeTask(button) {
    // Implementation for removing task
  }