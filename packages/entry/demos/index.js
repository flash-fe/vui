import Vue from 'vue'
import Vui from '@/entry/src/entry'
import App from './App'

Vue.use(Vui);

new Vue({
    render: h => h(App)
}).$mount('#app')