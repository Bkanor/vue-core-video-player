import Vue from 'vue'
import { i18n } from '../helper'

Vue.directive('vueCoreVideoPlayer_t', {
  bind: function (el, binding) {
    el.innerText = i18n.vueCoreVideoPlayer_t(binding.expression)
  }
})
