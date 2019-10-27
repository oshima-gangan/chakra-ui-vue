import { parsePackIcons } from '../utils/icons'
import internalIcons from '../../lib/plugin/iconsPaths'

/**
 * Kiwi Component library plugin
 */
const Kiwi = {
  install (Vue, options = {}) {
    let packIcons = {}
    const extendedIcons = options.icons.extend || {}

    if (options.icons.iconPack) {
      packIcons = parsePackIcons(options.icons.iconPack, options.icons.iconSet)
    }

    const icons = {
      ...internalIcons,
      ...packIcons,
      ...extendedIcons
    }

    // Bind theme and icons to prototype
    Vue.prototype.$kiwi = {
      theme: options.theme,
      icons
    }
  }
}

export default Kiwi