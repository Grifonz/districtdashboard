import Vue from 'vue'
import Vuetify, {
  VApp,
  VCard,
  VCardTitle,
  VDivider,
  VToolbar,
  VBtn,
  VSelect,
  VNavigationDrawer,
  VListItemTitle,
  VList,
  VListItemIcon,
  VListItemContent,
  VContent,
  VToolbarTitle,
  VToolbarItems,
  VListItem,
  VIcon,
  VCol,
  VRow,
  VContainer,
  VMenu,
  VSpacer,
  VAppBarNavIcon,
  VAppBar,
  VFlex,
  VLayout,
  VListItemAction,
  VResponsive,
  VTooltip,
  VCardText

} from 'vuetify/lib'
//import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VCardTitle,
    VDivider,
    VToolbar,
    VBtn,
    VSelect,
    VNavigationDrawer,
    VListItemTitle,
    VList,
    VListItemIcon,
    VListItemContent,
    VContent,
    VToolbarTitle,
    VToolbarItems,
    VListItem,
    VIcon,
    VCol,
    VRow,
    VContainer,
    VMenu,
    VSpacer,
    VAppBarNavIcon,
    VAppBar,
    VFlex,
    VLayout,
    VListItemAction,
    VResponsive,
    VTooltip,
    VCardText
  }
})

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg'
  }
});