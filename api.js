async function getWeather() {
    const location = document.getElementById("location").value;
    const weatherOutput = document.getElementById("weather-output");

    if (location === "") {
        alert("Please enter a location.");
        return;
    }

    try {
        const apiKey = "bfc679ff243546d8a44131603250802";  // Your updated API key
        const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`Error: ${data.error.message}`);
        }

        
        const temperature = data.current.temp_c;
        const condition = data.current.condition.text;
        const icon = data.current.condition.icon;
        const locationName = data.location.name;
        const country = data.location.country;
        const airQuality = data.current.air_quality.pm10;

      
        weatherOutput.innerHTML = `
            <h2>Weather in ${locationName}, ${country}</h2>
            <img src="https:${icon}" alt="Weather icon">
            <p>${condition}</p>
            <h3>${temperature}°C</h3>
            <p><strong>Air Quality (PM10):</strong> ${airQuality}</p>
        `;
    } catch (error) {
        console.error(error);
        weatherOutput.innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
    }
}
