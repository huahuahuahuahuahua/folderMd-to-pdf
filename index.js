const {mergeFile} = require("./mergeFile")
const {readdirectory} = require("./readDir")
let folderPath = "summary-1"
async function index(folderPath) {
   const res =  await readdirectory(folderPath)
    if (res){
        mergeFile(folderPath)
    }
}

index(folderPath)
