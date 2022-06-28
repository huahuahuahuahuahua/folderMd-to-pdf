const fs = require('fs')
function mergeFile(folderPath) {
    console.log("\n------------------------开始合并文件---------------------\n")
    let inputPath = __dirname + "\\" + folderPath + '-copy'
    let outputPath = __dirname + "\\" + folderPath + '-zh.md'
    if (fs.existsSync(inputPath)) {
        const files = fs.readdirSync(inputPath)
        files.map((item, index) => {
            let inputFile = inputPath + '\\' + item
            console.log(inputFile)
            file(inputFile, outputPath)
        })
    } else {
        console.error(Date().toString() + "FolderAndFileOperation_copyFile:  file not existed." + " org path: " + outputPath.toString());
    }
    console.log("------------------------合并文件结束---------------------")

}
// mergeFile(folderPath)

function file(srcPath, tarPath) {
    // 同步读取
    var data = fs.readFileSync(srcPath,"utf-8");
    console.log("准备写入文件");
    console.log("输出路径：", tarPath);
    // if (!fs.existsSync(tarPath)){
    //     fs.mkdir(tarPath)
    // }
    fs.appendFileSync(tarPath, data, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("数据写入成功！");
        console.log("--------我是分割线-------------")
    });
}

module.exports={
    mergeFile
}