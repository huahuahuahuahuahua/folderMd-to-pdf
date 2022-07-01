const fs = require("fs")
const {
    warn,
    info,
    error,
    success,
    fali, } = require("./logger");
function removeFiles(...pathList) {
    pathList.map((path)=>{
        if (fs.existsSync(path)) {
            warn("------------------------存在文件---------------------")
            fs.unlinkSync(path)
            success(`删除的文件路径:${path}`)
        }
    })

}

module.exports = { removeFiles }