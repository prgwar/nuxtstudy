import Vue from 'vue'

const components = {
  HomeCovidhome: () => import('../../components/home/covidhome.vue' /* webpackChunkName: "components/home-covidhome" */).then(c => c.default || c),
  CovidtempCountrySelect: () => import('../../components/covidtemp/countrySelect.vue' /* webpackChunkName: "components/covidtemp-country-select" */).then(c => c.default || c),
  CovidtempDataBoxes: () => import('../../components/covidtemp/dataBoxes.vue' /* webpackChunkName: "components/covidtemp-data-boxes" */).then(c => c.default || c),
  CovidtempDataTitle: () => import('../../components/covidtemp/dataTitle.vue' /* webpackChunkName: "components/covidtemp-data-title" */).then(c => c.default || c),
  Header: () => import('../../components/header/header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c),
  WeatherApp: () => import('../../components/weather/weatherApp.vue' /* webpackChunkName: "components/weather-app" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
