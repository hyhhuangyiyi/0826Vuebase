// import Vue, { h } from 'vue'
import Vue  from 'vue/dist/vue.esm.js'
import App from '@/App'
import axios from 'axios'

new Vue({
  el:"#app",
  components:{
    App,

  },
  template: '<App />',
})


// new Vue({
//   el:"#app",
//  render:h => h(App)
// })