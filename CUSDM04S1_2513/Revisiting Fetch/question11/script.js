document.addEventListener("DOMContentLoaded", fetchUsers);

// Function to fetch users from the API
function fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => displayUsers(users))
        .catch(error => console.error("Error fetching users:", error));
}

// Function to display users in an unordered list
function displayUsers(users) {
    const userList = document.getElementById("user-list");
    userList.innerHTML = ""; // Clear previous content

    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user.name;
        
        // Show email alert on click
        li.addEventListener("click", () => alert(`Email: ${user.email}`));

        userList.appendChild(li);
    });
}
