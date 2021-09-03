import { i18n } from '../helper'

export default {
  methods: {
    t (key, defaultValue) {
      return i18n.t(key, defaultValue)
    }
  }
}
