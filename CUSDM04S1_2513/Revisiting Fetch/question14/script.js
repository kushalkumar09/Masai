const weatherForm = document.getElementById("weatherForm");
const cityInput = document.getElementById("city");
const weatherDisplay = document.getElementById("weather");
const errorMessage = document.getElementById("error-message");

// Replace with your OpenWeather API key
const API_KEY = "YOUR_API_KEY";

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = cityInput.value.trim(); // Remove leading/trailing spaces
  if (city === "") {
    showError("Please enter a city name.");
    return;
  }
  fetchWeather(city);
});

async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found. Please enter a valid city name.");
    }

    const data = await response.json();

    // Display weather information
    weatherDisplay.innerHTML = `
      <h3>Weather in ${data.name}</h3>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Condition: ${data.weather[0].description}</p>
    `;

    // Clear error message if previously shown
    errorMessage.textContent = "";

  } catch (error) {
    showError(error.message);
  }
}

function showError(message) {
  errorMessage.textContent = message;
  weatherDisplay.innerHTML = ""; // Clear previous weather data
}
