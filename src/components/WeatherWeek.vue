<script setup>
import moment from 'moment';
import Models from './Models.vue'

const props = defineProps({
    weather : Object
})

</script>

<template>
    <div v-for="(weatherByDay, index) in props.weather" :key="index" >
        <div v-if="index < 7">
            <span>{{ moment(weatherByDay.day, 'YYYY-MM-DD').format("dddd") }}</span>
            <div class="model">
                <Models :model="weatherByDay.globalWeather"></Models>
            </div>
            <span>{{ weatherByDay.minTempC }}° {{ weatherByDay.maxTempC }}°</span>
        </div>
        
    </div>
</template>

<style scoped>
.model {
    aspect-ratio: 1/1;
}
</style>
