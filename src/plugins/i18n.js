import { i18n } from '../helper'

const VuePluginI18n = {
  install (Vue) {
    Vue.prototype.$vueCoreVideoPlayer_t = function (expression) {
      return i18n.t(expression)
    }
  }
}

export default VuePluginI18n
