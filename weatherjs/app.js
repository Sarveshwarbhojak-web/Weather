const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");

const api_key = "cdccf261059bd7fb01c4c9523ef971e6";
async function checkWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );
  console.log(weather_data);
  temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)} °C`;
  description.innerHTML = `${weather_data.weather[0].description}`;
  humidity.innerHTML = `${weather_data.main.humidity}%`;
  wind_speed.innerHTML = `${weather_data.main.wind.speed}km/H`;

  switch (weather_data.weather[0].main) {
    case "Clouds":
      weather_img.src = "cloud.png";
    case "Clear":
      weather_img.src = "clear.png";
    case "Rain":
      weather_img.src = "rain.png";
    case "Mist":
      weather_img.src = "mist.png";
    case "snow":
      weather_img.src = "snow.png";
  }
  console.log(temperature);
}

searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
