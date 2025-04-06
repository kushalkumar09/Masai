const form = document.getElementById("registerForm");
const message = document.getElementById("message");

// Replace with your real MockAPI URL
const API_URL = "https://your-mockapi-url.mockapi.io/api/v1/users";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    message.textContent = "Please fill in all fields.";
    message.style.color = "red";
    return;
  }

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    const data = await res.json();
    message.textContent = `User ${data.name} registered successfully!`;
    message.style.color = "green";
    form.reset();
  } catch (error) {
    message.textContent = `Registration failed: ${error.message}`;
    message.style.color = "red";
  }
});
