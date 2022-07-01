const fs = require('fs')
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
        console.info(res)
        return true
    })
};
module.exports = {
    deleteFolder
}