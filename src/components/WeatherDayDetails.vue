<script setup>
    import moment from 'moment';
    import Models from './Models.vue'

    const props = defineProps({
        weather : Object
    })
</script>

<template>
    <h1>{{ moment(props.weather.day, 'YYYY-MM-DD').format("dddd") }}</h1>

    <div class="model">
        <Models :model="props.weather.globalWeather"></Models>
    </div>

    <h1>{{ props.weather.minTempC }}° {{ props.weather.maxTempC }}°</h1>

    <div>
        <img src="../assets/icon/sunny.svg" alt="sun">
        <span>{{ props.weather.sunHour }}h </span>
    </div>

    <div>
        <img src="../assets/icon/wind.svg" alt="wind">
        <span>
            {{ props.weather.averageWind }}km/h 
            Vent {{ props.weather.windDirection }}
        </span>
    </div>
    
    <div>
        <div>
            <span>{{ props.weather.sunrise }} </span>
            <img src="../assets/icon/sunrise.svg" alt="sun">
            <span>{{ props.weather.sunHour }}h </span>
        </div>
        <div>
            <span>{{ props.weather.sunset }} </span>
            <img src="../assets/icon/sunset.svg" alt="sun">
            <span>{{ props.weather.sunHour }}h </span>
        </div>
        <span> {{props.weather.dayTime }}heures </span>
    </div>

    <div>
        <img src="../assets/icon/raindrops.svg" alt="rain">
        <span>{{ props.weather.totalRain }}mm </span>
        <span>{{ props.weather.chanceOfRain }}% </span>
    </div>
</template>

<style scoped>
.model {
   
}
</style>
