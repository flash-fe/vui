const glob = require('glob')
const path = require('path')
const baseConfig = require('./webpack.base.config')

// 找到所有源文件
// const components = glob.sync(path.resolve(__dirname, '..', 'src', '**', '*.{vue,js}'))
const demos = glob.sync(path.resolve(__dirname, '..', 'demos', '**', '*.{vue,js}'))

demos.forEach(item => {
    let nm = item.split(/demos\//)[1]
    nm = nm.replace(/\.\w+$/, '')

    // 配置entry
    baseConfig
        .entry(nm)
        .add(item)
})

baseConfig.mode('development')

// 配置output
baseConfig
    .output
    .path(path.resolve(__dirname, '..', 'dist'))
    .publicPath('/static/')
    .filename('[name].js')
    .libraryTarget('umd')

const configs = baseConfig.toConfig()

module.exports = configs