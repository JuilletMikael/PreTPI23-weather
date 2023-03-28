<script setup>
/**
 *  @file      Weather.vue
 *  @brief     Vue or component that used WeatherDayDetails and WeatherWeek to have a full weather.
 *  @author    Created by Miakel Juillet
 *  @version   28.03.2023
 */

import { GetLocalWeather } from '../controller/requests.js';
import { ref, onMounted } from 'vue';
import WeatherDayDetails from './WeatherDayDetails.vue';
import WeatherWeek from './WeatherWeek.vue'
import{ useWeatherStore } from '@/stores/weatherStore';

const weather = useWeatherStore()
const error = ref(null);
const choosenDay = ref(null) 

/**
 * This function select the correct choosen day. 
 * 
 * @returns object content the specific choosen day.
 */
function SelectChoosenDay(){
    if (choosenDay.value == null){
        return weather.weather[0];
    }    
    return choosenDay.value
}

/**
 * This function attribute the choosen day returned by WeatherWeek.
 * 
 * @param {Object} value valuue retured by WeatherWeek
 */
function changeChoosenDay(value) {
    choosenDay.value = value;
}

/**
 * This function send data to GetLocalWeather.
 */
async function send(){
    if(weather.city) {
        weather.weather = [];
        error.value = await GetLocalWeather(weather.city);
    }
}
</script>

<template>
    <main>
        
        <input type="text" placeholder="city" v-model="weather.city" @keyup.enter="send()">
        <div v-if="error">
            <h3>{{ error }}</h3>
        </div>
        
        <div v-if="weather.weather.length > 0 ">
            <WeatherDayDetails :weather="SelectChoosenDay()"></WeatherDayDetails>
            <WeatherWeek :weather="weather.weather" @choosenDay="changeChoosenDay"></WeatherWeek>
        </div>
    </main>
</template>

<style scoped>
    main {
        background: linear-gradient(180deg, #59BEF7 0%, #FFFFFF 100%);
        min-height: 100vh;
        width: 100%;
        position: absolute;
    }

    input {
        border-radius: 1.5rem;
        padding: 0.4rem;
        padding-left: 40px;
        margin: 20px;
        display: block;
        background: white url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center;    
    }
</style>
