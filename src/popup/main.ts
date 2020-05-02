import Vue from 'vue'
import App from './App.vue'
import db from '@/lib/db'
import '@/assets/css/tailwind.css'
import '@/popup/styles.css'

Vue.prototype.$db = db

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
