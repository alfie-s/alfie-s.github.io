const apiKey = WEATHER_API;
const city = 'Exeter';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherDiv = document.getElementById('weather');
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        weatherDiv.innerHTML = `
                    <img src="${iconUrl}" alt="Weather icon" class="weather-icon">
                    <p>City: ${data.name}</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Temperature: ${data.main.temp} °C</p>
                `;
    })
    .catch(error => console.error('Error fetching weather data:', error));
