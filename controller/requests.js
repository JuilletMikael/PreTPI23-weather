import { GetWeather } from '../model/requests.js';

export async function GetLocalWeather(city){
    return await GetWeather(city);
}
