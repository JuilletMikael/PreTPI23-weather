import { GetWeather } from '../model/requests.js';

function GetLocalWeather(){
    GetWeather('lausanne');
}

export default {
    GetLocalWeather
}