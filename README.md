# districtdashboard

Districtdashboard is a dashboard designed to allow the user to verify their customer portfolio.
From the navigation bar it is possible to verify the goals reached by the user thanks to the target tab.
The charts can be dragged and dropped according to the user needs

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Run on browser
```
localhost:8080
```

### Compiles and minifies for production
```
npm run build
```

## Usage:

### main.js
```js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')



```


