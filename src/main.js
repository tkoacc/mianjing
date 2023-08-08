import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入amfe-flexible，监听视口变化，设置rem基准值1/10宽度
import 'amfe-flexible'
import '@/utils/vant.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
