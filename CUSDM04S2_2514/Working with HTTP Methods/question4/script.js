const API_URL = "https://your-mockapi-url.mockapi.io/api/v1/tasks"; // Replace with your own

const taskList = document.getElementById("taskList");
const modal = document.getElementById("editModal");
const closeBtn = document.querySelector(".close");
const editTitle = document.getElementById("editTitle");
const editStatus = document.getElementById("editStatus");
const saveBtn = document.getElementById("saveBtn");

let currentEditId = null;

// Fetch tasks on load
async function fetchTasks() {
  try {
    const res = await fetch(API_URL);
    const tasks = await res.json();
    renderTasks(tasks);
  } catch (err) {
    taskList.innerHTML = "<li>Error fetching tasks</li>";
  }
}

function renderTasks(tasks) {
  taskList.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task.title} - <strong>${task.status}</strong></span>
      <div>
        <button onclick="editTask('${task.id}', '${task.title}', '${task.status}')">Edit</button>
        <button class="delete" onclick="deleteTask('${task.id}')">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

// Delete a task
async function deleteTask(id) {
  if (!confirm("Are you sure you want to delete this task?")) return;

  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Delete failed");
    fetchTasks();
  } catch (err) {
    alert("Error deleting task");
  }
}

// Edit a task
function editTask(id, title, status) {
  currentEditId = id;
  editTitle.value = title;
  editStatus.value = status;
  modal.style.display = "flex";
}

// Save edited task
saveBtn.addEventListener("click", async () => {
  const title = editTitle.value.trim();
  const status = editStatus.value;

  if (!title) return alert("Title cannot be empty");

  try {
    const res = await fetch(`${API_URL}/${currentEditId}`, {
      method: "PATCH", // or PUT
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, status }),
    });

    if (!res.ok) throw new Error("Update failed");

    modal.style.display = "none";
    fetchTasks();
  } catch (err) {
    alert("Error updating task");
  }
});

// Close modal
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};

// Init
fetchTasks();
