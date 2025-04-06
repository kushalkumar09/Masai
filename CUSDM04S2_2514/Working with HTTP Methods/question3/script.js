const userForm = document.getElementById("userForm");
const userList = document.getElementById("userList");
const message = document.getElementById("message");

const API_URL = "https://your-mockapi-url.mockapi.io/api/v1/users"; // Replace this with your real MockAPI endpoint

// Fetch and display users
async function fetchUsers() {
  userList.innerHTML = "Loading...";
  try {
    const res = await fetch(API_URL);
    const users = await res.json();
    renderUsers(users);
  } catch (err) {
    userList.innerHTML = "Failed to load users.";
  }
}

// Render user list
function renderUsers(users) {
  userList.innerHTML = "";
  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `${user.name} (${user.email})`;
    userList.appendChild(li);
  });
}

// Handle form submission
userForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    message.textContent = "All fields are required.";
    message.style.color = "red";
    return;
  }

  try {
    // Optional: check for duplicates first (you can skip if not needed)
    const res = await fetch(API_URL);
    const users = await res.json();
    const duplicate = users.find(u => u.email === email);
    if (duplicate) {
      message.textContent = "Email already exists.";
      message.style.color = "red";
      return;
    }

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email })
    });

    if (!response.ok) throw new Error("Failed to add user");

    message.textContent = "User added successfully!";
    message.style.color = "green";
    userForm.reset();
    fetchUsers(); // Refresh list
  } catch (error) {
    message.textContent = `Error: ${error.message}`;
    message.style.color = "red";
  }
});

// Initial Load
fetchUsers();
