function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'cfafc1926d48aed9a84f7db7b222427b'; // Replace 'your_api_key_here' with your actual OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const displayData = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].main}</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
                
            `;
            document.getElementById('weatherResult').innerHTML = displayData;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('weatherResult').innerHTML = '<p>An error occurred: No weather information found!</p>';
        });
}
