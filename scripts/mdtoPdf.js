// var markdownpdf = require("markdown-pdf")
// var fs = require("fs")
// var md = "README.md"
// var pdf = md.replace(".md", ".pdf");

// markdownpdf().from(md).to(pdf, () => {
//     console.log("\x1b[32m", "Created", pdf);
// });

// fs.createReadStream("README.md")
//     .pipe(markdownpdf())
//     .pipe(fs.createWriteStream("README.pdf"))
// markdownpdf().from("README.md").to("README.pdf", function () {
//     console.log("Done")
// })
const fs = require('fs');
const { mdToPdf } = require('md-to-pdf');

async function mdtoPdf(inputMdPath,outputPdfPath) {
    const pdf = await mdToPdf({ path: inputMdPath }, {
        highlight_style: "color-brewer",
        body_class: ["dark", "content"],
        // css: `body { color: tomato; }`,
        // css: `\`${require("../config/mdConfig.css")}\``,
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
module.exports = {
    mdtoPdf
}