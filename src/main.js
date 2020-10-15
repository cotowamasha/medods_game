import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false
Vue.config.devtools = true

import Button from './components/ui-elements/button-component'
import Radio from './components/ui-elements/radio-component'

Vue.component('v-btn', Button)
Vue.component('v-radio', Radio)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
