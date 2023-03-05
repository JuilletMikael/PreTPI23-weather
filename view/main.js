import '../assets/css/style.css';
import '../controller/models.js';
import { GetLocalWeather } from '../controller/requests.js';

document.querySelector('#app').innerHTML = `
  <input type="text" placeholder="city" value="Lausanne" id="city">
  <button type="button" id="search">search</button>
  <div id="result"></div>
`

const input = document.querySelector('#city');
const button = document.querySelector('#search');

// Request API when button clicked.
button.addEventListener('click', async () => {
  const city = input.value;
  result.innerHTML = await GetLocalWeather(city);
});
