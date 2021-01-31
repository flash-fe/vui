// 自定义vue-doc-loader, 解析demo .vue文件, 将demo源码与demo吐露出来
const md = require('markdown-it')({})

module.exports = function(source) {
    // 资源路径
    // console.log(this.resourcePath)
    if (/docs/.test(this.resourcePath)) {
        // 源码展示区域
        let demoCode = `<highlight-code lang="vue">
        ${md.utils.escapeHtml(source)}
        </highlight-code>`;
        // console.log(source);
        const fromIdx = source.indexOf('<template>')
        const endIdx = source.lastIndexOf('</template>')
        const contentStartIdx = fromIdx + '<template>'.length;
        // 原source中主体内容部分
        const demoMain = source.substring(contentStartIdx, endIdx);
        source = `
        ${source.substring(fromIdx, contentStartIdx)}
        <div>
            <div class="demo">
            ${demoMain}
            </div>
            ${demoCode}
        </div>
        ${source.substring(endIdx, source.length)}
`
        // 在source的template中注入demo源码
        // vue2中规定，template中必须有一个根结点
        // 所以这里用一个<div> or <DemoBlock> 先包起来
        // const starter = source.substring(fromIdx, '<template>'.length) + '<div>';
        // const ender = source.substring(endIdx, source.length);
        // source = starter + demoCode + ender;
        // console.log(starter + demoCode + '</div>' + ender)
    }
    // 文件源码
    return source
}