import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入amfe-flexible，监听视口变化，设置rem基准值1/10宽度
import 'amfe-flexible'
// 导入vant
import '@/utils/vant.js'
// 导入全局组件ArticleItem
import ArticleItem from '@/components/ArticleItem.vue'
Vue.component('ArticleItem', ArticleItem)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
