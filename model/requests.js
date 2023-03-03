const url = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_API_KEY;
const xhttp = new XMLHttpRequest();
const parameters = {
  "key": key
};


/**
 * Get current weather conditions, the next 14 days and others
 * q is the parameters name asked for the location 
 *
 * @param location  correspond to the target location
 */
export function GetWeather(location) {

  parameters.q = location;

  xhttp.open("GET", formatURL("weather.ashx") , true);  
  xhttp.send();
  xhttp.addEventListener('load', function(){
    console.log(xhttp.responseText);
  })

}


/**
 * Format url to add parameters to the url
 *
 * @param apiType  correspond to the aditional part of url to catch a specific data
 * @return  fullURL formated
 */
function formatURL(apiType) {

  var fullURL = url + apiType + "?";

  Object.keys(parameters).forEach( (key, index) => {
    fullURL = fullURL + key + "=" +parameters[key]

    if (index !== Object.keys(parameters).length - 1) {
      fullURL = fullURL + "&";
    }

  });

  return fullURL;
}