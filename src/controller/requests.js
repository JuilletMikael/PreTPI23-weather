/**
 *  @file      requests.js
 *  @brief     Used to manage diffrents requests.
 *  @author    Created by Miakel Juillet
 *  @version   28.03.2023
 */

import { GetWeather } from '../model/requests.js';
import { FilteredWeather } from './filterLocalWeather.js';

/**
 * This function used to getWeather, return error if the weather request return error.
 * 
 * @param {string} city name of a city.
 * @returns an error if is there an error.
 */
export async function GetLocalWeather(city){

    const weather = await GetWeather(city);

    if (weather.error)
    {
        return "La ville que vous cherchez n'a pas été trouvée."
    }

    FilteredWeather(weather);

}
