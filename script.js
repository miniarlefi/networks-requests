const apiKey = "YOUR_API_KEY_HERE"; 

async function getWeather() {
  const city = document.getElementById("city-input").value;
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    const weatherInfo = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
    `;

    document.getElementById("weather-result").innerHTML = weatherInfo;
  } catch (error) {
    document.getElementById("weather-result").innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
