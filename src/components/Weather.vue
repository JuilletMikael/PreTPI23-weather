<script setup>
import { GetLocalWeather } from '../controller/requests.js';
import { ref } from 'vue';
import WeatherDayDetails from './WeatherDayDetails.vue';
import WeatherWeek from './WeatherWeek.vue'
import{ useWeatherStore } from '@/stores/weatherStore';

const weather = useWeatherStore()
const city = ref('');
const error = ref(null);
const choosenDay = ref(null) 


function SelectChoosenDay(){
    if (choosenDay.value == null){
        return weather.weather[0];
    }
    
    //TODO : make posible to choose the day.
    
}


async function send(){
    if(city.value) error.value = await GetLocalWeather(city.value);
}

</script>

<template>
    <main>
        <input type="text" placeholder="city" v-model="city">
        <button type="button" @click="send()">search</button>

        <div v-if="error">
            <h3>{{ error }}</h3>
        </div>
        
        <div v-else>
            <WeatherDayDetails :weather="SelectChoosenDay()"></WeatherDayDetails>
            <WeatherWeek :weather="weather.weather"></WeatherWeek>
        </div>
    </main>
</template>

<style scoped>
main {
    background: linear-gradient(180deg, #59BEF7 0%, #FFFFFF 100%);
}
</style>
