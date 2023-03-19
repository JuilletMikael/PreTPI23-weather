import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', {
  state: () => {
    return {
      city : null,
      weather :[],
    }
  },
})