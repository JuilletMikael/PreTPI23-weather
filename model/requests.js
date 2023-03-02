const url = import.meta.env.APIURL;
const key = import.meta.env.APIKEY;
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
  console.log(headers);

    xhttp.open("GET", url + "weather.ashx", true);
    xhttp.send();
    xhttp.addEventListener('load', function(){
      console.log(xhttp.responseText);
    })

}