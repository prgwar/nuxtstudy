export { default as Header } from '../../components/header/header.vue'
export { default as HomeCovidhome } from '../../components/home/covidhome.vue'

export const LazyHeader = import('../../components/header/header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyHomeCovidhome = import('../../components/home/covidhome.vue' /* webpackChunkName: "components/home-covidhome" */).then(c => c.default || c)
