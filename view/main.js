import '../assets/css/style.css';
import { GetLocalWeather } from '../controller/requests.js';

document.querySelector('#app').innerHTML = `
  <input type="text" placeholder="city" value="Lausanne" id="city">
  <button type="button" id="search">search</button>
  
  <div>
    <div>day</div>
    <div>sun info</div>
    <div>wind info</div>
    <div>sunreis</div>
    <div>sunset</div>
    <div>daily hours</div>
    <div>models</div>
    <div>rain</div>
    <div>degree</div>
  </div>

  <div>
    <div>day</div>
    <div>model</div>
    <div>degree</div>
  </div>

`

const input = document.querySelector('#city');
const button = document.querySelector('#search');

// Request API when button clicked.
button.addEventListener('click', async () => {
  const city = input.value;
  if(city) result.innerHTML = await GetLocalWeather(city);
});
