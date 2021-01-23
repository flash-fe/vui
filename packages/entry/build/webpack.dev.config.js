const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('../../../build/webpack.base.config')

baseConfig
    .entry('demo')
    .add(path.resolve(__dirname, '..', 'demos', 'index.js'))

baseConfig.mode('development')

baseConfig
    .output
    .path(path.resolve(__dirname, '..', 'dist'))
    .publicPath('/docs/')
    .filename('[name].js')


// 使用html 模板插件
baseConfig
    .plugin('html')
    .use(HTMLWebpackPlugin, [{
        template: path.resolve(__dirname, '..', 'demos', 'index.html'),
        filename: 'index.html',
        inject: true
    }])

const config = baseConfig.toConfig()

module.exports = config