import i18n from './helper/i18n'
import VueCoreVideoPlayer from './vue-core-video-player.vue'
import BaseVideoCore from './core/base'
import EVENTS from './constants/EVENTS'

const VueCoreVideoPlayerPlugin = {
  install (Vue, options = {}) {
    i18n.setLocale(options.lang)
    Vue.component('vue-core-video-player', VueCoreVideoPlayer)
  }
}

export default VueCoreVideoPlayerPlugin
export {
  BaseVideoCore,
  EVENTS
}
