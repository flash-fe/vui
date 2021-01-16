import Vue from 'vue'
import App from './App'
import VuiDirective from '@vui/directives'

// 样式重置
import '@vui/less/lib/reset.less'

Vue.use(VuiDirective)


new Vue({
    render: h => h(App)
}).$mount('#app')