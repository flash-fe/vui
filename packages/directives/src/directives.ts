import debounce from './debounce'

const directives: any = {
    debounce
}

/**
 * 导出成一个插件
 * Vue.use(VuiDirectives);
 */

const VuiDirective = {
    install(Vue: any) {
        // 批量注册所有指令
        for (const key in directives) {
            Vue.directive(key, directives[key])
        }
    }
}

export default VuiDirective