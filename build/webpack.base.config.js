const WebpackChain = require('webpack-chain')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
const config = new WebpackChain()


// 配置loaders
config.module
    .rule('vue')
    .test(/\.vue$/)
        .use('vue')
            .loader('vue-loader')
            .end()
        // 处理demo vue 编译
        .use('vue-doc')
            .loader(path.resolve(__dirname, '..', 'loaders', 'vue-doc-loader.js'))

config.module
    .rule('js compile')
    .test(/\.js$/)
    .use('babel')
    .loader('babel-loader')

config.module
    .rule('styles')
    .test(/\.(less|css)$/)
    // .include
    //     .add(/node_modules/)
    //     .add(/src/)
    //     .end()
    .use('vue-style')
        .loader('vue-style-loader')
        .end()
    .use('css')
        .loader('css-loader')
        // css-loader 需要兼容的样式配置
        .options({
            esModule: false
        })
        .end()
    .use('less')
        .loader('less-loader')
        .end()

config
    .plugin('vue')
    .use(VueLoaderPlugin)


config.resolve.extensions
.add('.js')
.add('.vue')
.add('.less')


config.resolve.alias
.set('@', path.resolve(__dirname, '..', 'packages'))

module.exports = config