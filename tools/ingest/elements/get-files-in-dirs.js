const path = require("path")
const fs = require("fs");
const { log } = require("console");

async function getFilesInDirs (folders) {
    // returns array of objects with oldPath and newPath
    const allTheFiles = []
    for (let index = 0; index < folders.length; index++) {
        const element = folders[index];
        const theseFiles = await getDirFiles(element);
        allTheFiles.push(...theseFiles);
    }
    return allTheFiles;
}

const getDirFiles = async function (dirPath) {
    console.log(`getting the paths in ${dirPath}`);
    const filePaths = []
    const filesInDir = fs.readdirSync(dirPath);
    for (let i = 0; i < filesInDir.length; i++) {
        const element = filesInDir[i];
        if (element!==".DS_Store" && !fs.statSync(path.join(dirPath, element)).isDirectory()) {
            filePaths.push(path.join(dirPath, element));
        } 
        // else handle subfolders in the wrong place and wrong files
    }
    console.log(`all the files:\n${JSON.stringify(filePaths, null, 4)}`)
    return filePaths;
}

module.exports = getFilesInDirs;