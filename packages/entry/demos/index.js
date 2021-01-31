import Vue from 'vue'
import Vui from '@/entry/src/entry'
import VueHighlightJs from 'vue-highlight.js'

import 'highlight.js/styles/default.css'
// languages
import vue from 'vue-highlight.js/lib/languages/vue'
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import App from './App'

Vue.use(Vui);

// vue语法高亮插件
Vue.use(VueHighlightJs, {
    languages: {
        css,
        javascript,
        vue
    }
});

new Vue({
    render: h => h(App)
}).$mount('#app')