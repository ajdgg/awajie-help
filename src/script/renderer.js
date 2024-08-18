// renderer.js
import {marked} from 'marked';

const rendererMD = new marked.Renderer();

rendererMD.heading = function (headingObj, level) {
    const { text , depth} = headingObj;
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
    if (depth === 1) {
        return `<h${depth} class="hr" directory>${text}</h${depth}>`;
    } else if (depth === 2) {
        return `<h${depth} directory-2>${text}</h${depth}>`;
    } else {
        return `<h${depth}>${text}</h${depth}>`;
    }
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

export default rendererMD;