const fs = require('fs');
const { mdToPdf } = require('md-to-pdf');
const paths = require('./paths');

async function mdtoPdf(inputMdPath,outputPdfPath) {
    const pdf = await mdToPdf({ path: inputMdPath }, {
        highlight_style: "monokai",//color-brewer
        body_class: ["dark", "content"],
        // css: `body { color: tomato; }`,
        // css: `\`${require("../config/mdConfig.css")}\``,
        pdf_options: {
            format: "A4",
            margin: "10mm",
            printBackground: true
        },
        stylesheet_encoding: 'utf-8',
        stylesheet: `${paths.config}\\vue.css`,
    }).catch(console.error);
    if (pdf) {
		fs.writeFileSync(outputPdfPath, pdf.content);
    }
}
module.exports = {
    mdtoPdf
}


console.log(`${paths.config}\\vue.css`)