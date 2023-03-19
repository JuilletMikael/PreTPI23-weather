import { GetWeather } from '../model/requests.js';
import { FilteredWeather } from './filterLocalWeather.js';

export async function GetLocalWeather(city){

    const weather = await GetWeather(city);

    if (weather.error)
    {
        return "La ville que vous cherchez n'a pas été trouvée."
    }

    FilteredWeather(weather);

}
