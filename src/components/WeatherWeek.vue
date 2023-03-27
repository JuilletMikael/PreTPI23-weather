<script setup>
import MeteoRenderer from './MeteoRenderer.vue'
import{ useWeatherStore } from '@/stores/weatherStore';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

const weather = useWeatherStore()
const props = defineProps({
    weather : Object
})

dayjs.locale('fr');

function choseDay(day){
    weather.choseDay = day;
}

</script>

<template>
    <div class="weekContainer">
        <div class="weekContainer__day" v-for="(weatherByDay, index) in props.weather" :key="index" >
            <div v-if="index < 7">
                <span>{{ dayjs(weatherByDay.day, 'YYYY-MM-DD').format("dd") }}.</span>
                <div class="weekContainer__model" @click="this.$emit('choosenDay', weatherByDay);">
                    <MeteoRenderer :model="weatherByDay.globalWeather" :canvasIndex="'canvas-' + index"></MeteoRenderer>
                </div>
                <span>{{ weatherByDay.minTempC }}° {{ weatherByDay.maxTempC }}°</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.weekContainer {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    margin-top: 5vh;
}

.weekContainer__model {
    aspect-ratio: 1/1;
    width: 10vw;
    margin: auto;
    cursor: pointer;
}

.weekContainer__day {
   text-align: center;
}

</style>
