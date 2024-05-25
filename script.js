 // script.js
 // Section 1: TODOs
 // TODO: Register submissions from the user on the form.
 // TODO: Determine the value of the data submitted and add it to a JavaScript array calle
 // TODO: Call the render function to update the table with the new tasks.

// script.js
 // Section 2: App State Variables
 let tasks = [];

 // script.js
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
    taskForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      // Get the values from the form
      const taskName = document.getElementById("taskName").value;
      const taskDescription = document.getElementById("taskDescription").value;
      const taskDeadline = document.getElementById("taskDeadline").value;
  
      // Add the task to the tasks array
      tasks.push({ name: taskName, description: taskDescription, deadline: taskDeadline });
  
      // Call the render function to update the table
      renderTasks();
    });
  });
  
  // Function to render tasks in the table
  function renderTasks() {
    // Clear the existing rows
    taskTable.innerHTML = '';
  
    // Add the header row
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
      <th>Task Name</th>
      <th>Task Description</th>
      <th>Task Deadline</th>
    `;
    taskTable.appendChild(headerRow);
  
    // Add the tasks to the table
    tasks.forEach(task => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${task.name}</td>
        <td>${task.description}</td>
        <td>${task.deadline}</td>
      `;
      taskTable.appendChild(row);
    });
  }
// Function to handle form submissions
function handleSubmission(event) {
    event.preventDefault();
    // TODO: Get form input values
    // TODO: Validate input fields
    // TODO: Update the tasks array
    render();
    }
    // Function to render tasks in the table
    function render() {
    // TODO: Use array methods to create a new table row of data for each item in the arr
    }
    // Function to initialize the table
    function init() {
    taskTable.innerHTML = ''; // Clear the table
    tasks = []; // Reset the tasks array
    render(); // Call the render function
    }