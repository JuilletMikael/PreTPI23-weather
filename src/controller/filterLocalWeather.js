import moment from 'moment';
import{ useWeatherStore } from '@/stores/weatherStore';

/**
 * Calculate average wind speed.
 *
 * @param weatherByDay  weather by day informations.
 * @return  number average wind speed.
 */
function AverageWind(weatherByDay) {
    
    var wind = 0;

    weatherByDay.hourly.forEach(weatherHourly => {
        wind = wind + parseInt(weatherHourly.windspeedKmph);
    })

    return wind / weatherByDay.hourly.length;

}

/**
 * Calculate average posibility to have rain.
 *
 * @param weatherByDay  weather by day informations.
 * @return   number chance to have rain. 
 */
function ChanceOfRain(weatherByDay) {

    var rain = 0;

    weatherByDay.hourly.forEach(weatherHourly => {
        rain = rain + parseInt(weatherHourly.chanceofrain);
    })
    
    return rain / weatherByDay.hourly.length;

}

/**
 * Calculate average posibility to have thunder.
 *
 * @param weatherByDay  weather by day informations.
 * @return  number chance to have thunder. 
 */
function ChanceOfThunder(weatherByDay) {

    var thunder = 0;

    weatherByDay.hourly.forEach(weatherHourly => {
        thunder = thunder + parseInt(weatherHourly.chanceofthunder);
    })
    
    return thunder / weatherByDay.hourly.length;

}

/**
 * Calculate time between sunset and sunrise with UTC format.
 *
 * @param weatherByDay  weather by day informations.
 * @return  text `${hours}:${minutes}` ex. 14:30
 */
function DayTime(weatherByDay) {

    var formatSunset;
    var formatSunrise;
    const date = weatherByDay.date;

    weatherByDay.astronomy.forEach(astronomy => {
        const sunset = new Date(date + " " + astronomy.sunset);
        const sunrise = new Date(date + " " + astronomy.sunrise);
        // Transform date to UTC format 
        formatSunset = new Date(sunset.getTime() + (sunset.getTimezoneOffset() * 60000));
        formatSunrise = new Date(sunrise.getTime() + (sunrise.getTimezoneOffset() * 60000));
    })

    // Calcul date time
    const duration = (formatSunset - formatSunrise) / 1000;
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    
    return `${hours}:${minutes}`;   

}

/**
 * Get sunset hour in 12 format and change to 24 format.
 *
 * @param weatherByDay  weather by day informations.
 * @return  sunset time formated in 24 format.
 */
function Sunset(weatherByDay) {

    var time

    weatherByDay.astronomy.forEach(astronomy => {
        time = moment(astronomy.sunset, "hh:mm A").format('HH:mm');
    })
    
    return time;

}

/**
 * Get sunrise hour in 12 format and change to 24 format.
 *
 * @param weatherByDay  weather by day informations.
 * @return  sunrise time formated in 24 format. 
 */
function Sunrise(weatherByDay) {

    var time

    weatherByDay.astronomy.forEach(astronomy => {
        time = moment(astronomy.sunrise, "hh:mm A").format('HH:mm');
    })
    
    return time;

}

/**
 * Filter Daily informations to know what kind of weather it is.  
 * 
 * @param weatherByDay weather by day informations.
 * @return  text of weather. 
 */
function GlobalWeather(weatherByDay) {

    const [hours, minutes] = DayTime(weatherByDay).split(':');
    const time = hours * 60 + parseInt(minutes);
    const sunTimePercent =  time * 100 /weatherByDay.sunHour;

    if ( weatherByDay.totalSnow_cm > 0)   return "snow";
    if ( ChanceOfRain(weatherByDay) >= 50)  return "rain";
    if ( ChanceOfThunder(weatherByDay) >= 50)  return "thunder";
    if ( sunTimePercent >= 70 ) return "sun";
    if ( sunTimePercent < 30) return "cloud";
    if ( sunTimePercent >= 30 && sunTimePercent < 70 ) return "cloudSun";

}

/**
 * Sum millimeter rain precipitation for the day.
 *
 * @param weatherByDay  weather by day informations.
 * @return  number of total precipitation rain.
 */
function TotalRain(weatherByDay) {
    var rain = 0;
    weatherByDay.hourly.forEach(weatherHourly => {
        rain = rain + parseInt(weatherHourly.precipMM);
    })
    
    return rain;
}

/**
 * Make the average degree wind direction and change the degree in the direction.
 *
 * @param weatherByDay weather by day informations.
 * @return  text of cardinal direction.
 */
function WindDirection(weatherByDay) {
    var windDegree = 0;
    weatherByDay.hourly.forEach(weatherHourly => {
        windDegree = windDegree + parseInt(weatherHourly.winddirDegree);
    })
    const degree = windDegree / weatherByDay.hourly.length;

    if (degree < 45 && degree > 315) return "Nord";
    if (degree > 45 && degree < 135) return "Est";
    if (degree > 135 && degree < 225) return "Sud";
    if (degree > 225 && degree < 315) return "Ouest";

}

/**
 * This function filter and format data get.
 *
 * @param data all weather information for the next 14 days.
 * @return  Formated weather informations.
 */
export function FilteredWeather(data) {

    const weather = useWeatherStore()

    weather.city = data.city;

    data.weather.forEach( weatherByDay => {
        
        weather.weather.push({
            averageWind : AverageWind(weatherByDay),
            chanceOfRain : ChanceOfRain(weatherByDay),
            chanceOfThunder : ChanceOfThunder(weatherByDay),
            day : weatherByDay.date,
            dayTime : DayTime(weatherByDay),
            globalWeather : GlobalWeather(weatherByDay),
            maxTempC : weatherByDay.maxtempC,
            minTempC : weatherByDay.mintempC,
            sunHour : weatherByDay.sunHour,
            sunrise : Sunrise(weatherByDay),
            sunset : Sunset(weatherByDay),
            totalRain : TotalRain(weatherByDay),
            totalSnow : weatherByDay.totalSnow_cm,
            windDirection : WindDirection(weatherByDay),
        })


    });

}