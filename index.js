const { mergeFile } = require("./scripts/mergeFile");
const { readdirectory } = require("./scripts/readDir");
const paths = require("./scripts/paths");
const { deleteFolder } = require("./scripts/removeDir");
const { removeFiles } = require("./scripts/removeFiles");
const { mdtoPdf } = require("./scripts/mdtoPdf");
const { warn, info, error, success, fali } = require("./scripts/logger");
const dirArray = require("./package.json").needHandle_files;
// 文件名称
let dir = "coder2gwy";
// let dir = dirArray[dirArray.length - 2];
// 文件夹路径
let folderPath = "test\\" + dir;
// 输出的md目录路径
let outputPath = paths.appPath + "\\" + folderPath + "-copy";
// 输出汇总的md文件
let outputMdPath = paths.appPath + "\\" + folderPath + "-zh.md";
var outputPdfPath = outputMdPath.replace(".md", ".pdf");
//要读取的子目录
let subFolderPath = paths.appPath + "\\" + folderPath;
async function index(folderPath) {
  info(
    "------------------------判断是否已存在输出的md文件---------------------"
  );
  // 删除已存在的md,pdf文件
  removeFiles(outputMdPath, outputPdfPath);
  // 读取文件夹及其子文件夹，在一个目录下汇总生成文件
  const readdirectoryRes = await readdirectory(
    folderPath,
    subFolderPath,
    outputPath
  );
  if (readdirectoryRes) {
    success("------------------------拷贝文件夹成功---------------------");
    // 合并目录下的文件
    const mergeFileRes = await mergeFile(folderPath);
    // 移除复制的文件夹
    if (mergeFileRes) {
      info("------------------移除复制的文件夹-------------");
      let path = __dirname + "\\" + folderPath + "-copy";
      error(`移除复制文件夹的路径：${path}`);
      const deleteRes = await deleteFolder(path);
      deleteRes &&
        console.info("------------------移除复制的文件夹-------------");
    }
    info("------------------开始转换成pdf-------------");
    mergeFileRes && mdtoPdf(outputMdPath, outputPdfPath);
  } else {
    error(
      `------------------------拷贝文件夹失败---------------------${readdirectoryRes}`
    );
  }
}
// mdtoPdf(outputMdPath, outputPdfPath)
index(folderPath);
