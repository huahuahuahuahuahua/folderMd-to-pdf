var express = require('express');
var router = express.Router();
var fs = require("fs");
// 引入导入模块
const multiparty = require('multiparty');
// 上传文件
router.post("/file_upload", function (req, res) {
    /* 生成multiparty对象，并配置上传目标路径 */
    let form = new multiparty.Form();
    /* 设置编辑 */
    form.encoding = 'utf-8';
    //设置文件存储路劲
    form.uploadDir = './tmplFile';
    //设置文件大小限制
    // form.maxFilesSize = 1 * 1024 * 1024;
    form.parse(req, function (err, fields, files) {
        try {
            let inputFile = files.file[0];
            let uploadedPath = inputFile.path;
            let newPath = form.uploadDir + "/" + inputFile.originalFilename;
            //同步重命名文件名 fs.renameSync(oldPath, newPath)
            fs.renameSync(inputFile.path, newPath);
            res.send({ data: "上传成功！" });
            //读取数据后 删除文件
            // fs.unlink(newPath, function () {
            //   console.log("删除上传文件");
            // })
        } catch (err) {
            console.log(err);
            res.send({ err: "上传失败！" });
        };
    })
})
module.exports = router;