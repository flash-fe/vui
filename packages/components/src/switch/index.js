import Switch from './switch'


// 组件提供插件形式的调用
Switch.install = function(Vue) {
    Vue.component(Switch.name, Switch)
}

export default Switch