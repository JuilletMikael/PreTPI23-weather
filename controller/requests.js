import { GetWeather } from '../model/requests.js';
import { Init } from '../controller/models.js';
import { FilteredWeather } from '../controller/filterLocalWeather.js';

export async function GetLocalWeather(city){

    const response = await GetWeather(city);

    if (response.error == "Unable to find any matching weather location to the query submitted!")
    {
        return "La ville que vous cherchez n'a pas été trouvée."
    }

    const filtredWeather = FilteredWeather(response);


    return filtredWeather;
}
