document.addEventListener("DOMContentLoaded", () => {
 
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Add event listener to the form for submission
  form.addEventListener("submit", (event) => {
    event.preventDefault();  // Prevent the page from refreshing

    // Get the task description from the input field
    const taskDescription = event.target.elements["new-task-description"].value;

    if (taskDescription.trim() === "") {
      // If the task description is empty, do nothing (or alert the user)
      alert("Please enter a task description.");
      return;
    }

    // Call the function to add the task to the list
    buildToDo(taskDescription);

    // Clear the input field after submitting the task
    event.target.elements["new-task-description"].value = "";
  });

  // Function to build a new todo item
  function buildToDo(task) {
    // Create a new <li> element
    const li = document.createElement("li");

    // Set the text content of the list item to the task description
    li.textContent = task;

    // Add the new <li> to the task list
    taskList.appendChild(li);
  }
});