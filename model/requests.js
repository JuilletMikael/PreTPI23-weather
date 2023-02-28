const url = process.env.APIURL;
const key = process.env.APIKEY;
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
function GetWeather(location) {

  headers.q = location;
  console.log(headers);

    xhttp.open("GET", url + "weather.ashx", true);
    xhttp.send();
    xhttp.addEventListener('load', function(){
      console.log(xhttp.responseText);
    })

}

export default {
  GetLocalWeather
}