// const fs = require("fs")
// fs.readdirSync('./eth-zh',(err,files)=>{
//     console.log(files)
// })
const fs = require('fs')
const path = require('path')

let count = 0;
// 复制文件
function copyFile(orgfilepath, desdirpath, desfilename) {
    if (fs.existsSync(orgfilepath)) {
        let desfilepath = path.join(desdirpath, desfilename);
        if (!fs.existsSync(desfilepath)) {
            // createFolder(desdirpath);
            fs.copyFileSync(orgfilepath, desfilepath);
        } else {
            console.error(Date().toString() + "FolderAndFileOperation_copyFile: des file already existed." + " new path: " + desfilepath.toString());
        }
    } else {
        console.error(Date().toString() + "FolderAndFileOperation_copyFile: org file not existed." + " org path: " + orgfilepath.toString());
    }
}
function readdirectory(folderPath,res=[]) {
    return new Promise((resolve, reject) => {
        //要读取的目录
        let filepath = __dirname + "\\" + folderPath
        let outputPath = __dirname + "\\" + folderPath + '-copy'
        let files = fs.readdirSync(filepath)
        if (!fs.existsSync(outputPath)) {
            fs.mkdirSync(outputPath)
        }
        files.forEach((item, index) => {
            let filepath1 = filepath + '\\' + item
            let stat = fs.statSync(filepath1)
            if (stat.isFile()) {
                res.push(filepath1)
                copyFile(filepath1, outputPath, `${count}-${item}`)
                count++
            } else {
                readdirectory(filepath1, res)
            }
        })
        resolve(true)
    })
}
// readdirectory(folderPath)

module.exports = {
    readdirectory
}