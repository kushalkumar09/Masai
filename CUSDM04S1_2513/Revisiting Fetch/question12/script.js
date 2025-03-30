document.getElementById("postForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent default form submission
  
    const title = document.getElementById("title").value.trim();
    const body = document.getElementById("body").value.trim();
  
    if (!title || !body) {
      alert("Both fields are required!");
      return;
    }
  
    const postData = {
      title,
      body,
      userId: 1 // Mock user ID as required by the API
    };
  
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
      });
  
      const result = await response.json();
  
      document.getElementById("response").innerHTML = `
        <p><strong>Post ID:</strong> ${result.id}</p>
        <p><strong>Title:</strong> ${result.title}</p>
        <p><strong>Body:</strong> ${result.body}</p>
      `;
  
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create post. Try again!");
    }
  });
  