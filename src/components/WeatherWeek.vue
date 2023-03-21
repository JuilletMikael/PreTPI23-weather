<script setup>
import moment from 'moment';
import { onMounted } from 'vue';
import MeteoRenderer from './MeteoRenderer.vue'

import localization from 'moment/locale/fr';

moment.updateLocale('fr', localization);

const props = defineProps({
    weather : Object
})

</script>

<template>
    <div class="weekContainer">
        <div class="weekContainer__day" v-for="(weatherByDay, index) in props.weather" :key="index" >
            <div v-if="index < 7">
                <span>{{ moment(weatherByDay.day, 'YYYY-MM-DD').format("dddd") }}</span>
                <div class="weekContainer__model">
                    <MeteoRenderer :model="weatherByDay.globalWeather"></MeteoRenderer>
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
}

.weekContainer__day {
   text-align: center;
}

</style>
