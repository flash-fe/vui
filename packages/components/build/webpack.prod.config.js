const glob = require('glob')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('../../../build/webpack.base.config')

baseConfig.mode('production')

const components = glob.sync(path.resolve(__dirname, '..', 'src', '**', 'index.js'))

// 配置入口
components.forEach(file => {
    let fileNm = file.split(/components\/src\//)[1]
    fileNm = fileNm.replace(/\.\w+$/, '')
    baseConfig
        .entry(fileNm)
        .add(file)
})

// 配置输出文件
baseConfig.output
.path(path.resolve(__dirname, '..', 'lib'))
.libraryTarget('commonjs2')
.filename('[name].js')

// 重新配置style rule
baseConfig.module.rules.delete('styles')

baseConfig.module
.rule('styles')
.test(/\.less$/)
    .use('mini-extract')
        .loader(MiniCssExtractPlugin.loader)
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


// 不处理代码压缩
baseConfig.optimization.minimize(false)

// 添加MiniCssExtract插件
baseConfig
.plugin('miniCss')
.use(MiniCssExtractPlugin)

// 配置打包移除
baseConfig.externals([
    'vue'
    // function ({ context, request }, callback) {
    //     if (/\/vui\/packages\/components\/src\/\w+\/(\w|\\\/)+/.test(request)) {
    //         const fileNm = request.split(/src\//)[1].replace(/\.\w+$/, '')
    //         return callback(null, './' + fileNm)
    //     }
    //     return callback();
    // }
])

module.exports = baseConfig.toConfig()