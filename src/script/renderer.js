// renderer.js
import {marked} from 'marked';

const rendererMD = new marked.Renderer();

rendererMD.heading = function (headingObj, level) {
    const { text , depth} = headingObj;
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
    return `<h${depth} class="hr" directory>${text}</h${depth}>`;
};
rendererMD.image = function (dataObj) {
    return `<img src="${dataObj.href}" alt="${dataObj.text}" title="${dataObj.title}" class="img-content">`;
};
rendererMD.table = function (dataObj) {
    const { header, align, rows } = dataObj;

    const theadContent = header.map((cell, index) => {
        const style = align[index] ? `style="text-align: ${align[index]};"` : '';
        return `<th ${style}>${cell.text}</th>`;
    }).join('');

    const tbodyContent = rows.map(row => {
        return `<tr>${row.map((cell, index) => {
            const style = align[index] ? `style="text-align: ${align[index]};"` : '';
            return `<td ${style}>${cell.text}</td>`;
        }).join('')}</tr>`;
    }).join('');

    return `<div class="md-table"><table class="custom-table">
<thead>
    <tr>${theadContent}</tr>
</thead>
<tbody>
    ${tbodyContent}
</tbody>
</table></div>`;
};

// // 自定义 thead 渲染方法
// rendererMD.thead = function (content) {
//     return `<thead>\n${content}\n</thead>\n`;
// };

// // 自定义 tbody 渲染方法
// rendererMD.tbody = function (content) {
//     return `<tbody>\n${content}\n</tbody>\n`;
// };

// // 自定义 th 渲染方法
// rendererMD.th = function (text, { header, align }) {
//     const style = align ? `style="text-align: ${align};"` : '';
//     return `<th ${style}>${text}</th>\n`;
// };

// // 自定义 td 渲染方法
// rendererMD.td = function (text, { header, align }) {
//     const style = align ? `style="text-align: ${align};"` : '';
//     return `<td ${style}>${text}</td>\n`;
// };

export default rendererMD;