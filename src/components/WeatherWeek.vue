<script setup>

const props = defineProps({
    weather : Object
})

</script>

<template>
    <div v-for="weatherByDay in props.weather">
        {{ weatherByDay }}
    </div>
</template>

<style scoped>

</style>
