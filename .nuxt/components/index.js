export { default as CountrySelect } from '../../components/countrySelect.vue'
export { default as DataBoxes } from '../../components/dataBoxes.vue'
export { default as DataTitle } from '../../components/dataTitle.vue'
export { default as Header } from '../../components/header/header.vue'
export { default as HomeCovidhome } from '../../components/home/covidhome.vue'

export const LazyCountrySelect = import('../../components/countrySelect.vue' /* webpackChunkName: "components/country-select" */).then(c => c.default || c)
export const LazyDataBoxes = import('../../components/dataBoxes.vue' /* webpackChunkName: "components/data-boxes" */).then(c => c.default || c)
export const LazyDataTitle = import('../../components/dataTitle.vue' /* webpackChunkName: "components/data-title" */).then(c => c.default || c)
export const LazyHeader = import('../../components/header/header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyHomeCovidhome = import('../../components/home/covidhome.vue' /* webpackChunkName: "components/home-covidhome" */).then(c => c.default || c)
