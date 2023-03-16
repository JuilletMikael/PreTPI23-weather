import '../assets/css/style.css';
import { GetLocalWeather } from '../controller/requests.js';

const weather = await GetLocalWeather('Lausanne');
console.log(weather)

document.querySelector('#app').innerHTML = `
  <input type="text" placeholder="city" value="Lausanne" id="city">
  <button type="button" id="search">search</button>
  <div id="weather-container"></div>
`

const weatherContainer = document.querySelector("#weather-container");


for(let i = 0; i < weather.weather.length; i++) {
  const weatherByDay = weather.weather[i];
  const weatherDiv = document.createElement("div");
  if(i == 0){
    weatherDiv.innerHTML = `
    <div>${weatherByDay.averageWind}</div>
    <div>${weatherByDay.chanceOfRain}</div>
    <div>${weatherByDay.chanceOfThunder}</div>
    <div>${weatherByDay.day}</div>
    <div>${weatherByDay.dayTime}</div>
    <div>${weatherByDay.globalWeather}</div>
    <div>${weatherByDay.maxTempC}</div>
    <div>${weatherByDay.minTempC}</div>
    <div>${weatherByDay.sunHour}</div>
    <div>${weatherByDay.sunrise}</div>
    <div>${weatherByDay.sunset}</div>
    <div>${weatherByDay.totalRain}</div>
    <div>${weatherByDay.totalSnow}</div>
    <div>${weatherByDay.windDirection}</div>
    `;
  }

    weatherDiv.innerHTML = `
    <div>${weatherByDay.maxTempC}</div>
    <div>${weatherByDay.minTempC}</div>
    `;
    weatherContainer.appendChild(weatherDiv);
  }

const input = document.querySelector('#city');
const button = document.querySelector('#search');

// Request API when button clicked.
button.addEventListener('click', async () => {
  const city = input.value;
  if(city) result.innerHTML = await GetLocalWeather(city);
});
