import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _092fe0fe = () => interopDefault(import('../pages/covid/covidtracker.vue' /* webpackChunkName: "pages/covid/covidtracker" */))
const _2d6bfa4a = () => interopDefault(import('../pages/music/musicApp.vue' /* webpackChunkName: "pages/music/musicApp" */))
const _74d24698 = () => interopDefault(import('../pages/weather/weatherpage.vue' /* webpackChunkName: "pages/weather/weatherpage" */))
const _3e6fb6c4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/covid/covidtracker",
    component: _092fe0fe,
    name: "covid-covidtracker"
  }, {
    path: "/music/musicApp",
    component: _2d6bfa4a,
    name: "music-musicApp"
  }, {
    path: "/weather/weatherpage",
    component: _74d24698,
    name: "weather-weatherpage"
  }, {
    path: "/",
    component: _3e6fb6c4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
