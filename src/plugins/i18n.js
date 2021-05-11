import { i18n } from '../helper'

const VuePluginI18n = {
  install (Vue) {
    Vue.prototype.$vueCoreVideoPlayer_t = function (expression) {
      return i18n.vueCoreVideoPlayer_t(expression)
    }
  }
}

export default VuePluginI18n
