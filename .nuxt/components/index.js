export { default as HomeCovidhome } from '../../components/home/covidhome.vue'
export { default as CovidtempCountrySelect } from '../../components/covidtemp/countrySelect.vue'
export { default as CovidtempDataBoxes } from '../../components/covidtemp/dataBoxes.vue'
export { default as CovidtempDataTitle } from '../../components/covidtemp/dataTitle.vue'
export { default as Header } from '../../components/header/header.vue'
export { default as WeatherApp } from '../../components/weather/weatherApp.vue'

export const LazyHomeCovidhome = import('../../components/home/covidhome.vue' /* webpackChunkName: "components/home-covidhome" */).then(c => c.default || c)
export const LazyCovidtempCountrySelect = import('../../components/covidtemp/countrySelect.vue' /* webpackChunkName: "components/covidtemp-country-select" */).then(c => c.default || c)
export const LazyCovidtempDataBoxes = import('../../components/covidtemp/dataBoxes.vue' /* webpackChunkName: "components/covidtemp-data-boxes" */).then(c => c.default || c)
export const LazyCovidtempDataTitle = import('../../components/covidtemp/dataTitle.vue' /* webpackChunkName: "components/covidtemp-data-title" */).then(c => c.default || c)
export const LazyHeader = import('../../components/header/header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyWeatherApp = import('../../components/weather/weatherApp.vue' /* webpackChunkName: "components/weather-app" */).then(c => c.default || c)
