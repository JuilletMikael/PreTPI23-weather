<script setup>
import { GetLocalWeather } from '../controller/requests.js';
import { ref, onMounted } from 'vue';
import WeatherDayDetails from './WeatherDayDetails.vue';
import WeatherWeek from './WeatherWeek.vue'
import{ useWeatherStore } from '@/stores/weatherStore';

const weather = useWeatherStore()
const error = ref(null);
const choosenDay = ref(null) 

function SelectChoosenDay(){
    if (choosenDay.value == null){
        return weather.weather[0];
    }
    
    //TODO : make posible to choose the day.
}

async function send(){
    if(weather.city) {
        weather.weather = [];
        error.value = await GetLocalWeather(weather.city);
    }
}

</script>

<template>
    <main>
        <input type="text" placeholder="city" v-model="weather.city">
        <button type="button" @click="send()">search</button>

        <div v-if="error">
            <h3>{{ error }}</h3>
        </div>
        
        <div v-if="weather.weather.length > 0 ">
            <WeatherDayDetails :weather="SelectChoosenDay()"></WeatherDayDetails>
            <WeatherWeek :weather="weather.weather"></WeatherWeek>
        </div>
    </main>
</template>

<style scoped>
main {
    background: linear-gradient(180deg, #59BEF7 0%, #FFFFFF 100%);
    min-height: 100vh;
}
</style>
