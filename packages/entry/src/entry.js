// components
// 本地dev 环境需要指向 @vui/components/src
import { Switch } from '@vui/components/src'
// directives
import VuiDirective from '@vui/directives'

// styles
import '@vui/less/lib/reset.less'
// component.css
// 需要拆解 todo
// import '@vui/components/lib/index.css'

const components = [
    Switch
]

/**
 * import Vui from '@vui/entry'
 * Vue.use(Vui)
 */
const install = Vue => {
    // 组件注册
    components.map(component => {
        Vue.component(component.name, component)
    })
    // 指令注册
    Vue.use(VuiDirective);
    // 插件注册
    // ...
}

const Vui = {
    install
}

export default Vui