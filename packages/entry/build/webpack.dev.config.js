const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('../../../build/webpack.base.config')
const hljs = require('highlight.js')

const md = require('markdown-it')({
    html: true,
    raw: true,
    breaks: true
})

baseConfig
    .entry('demo')
    .add(path.resolve(__dirname, '..', 'demos', 'index.js'))

baseConfig.mode('development')

// markdown loader
baseConfig.module.rule('markdown')
    .test(/\.md$/)
    .use('vue')
    .loader('vue-loader')
    .end()
    .use('vue-markdown')
    .loader('vue-markdown-loader/lib/markdown-compiler')
    .options({
        raw: true,
        langPrefix: 'language-',
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
              try {
                return '<pre class="hljs"><code>' +
                       hljs.highlight(lang, str, true).value +
                       '</code></pre>';
              } catch (__) {}
            }
            return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
          }
    })
    .end()

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