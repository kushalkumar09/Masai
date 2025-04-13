const input = document.getElementById("search");
const resultsDiv = document.getElementById("results");
let debounceTimeout;

input.addEventListener("input", () => {
  clearTimeout(debounceTimeout);
  console.log("input event triggered:", input.value);

  debounceTimeout = setTimeout(() => {
    console.log("debounced input:", input.value);
    const query = input.value.trim();
    if (query.length > 0) {
      searchMovies(query);
    } else {
      resultsDiv.innerHTML = "";
      resultsDiv.style.display = "none";
    }
  }, 400);
});

async function searchMovies(query) {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=65671480&s=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    resultsDiv.style.display = "block";

    if (data.Response === "True") {
      resultsDiv.innerHTML = data.Search.map(
        (movie) => `
        <div class="movie">${movie.Title} (${movie.Year})</div>
      `
      ).join("");
    } else {
      resultsDiv.innerHTML = `<p>No results found</p>`;
    }
  } catch (error) {
    resultsDiv.innerHTML = `<p>Failed to fetch movies</p>`;
    console.error(error);
  }
}
