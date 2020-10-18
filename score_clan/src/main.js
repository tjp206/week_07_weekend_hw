import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'

Vue.config.productionTip = false

export const eventBus = new Vue()


// Vue.filter('formatDate', function(compDate) {
//   if (compDate) {
//     return moment(String(compDate)).format('MM/DD/YYYY hh:mm')
//   }
// });

new Vue({
  render: h => h(App),
}).$mount('#app')
