# md文件转换为pdf



## 背景

我最近在复习，急需很多的md文件打印出来，但是勒，没有一个现成的网站或者插件可以供我使用，就临时写了一个仓库

当然这里只是简单介绍一个插件`md-to-pdf`,关于合并md文件的处理呢这里就不展开了，有兴趣可以查看完成仓库[huahuahuahuahuahua/folderMd-to-pdf (github.com)](https://github.com/huahuahuahuahuahua/folderMd-to-pdf)

里面关于合并文件有简单的介绍

## md-to-pdf插件使用

现在来看下插件的简单使用

```js
// scripts/mdtoPdf.js
const fs = require('fs');
//md-to-pdf插件
const { mdToPdf } = require('md-to-pdf');
const paths = require('./paths');

/**
 * @msg:
 * @param {*} inputMdPath 输入的md文件绝对路径
 * @param {*} outputPdfPath 输出的pdf文件绝对路径
 * @return {*}
 * @Descripttion:md-to-pdf
 */
async function mdtoPdf(inputMdPath,outputPdfPath) {
    const pdf = await mdToPdf({ path: inputMdPath }, {
        highlight_style: "monokai",//color-brewer
        body_class: ["dark", "content"],
        pdf_options: {
            format: "A4",
            margin: "10mm",
            printBackground: true
        },
        stylesheet_encoding: 'utf-8',
    }).catch(console.error);
    if (pdf) {
		fs.writeFileSync(outputPdfPath, pdf.content);
    }
}
//导出函数
module.exports = {
    mdtoPdf
}
```



```js
// index.js 调用函数
const { mdtoPdf } = require('./scripts/mdtoPdf')
// 输出汇总的md文件 
//coder2gwy是程序员考公指南，简单借用下
//test文件夹下的coder2gwy文件夹
var outputMdPath = "./README.md"
var outputPdfPath = outputMdPath.replace(".md", "1.pdf");
mdtoPdf(outputMdPath, outputPdfPath)
```



这样就转换成功，有`README.pdf`文件啦



现在我们需要有样式，让转换出来的pdf变**好看**

这里以`github.css`作为模板就好了



## gitlab.css

放在`config/gitlab.css`即可

<b><details><summary>💡 gitlab.css</summary></b>


```css
:root {
    --side-bar-bg-color: #efefef;
    --control-text-color: #777;
    --primary-color: #393894;
    --primary-btn-border-color: #393894;
    --active-file-bg-color: #eaeaea;
    --active-file-text-color: inherit;
    --active-file-border-color: #393894;
    --item-hover-text-color: #393894;
}

@font-face {
    font-family: 'Hack';
    font-style: normal;
    font-weight: normal;
    src: local('Hack'), url('./gitlab/hack/hack-regular.woff') format('woff');
}

@font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    src: local('Open Sans Regular'), url('./gitlab/roboto/roboto-v20-latin-regular.woff') format('woff');
}

@font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: normal;
    src: local('Open Sans Italic'), url('./gitlab/roboto-v20-latin-italic.woff') format('woff');
}

@font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: bold;
    src: local('Open Sans Bold'), url('./gitlab/roboto/roboto-v20-latin-700.woff') format('woff');
}

@font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: bold;
    src: local('Open Sans Bold Italic'), url('./gitlab/roboto-v20-latin-700italic.woff') format('woff');
}

html {
    font-size: .925rem;
}

body {
    background: none;
    font-family: "Open Sans", "Clear Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #2e2e2e;
    line-height: 1.6;
    height: 100%;
}

#write {
    max-width: 990px;
    margin: 0 auto;
    padding: 30px;
    padding-bottom: 100px;
    position: static;
    width: 100%;
}

#write>ul:first-child,
#write>ol:first-child {
    margin-top: 30px;
}

a {
    color: #1b69b6;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    position: relative;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: bold;
    line-height: 1.4;
    cursor: text;
}

h1:hover a.anchor,
h2:hover a.anchor,
h3:hover a.anchor,
h4:hover a.anchor,
h5:hover a.anchor,
h6:hover a.anchor {
    text-decoration: none;
}

h1 tt,
h1 code {
    font-size: inherit;
}

h2 tt,
h2 code {
    font-size: inherit;
}

h3 tt,
h3 code {
    font-size: inherit;
}

h4 tt,
h4 code {
    font-size: inherit;
}

h5 tt,
h5 code {
    font-size: inherit;
}

h6 tt,
h6 code {
    font-size: inherit;
}

h1 {
    padding-bottom: .3em;
    font-size: 2.25em;
    line-height: 1.2;
    border-bottom: 1px solid #eee;
}

h2 {
    padding-bottom: .3em;
    font-size: 1.75em;
    line-height: 1.225;
    border-bottom: 1px solid #eee;
}

h3 {
    font-size: 1.5em;
    line-height: 1.43;
}

h4 {
    font-size: 1.25em;
}

h5 {
    font-size: 1em;
}

h6 {
    font-size: 1em;
    color: #777;
}

p,
blockquote,
ul,
ol,
dl,
table {
    margin: 0.8em 0;
}

ul li,
ol li {
    line-height: 1.2;
}

li>ol,
li>ul {
    margin: 0 0;
}

hr {
    height: 2px;
    padding: 0;
    margin: 16px 0;
    background-color: #e7e7e7;
    border: 0 none;
    overflow: hidden;
    box-sizing: content-box;
}

li p.first {
    display: inline-block;
}

ul,
ol {
    padding-left: 30px;
}

ul:first-child,
ol:first-child {
    margin-top: 0;
}

ul:last-child,
ol:last-child {
    margin-bottom: 0;
}

blockquote {
    border-left: 4px solid #dfe2e5;
    font-family: 'Hack';
    font-size: 13px;
    padding: 0 15px;
    color: #707070;
}

blockquote blockquote {
    font-family: 'Hack';
    padding-right: 0;
}

table {
    font-size: .875rem;
    padding: 0;
    word-break: initial;
}

table tr {
    border-top: 1px solid #dfdfdf;
    margin: 0;
    padding: 0;
}

thead {
    background-color: #f8f8f8;
}

table tr th {
    font-weight: bold;
    border: 1px solid #dfdfdf;
    border-bottom: 0;
    border-bottom: solid 2px #ccc;
    margin: 0;
    padding: 10px 16px;
}

table tr td {
    border: 1px solid #dfe2e5;
    margin: 0;
    padding: 10px 16px;
}

table tr th:first-child,
table tr td:first-child {
    margin-top: 0;
}

table tr th:last-child,
table tr td:last-child {
    margin-bottom: 0;
}

.CodeMirror-lines {
    padding: 4px 0;
}

.code-tooltip {
    box-shadow: 0 1px 1px 0 rgba(0, 28, 36, .3);
    border-top: 1px solid #eef2f2;
}

.md-fences,
/* code, */
tt {
    border-radius: 3px;
    color: #b9bcba;
    padding: 0;
    font-size: 0.9em;
}

code {
    padding: 2px 4px;
    color: #c0341d;
    background-color: #fbe5e1;
    border-radius: 4px;
}

.md-fences {
    margin-bottom: 15px;
    margin-top: 15px;
    padding-top: 8px;
    padding-bottom: 6px;
}

.md-task-list-item>input {
    margin-left: -1.3em;
}

@media print {
    html {
        font-size: 13px;
    }

    table,
    pre {
        page-break-inside: avoid;
    }

    pre {
        word-wrap: break-word;
    }
}

.md-fences {
    background-color: #f8f8f8;
}

#write pre.md-meta-block {
    padding: 1rem;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f7f7f7;
    border: 0;
    border-radius: 3px;
    color: #777777;
    margin-top: 0 !important;
}

.mathjax-block>.code-tooltip {
    bottom: .375rem;
}

.md-mathjax-midline {
    background: #fafafa;
}

#write>h3.md-focus:before {
    left: -1.5625rem;
    top: .375rem;
}

#write>h4.md-focus:before {
    left: -1.5625rem;
    top: .285714286rem;
}

#write>h5.md-focus:before {
    left: -1.5625rem;
    top: .285714286rem;
}

#write>h6.md-focus:before {
    left: -1.5625rem;
    top: .285714286rem;
}

.md-image>.md-meta {
    border-radius: 3px;
    padding: 2px 0px 0px 4px;
    font-size: 0.9em;
    color: inherit;
}

.md-tag {
    color: #a7a7a7;
    opacity: 1;
}

.md-toc {
    margin-top: 20px;
    padding-bottom: 20px;
}

.sidebar-tabs {
    border-bottom: none;
    font-weight: normal;
}

#typora-sidebar .sidebar-tabs {
    font-family: 'Open Sans' !important;
    border-bottom: 1px solid #dfdfdf;
    font-weight: bold;
}

#typora-sidebar .file-list-item-file-name {
    font-family: 'Open Sans';
    font-weight: bold;
}

#typora-sidebar .file-list-item-summary,
#typora-sidebar .ty-search-item-line {
    font-family: 'Open Sans';
}

#typora-sidebar #outline-content .outline-h1>.outline-item {
    font-family: 'Open Sans';
}

#typora-sidebar .file-tree-node.file-library-file-node.active .file-node-background,
#typora-sidebar .file-list-item.file-library-file-node.active {
    border-left: 4px solid #393894;
}

.file-library-node:not(.file-node-root):focus>.file-node-content {
    outline: none;
}

#typora-sidebar .file-list-item.file-library-file-node:hover {
    background: #f1f1f1;
}

#typora-sidebar .file-tree-node.file-library-file-node {
    padding: 0;
}

#typora-sidebar .file-tree-node.file-library-file-node.active .file-node-title {
    color: #2a2971;
}

#typora-sidebar .file-tree-node {
    border: 0;
    padding: 0;
    margin: 0;
    padding-left: 15px;
}

.file-node-icon {
    color: #707070;
    margin-right: 8px;
}

.active .file-node-icon {
    color: #2a2971;
}

.file-node-icon::before {
    background-image: url("data:image/svg+xml,%3Csvg version='1.1' fill='#707070' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M438.944,352c11.046,0,20-8.954,20-20V80c0-44.112-35.888-80-80-80H133.056c-44.112,0-80,35.888-80,80v352 c0,44.112,35.888,80,80,80h245.888c44.113,0,80-35.888,80.001-80c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20 c0,22.056-17.944,40-40,40H133.056c-22.056,0-40-17.944-40-40V80c0-22.056,17.944-40,40-40h245.889c22.056,0,40,17.944,40,40v252 C418.944,343.046,427.899,352,438.944,352z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M358.944,120h-206c-11.046,0-20,8.954-20,20s8.954,20,20,20h206c11.046,0,20-8.954,20-20S369.989,120,358.944,120z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M358.944,200h-206c-11.046,0-20,8.954-20,20s8.954,20,20,20h206c11.046,0,20-8.954,20-20S369.989,200,358.944,200z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M278.054,280H152.944c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h125.112c11.046,0,19.999-8.954,19.999-20 C298.054,288.954,289.1,280,278.054,280z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    content: '';
    display: inline-block;
    height: 20px;
    width: 20px;
}

#typora-sidebar .file-tree-node.file-library-file-node:hover .file-node-icon::before {
    background-image: url("data:image/svg+xml,%3Csvg version='1.1' fill='#2a2971' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M438.944,352c11.046,0,20-8.954,20-20V80c0-44.112-35.888-80-80-80H133.056c-44.112,0-80,35.888-80,80v352 c0,44.112,35.888,80,80,80h245.888c44.113,0,80-35.888,80.001-80c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20 c0,22.056-17.944,40-40,40H133.056c-22.056,0-40-17.944-40-40V80c0-22.056,17.944-40,40-40h245.889c22.056,0,40,17.944,40,40v252 C418.944,343.046,427.899,352,438.944,352z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M358.944,120h-206c-11.046,0-20,8.954-20,20s8.954,20,20,20h206c11.046,0,20-8.954,20-20S369.989,120,358.944,120z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M358.944,200h-206c-11.046,0-20,8.954-20,20s8.954,20,20,20h206c11.046,0,20-8.954,20-20S369.989,200,358.944,200z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M278.054,280H152.944c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h125.112c11.046,0,19.999-8.954,19.999-20 C298.054,288.954,289.1,280,278.054,280z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    content: '';
    display: inline-block;
    height: 20px;
    width: 20px;
}

#typora-sidebar .file-tree-node.file-library-file-node.active:hover .file-node-icon::before {
    background-image: url("data:image/svg+xml,%3Csvg version='1.1' fill='#2a2971' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M352.459,220c0-11.046-8.954-20-20-20h-206c-11.046,0-20,8.954-20,20s8.954,20,20,20h206 C343.505,240,352.459,231.046,352.459,220z'/%3E%3Cpath d='M126.459,280c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20H251.57c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20 H126.459z'/%3E%3Cpath d='M173.459,472H106.57c-22.056,0-40-17.944-40-40V80c0-22.056,17.944-40,40-40h245.889c22.056,0,40,17.944,40,40v123 c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V80c0-44.112-35.888-80-80-80H106.57c-44.112,0-80,35.888-80,80v352 c0,44.112,35.888,80,80,80h66.889c11.046,0,20-8.954,20-20C193.459,480.954,184.505,472,173.459,472z'/%3E%3Cpath d='M467.884,289.572c-23.394-23.394-61.458-23.395-84.837-0.016l-109.803,109.56c-2.332,2.327-4.052,5.193-5.01,8.345 l-23.913,78.725c-2.12,6.98-0.273,14.559,4.821,19.78c3.816,3.911,9,6.034,14.317,6.034c1.779,0,3.575-0.238,5.338-0.727 l80.725-22.361c3.322-0.92,6.35-2.683,8.79-5.119l109.573-109.367C491.279,351.032,491.279,312.968,467.884,289.572z M333.776,451.768l-40.612,11.25l11.885-39.129l74.089-73.925l28.29,28.29L333.776,451.768z M439.615,346.13l-3.875,3.867 l-28.285-28.285l3.862-3.854c7.798-7.798,20.486-7.798,28.284,0C447.399,325.656,447.399,338.344,439.615,346.13z'/%3E%3Cpath d='M332.459,120h-206c-11.046,0-20,8.954-20,20s8.954,20,20,20h206c11.046,0,20-8.954,20-20S343.505,120,332.459,120z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
    content: '';
    display: inline-block;
    height: 20px;
    width: 20px;
}

.active .file-node-icon::before {
    background-image: url("data:image/svg+xml,%3Csvg version='1.1' fill='#2a2971' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M352.459,220c0-11.046-8.954-20-20-20h-206c-11.046,0-20,8.954-20,20s8.954,20,20,20h206 C343.505,240,352.459,231.046,352.459,220z'/%3E%3Cpath d='M126.459,280c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20H251.57c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20 H126.459z'/%3E%3Cpath d='M173.459,472H106.57c-22.056,0-40-17.944-40-40V80c0-22.056,17.944-40,40-40h245.889c22.056,0,40,17.944,40,40v123 c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V80c0-44.112-35.888-80-80-80H106.57c-44.112,0-80,35.888-80,80v352 c0,44.112,35.888,80,80,80h66.889c11.046,0,20-8.954,20-20C193.459,480.954,184.505,472,173.459,472z'/%3E%3Cpath d='M467.884,289.572c-23.394-23.394-61.458-23.395-84.837-0.016l-109.803,109.56c-2.332,2.327-4.052,5.193-5.01,8.345 l-23.913,78.725c-2.12,6.98-0.273,14.559,4.821,19.78c3.816,3.911,9,6.034,14.317,6.034c1.779,0,3.575-0.238,5.338-0.727 l80.725-22.361c3.322-0.92,6.35-2.683,8.79-5.119l109.573-109.367C491.279,351.032,491.279,312.968,467.884,289.572z M333.776,451.768l-40.612,11.25l11.885-39.129l74.089-73.925l28.29,28.29L333.776,451.768z M439.615,346.13l-3.875,3.867 l-28.285-28.285l3.862-3.854c7.798-7.798,20.486-7.798,28.284,0C447.399,325.656,447.399,338.344,439.615,346.13z'/%3E%3Cpath d='M332.459,120h-206c-11.046,0-20,8.954-20,20s8.954,20,20,20h206c11.046,0,20-8.954,20-20S343.505,120,332.459,120z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
    content: '';
    display: inline-block;
    height: 20px;
    width: 20px;
}

.file-library-node.file-tree-node {
    padding: 0;
    margin: 0;
}

.file-node-background {
    padding: 25px 10px;
    padding: 18px 10px 18px 0;
}

.file-node-content {
    padding: 15px 5px;
    padding: 8px 8px 8px 0;
}

.file-node-content:hover {
    cursor: pointer;
}

.active .file-node-content {
    font-weight: bold;
}

#typora-quick-open {
    border: 1px solid #ddd;
    background-color: #f8f8f8;
}

#typora-quick-open-item {
    background-color: #FAFAFA;
    border-color: #FEFEFE #e5e5e5 #e5e5e5 #eee;
    border-style: solid;
    border-width: 1px;
}

/** focus mode */
.on-focus-mode blockquote {
    border-left-color: rgba(85, 85, 85, 0.12);
}

header,
.context-menu,
.megamenu-content,
footer {
    font-family: "Open Sans", "Arial", sans-serif;
}

.megamenu-opened header {
    background-image: none;
}

#typora-sidebar #ty-sidebar-footer {
    background-color: #f9f9f9 !important;
    border-top: 1px solid #dfdfdf;
}

.megamenu-menu-header {
    border-bottom: 1px solid #16161a;
}

.megamenu-menu-list li:not(.saved) a:not(.active):hover,
.megamenu-menu-list li a.active {
    background: #101010 !important;
}

.file-node-content:hover .file-node-icon,
.file-node-content:hover .file-node-open-state {
    visibility: visible;
}

.mac-seamless-mode #typora-sidebar {
    background-color: #f9f9f9;
    font-weight: 100;
}

.md-lang {
    color: #b4654d;
}

.html-for-mac .context-menu {
    --item-hover-bg-color: #E6F0FE;
}

#md-notification .btn {
    border: 0;
}

.dropdown-menu .divider {
    border-color: #e5e5e5;
}

.ty-preferences .window-content {
    background-color: #fafafa;
}

.ty-preferences .nav-group-item.active {
    color: white;
    background: #999;
}

/* CodeMirror Dracula theme */
.cm-s-inner {
    border: 1px solid var(--accent-color) !important;
    border-radius: .25rem;
    font-family: 'Hack';
}

.cm-s-inner.CodeMirror,
.cm-s-inner .CodeMirror-gutters {
    background-color: #212425 !important;
    color: #f8f8f2 !important;
    border: none;
}

.CodeMirror {
    height: 300px;
    height: auto;
}

.CodeMirror-lines {
    padding: 4px 0;
    /* Vertical padding around content */
}

.CodeMirror div.CodeMirror-cursor {
    border-left: 1px solid green;
    z-index: 3;
}

.cm-s-inner .CodeMirror-gutters {
    background-color: #0d0e0f !important;
    border-right: 1px solid #444;
    border-radius: 4px;
    width: 5ch;
    color: #5c5d5c !important;
    height: 100%;
    white-space: nowrap;
}

.cm-s-inner .CodeMirror-cursor {
    border-left: solid rgb(96, 255, 96) !important;
}

.cm-s-inner .CodeMirror-linenumber {
    color: #5c5d5c;
    font-weight: bold;
    width: 4ch !important;
}

.cm-s-inner .CodeMirror-line::selection,
.cm-s-inner .CodeMirror-line::-moz-selection,
.cm-s-inner .CodeMirror-line>span::selection,
.cm-s-inner .CodeMirror-line>span::-moz-selection,
.cm-s-inner .CodeMirror-line>span>span::selection,
.cm-s-inner .CodeMirror-line>span>span::-moz-selection {
    background: rgba(255, 255, 255, 0.1);
}

.cm-s-inner span.cm-comment {
    color: #969896;
}

.cm-s-inner span.cm-string,
.cm-s-inner span.cm-string-2 {
    color: #e4eb9b;
}

.cm-s-inner span.cm-number {
    color: #c7b2e4;
}

.cm-s-inner span.cm-variable,
.cm-s-inner span.cm-variable-2 {
    /* color: #50fa7b; */
    /* color: #a8b151; */
    color: #81a2be;
}

.cm-s-inner span.cm-def {
    color: white;
}

.cm-s-inner span.cm-operator {
    color: #ff79c6;
}

.cm-s-inner span.cm-keyword {
    color: #e79ac6;
    color: #b294bb;
}

.cm-s-inner span.cm-atom {
    color: #bd93f9;
}

.cm-s-inner span.cm-meta {
    color: #f8f8f2;
}

.cm-s-inner span.cm-tag {
    color: #8abeb7;
}

.cm-s-inner span.cm-attribute {
    color: #91eba7;
}

.cm-s-inner span.cm-qualifier {
    color: #82ee9d;
}

.cm-s-inner span.cm-property {
    /* color: #66d9ef; */
    color: #7091b1;
    color: #81a2be;
}

.cm-s-inner span.cm-builtin {
    color: #8ffaaa;
}

.cm-s-inner span.cm-variable-3,
.cm-s-inner span.cm-type {
    color: #f1c290;
}

.md-fences.md-focus .cm-s-inner .CodeMirror-activeline-background {
    background: rgba(255, 255, 255, 0.1);
}

.cm-s-inner .CodeMirror-matchingbracket {
    text-decoration: underline;
    color: white !important;
}

.cm-s-inner .CodeMirror-selected,
.cm-s-inner .CodeMirror-selectedtext {
    background: #3b4254 !important;
    color: inherit;
    text-shadow: none;
}

#write>p:first-child:empty {
    position: static;
}

#write>p:first-child:not(:only-child)::before,
#write>p:only-child::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("gitlab/logo.png") no-repeat 45% 90% transparent;
    background-size: cover;
    opacity: 0;
    height: 100%;
    max-width: 100%;
    width: 100%;
}

#write>p:only-child:empty::before {
    opacity: 1;
}
```

</details>



## 添加到mdtoPdf.js

```js
// scripts/mdtoPdf.js
const fs = require('fs');
//md-to-pdf插件
const { mdToPdf } = require('md-to-pdf');
const paths = require('./paths');
+ const config = path.resolve(process.cwd(), "\\script");
/**
 * @msg:
 * @param {*} inputMdPath 输入的md文件绝对路径
 * @param {*} outputPdfPath 输出的pdf文件绝对路径
 * @return {*}
 * @Descripttion:md-to-pdf
 */
async function mdtoPdf(inputMdPath,outputPdfPath) {
    const pdf = await mdToPdf({ path: inputMdPath }, {
        highlight_style: "monokai",//color-brewer
        body_class: ["dark", "content"],
        pdf_options: {
            format: "A4",
            margin: "10mm",
            printBackground: true
        },
        stylesheet_encoding: 'utf-8',
+        stylesheet: `${paths.config}\\gitlab.css`,
    }).catch(console.error);
    if (pdf) {
		fs.writeFileSync(outputPdfPath, pdf.content);
    }
}
//导出函数
module.exports = {
    mdtoPdf
}
```




更多样式可以看下`typora`官网上的样式，地址：[Themes Gallery — Typora (typoraio.cn)](https://theme.typoraio.cn/)



这样一个简单的md-to-pdf就做好了





## 完整的仓库介绍

### tree

```js

├───config
│ ├───gitlab --样式
│ │ ├───hack
│ │ └───roboto
│ └───vue
├───scripts
│ │ logger --有颜色的打印
│ │ ├───mdtoPdf --md文件转pdf
│ │ ├───mergeFile --合并md文件到一个md文件
│ │ ├───paths --路径
│ │ ├───readDir --读取目录
│ │ ├───removeDir --移除copy的目录
│ │ ├───removeFiles --移除文件
├───server --服务器,待添加
└───test
└───coder2gwy ---需要合并的文件夹
└─── 基本认识

```



## 怎么使用这个仓库呢

```js
1.先把需要合并的文件放入 test 中

2.修改 index.js 中的 dir
let dir = "coder2gwy";

3.node index.js
```





## bug待修复

有图片不会自动导入，得手动替换文件路径
