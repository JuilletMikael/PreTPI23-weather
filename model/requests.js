const url = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_API_KEY;
const xhttp = new XMLHttpRequest();
const headers = {
  "key": key
};


/**
 * q correspond to location 
 *
 * @param city  
 * @return  
 */
export function GetWeather(location) {

  headers.q = location;

  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.open("GET", url + "weather.ashx", true);
  xhttp.send();
  xhttp.addEventListener('load', function(){
    console.log(xhttp.responseText);
  })

}