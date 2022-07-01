const fs = require('fs')
const {
    warn,
    info,
    error,
    success,
    fali, } = require("./logger");
function deleteFolder(dirPath) {
    return new Promise((resolve, reject) => {
        var files = [];
        if (fs.existsSync(dirPath)) {
            files = fs.readdirSync(dirPath);
            files.forEach(function (file, index) {
                var curPath = dirPath + "/" + file;
                if (fs.statSync(curPath).isDirectory()) { // recurse
                    deleteFolder(curPath);
                } else { 
                    // delete file
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(dirPath);
        }
        resolve("--------------------移除文件夹成功----------------------")
    }).then((res)=>{
        info(res)
        return true
    })
};
module.exports = {
    deleteFolder
}