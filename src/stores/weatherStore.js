/**
 *  @file      weatherStore.js
 *  @brief     Store weather informations
 *  @author    Created by Miakel Juillet
 *  @version   28.03.2023
 */

import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', {
  state: () => {
    return {
      city : "",
      weather :[],
      choosenDay : null,
    }
  },
})