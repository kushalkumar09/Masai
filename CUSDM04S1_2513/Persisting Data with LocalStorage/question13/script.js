document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
    const searchTask = document.getElementById("searchTask");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function renderTasks(filter = "") {
        taskList.innerHTML = "";
        tasks.filter(task => task.text.toLowerCase().includes(filter.toLowerCase()))
            .forEach(task => {
                const li = document.createElement("li");
                li.className = task.completed ? "completed" : "";
                li.innerHTML = `
                    <span>${task.text}</span>
                    <input type="checkbox" ${task.completed ? "checked" : ""} data-id="${task.id}">
                    <button class="delete" data-id="${task.id}">Delete</button>
                `;
                taskList.appendChild(li);
            });
    }

    addTaskButton.addEventListener("click", () => {
        const text = taskInput.value.trim();
        if (!text) return alert("Task cannot be empty!");
        const newTask = { id: Date.now(), text, completed: false };
        tasks.push(newTask);
        saveTasks();
        renderTasks();
        taskInput.value = "";
    });

    taskList.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            tasks = tasks.filter(task => task.id != event.target.dataset.id);
        } else if (event.target.tagName === "INPUT") {
            tasks.forEach(task => {
                if (task.id == event.target.dataset.id) {
                    task.completed = event.target.checked;
                }
            });
        }
        saveTasks();
        renderTasks();
    });

    searchTask.addEventListener("input", (event) => {
        renderTasks(event.target.value);
    });

    renderTasks();
});
