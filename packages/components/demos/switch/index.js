import Vue from 'vue'
import App from './App'

// 样式重置
import '@vui/less/lib/reset.less'

new Vue({
    render: h => h(App)
}).$mount('#app')