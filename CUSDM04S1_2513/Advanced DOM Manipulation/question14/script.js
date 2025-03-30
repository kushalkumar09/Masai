// Get DOM elements
const addTaskButton = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add new task
addTaskButton.onclick = function () {
  const taskText = taskInput.value.trim();
  
  // Only add task if input is not empty
  if (taskText) {
    const newTask = document.createElement('li');
    newTask.textContent = taskText;  // Fixed: Using textContent instead of innerHTML for security
    taskList.appendChild(newTask);    // Fixed: Using appendChild() instead of append()
    taskInput.value = '';            // Clear input after adding
  }
};

// Function to remove tasks
taskList.onclick = function (e) {
  // Fixed: Check if clicked element is an LI (case-insensitive)
  if (e.target.tagName.toLowerCase() === 'li') {
    e.target.remove();
  }
};