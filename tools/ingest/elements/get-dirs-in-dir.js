const path = require("path")
const fs = require("fs")

const getDirsInDir = async function (dirPath) {
    console.log("getting the directories in this directory");
    const dirPaths = []
    const dirsInDir = fs.readdirSync(dirPath);
    for (let i = 0; i < dirsInDir.length; i++) {
        const element = dirsInDir[i];
        if (element!==".DS_Store" && fs.statSync(path.join(dirPath, element)).isDirectory()) {
            dirPaths.push(path.join(dirPath, element));
          }
    }
    console.log(JSON.stringify(dirPaths))
    return dirPaths;
}

module.exports = getDirsInDir;
