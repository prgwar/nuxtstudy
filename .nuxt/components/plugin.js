import Vue from 'vue'

const components = {
  Header: () => import('../../components/header/header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c),
  HomeCovidhome: () => import('../../components/home/covidhome.vue' /* webpackChunkName: "components/home-covidhome" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
