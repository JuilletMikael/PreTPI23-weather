<script setup>
    import moment from 'moment';
    import MeteoRenderer from './MeteoRenderer.vue'

    const props = defineProps({
        weather : Object
    })
</script>

<template>
    <div class="weatherContainer">
        <h1 class="weatherContainer__title">
            {{ moment(props.weather.day, 'YYYY-MM-DD').format("dddd") }}
        </h1>

        <div class="weatherContainer__model">
            <MeteoRenderer :model="props.weather.globalWeather"></MeteoRenderer>
        </div>

        <h1 class="weatherContainer__temp">
            {{ props.weather.minTempC }}° {{ props.weather.maxTempC }}°
        </h1>

        <div class="weatherContainer__sunHour">
            <img src="../assets/icon/sunny.svg" alt="sun">
            <span>{{ props.weather.sunHour }}h </span>
        </div>

        <div class="weatherContainer__windInfo">
            <img src="../assets/icon/wind.svg" alt="wind">
            <span>
                {{ props.weather.averageWind }}km/h 
                <br>
                Vent {{ props.weather.windDirection }}
            </span>
        </div>
        
        <div class="weatherContainer__sunInfo">
            <div class="weatherContainer__sunInfo--hour">
                <div>
                    <span>{{ props.weather.sunrise }} </span>
                    <img src="../assets/icon/sunrise.svg" alt="sun">
                </div>
                <div>
                    <span>{{ props.weather.sunset }} </span>
                    <img src="../assets/icon/sunset.svg" alt="sun">
                </div>
            </div>
            
            <div> {{props.weather.dayTime }}heures </div>
        </div>

        <div class="weatherContainer__rainInfo">
            <img src="../assets/icon/raindrops.svg" alt="rain">
            <span>
                {{ props.weather.totalRain }}mm
                <br>
                {{ props.weather.chanceOfRain }}% 
            </span>
        </div>
    </div>
</template>

<style scoped>
.weatherContainer{
    align-content: center;
    text-align: center;
    justify-content: center;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 0.5fr 1fr 1fr 0.5fr;
    margin: 0 13vw;
    justify-items: center;
    align-items: center;
}

.weatherContainer__model {
    width: max-content;
    grid-column: 2 / 3;
    grid-row: 2 / 4;
}

.weatherContainer__title{
    grid-column: 2 / 3;
    grid-row: 1 / 2;
}


.weatherContainer__temp{
    grid-column: 2 / 3;
    grid-row: 4 / 5; 
}

.weatherContainer__sunHour{
    grid-column: 1 / 2;
    grid-row: 2 / 3; 
    display: flex;
    align-items: center;
}
.weatherContainer__sunHour img{
    margin-right: 0.5rem;
}

.weatherContainer__sunInfo{
    grid-column: 1 / 2;
    grid-row: 3 / 4; 
}

.weatherContainer__sunInfo--hour{
    display: inline-flex;
    margin: 0 2px;
}

.weatherContainer__sunInfo--hour span{
    display: block;
}

.weatherContainer__rainInfo{
    grid-column: 3 / 4;
    grid-row: 3 / 4; 
    display: flex;
    align-items: center;
}

.weatherContainer__rainInfo img{
    margin-right: 0.5rem;
}

.weatherContainer__windInfo{
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    display: flex;
    align-items: center; 
}

.weatherContainer__windInfo img{
    margin-right: 0.5rem;
}

</style>
