export { default as AppHeader } from '../../components/AppHeader.vue'

export const LazyAppHeader = import('../../components/AppHeader.vue' /* webpackChunkName: "components/app-header" */).then(c => c.default || c)
