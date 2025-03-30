document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Add task function
    function addTask() {
        const taskText = taskInput.value.trim();
        
        // Validate input
        if (!taskText) {
            alert('Please enter a task!');
            return;
        }
        
        // Create new task item
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        
        // Create task text element
        const taskTextElement = document.createElement('span');
        taskTextElement.className = 'task-text';
        taskTextElement.textContent = taskText;
        
        // Create action buttons container
        const taskActions = document.createElement('div');
        taskActions.className = 'task-actions';
        
        // Create complete button
        const completeBtn = document.createElement('button');
        completeBtn.className = 'complete-btn';
        completeBtn.textContent = 'Complete';
        
        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        
        // Add event listeners to buttons
        completeBtn.addEventListener('click', function() {
            taskTextElement.classList.toggle('completed');
            completeBtn.textContent = taskTextElement.classList.contains('completed') 
                ? 'Undo' 
                : 'Complete';
        });
        
        deleteBtn.addEventListener('click', function() {
            taskItem.remove();
        });
        
        // Append elements
        taskActions.appendChild(completeBtn);
        taskActions.appendChild(deleteBtn);
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(taskActions);
        taskList.appendChild(taskItem);
        
        // Clear input field
        taskInput.value = '';
        taskInput.focus();
    }
    
    // Event listeners
    addTaskBtn.addEventListener('click', addTask);
    
    // Allow adding tasks with Enter key
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});