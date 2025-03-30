document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    const allTasksBtn = document.getElementById("allTasks");
    const completedTasksBtn = document.getElementById("completedTasks");
    const incompleteTasksBtn = document.getElementById("incompleteTasks");
    const sortTasksBtn = document.getElementById("sortTasks");

    const totalCount = document.getElementById("totalCount");
    const completedCount = document.getElementById("completedCount");
    const incompleteCount = document.getElementById("incompleteCount");

    let tasks = [];

    function renderTasks(filter = "all") {
        taskList.innerHTML = "";
        let filteredTasks = tasks;

        if (filter === "completed") {
            filteredTasks = tasks.filter(task => task.completed);
        } else if (filter === "incomplete") {
            filteredTasks = tasks.filter(task => !task.completed);
        }

        filteredTasks.forEach(task => {
            const li = document.createElement("li");
            li.innerHTML = `
                <input type="checkbox" class="toggle" data-id="${task.id}" ${task.completed ? "checked" : ""}>
                <span class="${task.completed ? "completed" : ""}">${task.text}</span>
                <button class="deleteBtn" data-id="${task.id}">❌</button>
            `;
            taskList.appendChild(li);
        });

        updateCounters();
    }

    function updateCounters() {
        totalCount.textContent = tasks.length;
        completedCount.textContent = tasks.filter(task => task.completed).length;
        incompleteCount.textContent = tasks.filter(task => !task.completed).length;
    }

    addTaskBtn.addEventListener("click", () => {
        const text = taskInput.value.trim();
        if (text) {
            tasks.push({ id: Date.now(), text, completed: false });
            taskInput.value = "";
            renderTasks();
        }
    });

    taskList.addEventListener("click", (event) => {
        const id = Number(event.target.dataset.id);

        if (event.target.classList.contains("toggle")) {
            tasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
        } else if (event.target.classList.contains("deleteBtn")) {
            tasks = tasks.filter(task => task.id !== id);
        }

        renderTasks();
    });

    allTasksBtn.addEventListener("click", () => renderTasks("all"));
    completedTasksBtn.addEventListener("click", () => renderTasks("completed"));
    incompleteTasksBtn.addEventListener("click", () => renderTasks("incomplete"));
    
    sortTasksBtn.addEventListener("click", () => {
        tasks.sort((a, b) => a.text.localeCompare(b.text));
        renderTasks();
    });

    renderTasks();
});
