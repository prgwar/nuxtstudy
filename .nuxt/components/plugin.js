import Vue from 'vue'

const components = {
  CountrySelect: () => import('../../components/countrySelect.vue' /* webpackChunkName: "components/country-select" */).then(c => c.default || c),
  DataBoxes: () => import('../../components/dataBoxes.vue' /* webpackChunkName: "components/data-boxes" */).then(c => c.default || c),
  DataTitle: () => import('../../components/dataTitle.vue' /* webpackChunkName: "components/data-title" */).then(c => c.default || c),
  Header: () => import('../../components/header/header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c),
  HomeCovidhome: () => import('../../components/home/covidhome.vue' /* webpackChunkName: "components/home-covidhome" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
