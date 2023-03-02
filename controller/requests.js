import { GetWeather } from '../model/requests.js';

export function GetLocalWeather(){
    GetWeather('lausanne');
}
