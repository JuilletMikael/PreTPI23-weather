const url = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_API_KEY;
const format = "format=json";
const parameters = {
  "key": key
};


/**
 * Get current weather conditions, the next 14 days and others
 * q is the parameters name asked for the location 
 *
 * @param location  correspond to the target location
 * @return Response from API 
 */
export function GetWeather(location) {
  return new Promise(resolve => {

    parameters.q = location;
    
    fetch(formatURL("weather.ashx"))
    .then(response => {
      return response.json()
    })
    .then(data => console.log(data.data))
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });

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
    else fullURL = fullURL + "&" + format;

  });

  return fullURL;
}