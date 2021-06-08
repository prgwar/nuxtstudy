import Vue from 'vue'

const components = {
  CovidtempCountrySelect: () => import('../../components/covidtemp/countrySelect.vue' /* webpackChunkName: "components/covidtemp-country-select" */).then(c => c.default || c),
  CovidtempDataBoxes: () => import('../../components/covidtemp/dataBoxes.vue' /* webpackChunkName: "components/covidtemp-data-boxes" */).then(c => c.default || c),
  CovidtempDataTitle: () => import('../../components/covidtemp/dataTitle.vue' /* webpackChunkName: "components/covidtemp-data-title" */).then(c => c.default || c),
  Header: () => import('../../components/header/header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c),
  HomeCovidhome: () => import('../../components/home/covidhome.vue' /* webpackChunkName: "components/home-covidhome" */).then(c => c.default || c),
  WeatherClouds: () => import('../../components/weather/clouds.vue' /* webpackChunkName: "components/weather-clouds" */).then(c => c.default || c),
  WeatherCoordianates: () => import('../../components/weather/coordianates.vue' /* webpackChunkName: "components/weather-coordianates" */).then(c => c.default || c),
  WeatherSun: () => import('../../components/weather/sun.vue' /* webpackChunkName: "components/weather-sun" */).then(c => c.default || c),
  WeatherTemperature: () => import('../../components/weather/temperature.vue' /* webpackChunkName: "components/weather-temperature" */).then(c => c.default || c),
  WeatherApp: () => import('../../components/weather/weatherApp.vue' /* webpackChunkName: "components/weather-app" */).then(c => c.default || c),
  WeatherDisplay: () => import('../../components/weather/weatherDisplay.vue' /* webpackChunkName: "components/weather-display" */).then(c => c.default || c),
  WeatherWinds: () => import('../../components/weather/winds.vue' /* webpackChunkName: "components/weather-winds" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
