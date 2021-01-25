import Vue from 'vue'
import Vui from '@/entry/src/entry'
import 'highlight.js/styles/tomorrow-night-bright.css'
import App from './switch.md'

Vue.use(Vui);

new Vue({
    render: h => h(App)
}).$mount('#app')