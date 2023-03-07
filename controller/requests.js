import { GetWeather } from '../model/requests.js';

export async function GetLocalWeather(city){

    const response = await GetWeather(city);

    if (response.error == "Unable to find any matching weather location to the query submitted!")
    {
        return "La ville que vous cherchez n'a pas été trouvée."
    }

    return response
}
