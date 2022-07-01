const fs = require('fs')
const path = require('path')
const paths = require('./paths')
const {
    warn,
    info,
    error,
    success,
    fali, } = require("./logger");
let count = 0;
// 复制文件
function copyFile(orgfilepath, desdirpath, desfilename) {
    if (fs.existsSync(orgfilepath)) {
        let desfilepath = path.join(desdirpath, desfilename);
        if (!fs.existsSync(desfilepath)) {
            fs.copyFileSync(orgfilepath, desfilepath);
        } else {
            fali(Date().toString() + "FolderAndFileOperation_copyFile: des file already existed." + " new path: " + desfilepath.toString());
        }
    } else {
        fali(Date().toString() + "FolderAndFileOperation_copyFile: org file not existed." + " org path: " + orgfilepath.toString());
    }
}
// 读取文件夹
async function readdirectory(folderPath, filepath, outputMdPath) {
    return new Promise((resolve, reject) => {
        //要读取的目录
        filepath = filepath ? filepath : paths.appPath + "\\" + folderPath  
        // 读取文件夹下子文件和子目录
        let files = fs.readdirSync(filepath)
        // 不存在输出的md目录路径，就添加一个
        if (!fs.existsSync(outputMdPath)) {
            fs.mkdirSync(outputMdPath)
        }
        // 对这些子文件和子目录进行遍历
        files.forEach((item, index) => {
            // 拿到子文件的路径
            let itemFilepath = filepath + '\\' + item
            info(item, itemFilepath)
            // 拿到详细信息
            let stat = fs.statSync(itemFilepath)
            // 判断是否文件且是md后缀文件
            if (stat.isFile() && itemFilepath.indexOf(".md") > -1) {
                info(filepath)
                copyFile(itemFilepath, outputMdPath, `${count}-${item}`)
                count++
            } 
            // 如果是子目录,则递归继续
            else if (stat.isDirectory()){
                readdirectory(folderPath, itemFilepath, outputMdPath)
            }else{
                return
            }
        })
        resolve()
    }).then(()=>{
        return true
    }).catch((err)=>{
        throw err
    })
}

// test
// readdirectory("blog-master")

module.exports = {
    readdirectory
}