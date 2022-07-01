const path = require('path')
const fs = require('fs')
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
module.exports={
    appPath: resolveApp('.'),
    scriptPath: resolveApp("script"),
    testPath: resolveApp("test"),
    appPackageJson: resolveApp('package.json'),
}