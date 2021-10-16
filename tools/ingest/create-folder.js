const chalk = require("chalk")
const fs = require("fs")
// get all the constructors at once with destructuring
const Shoot = require("./constructors/shoot")
const Source = require("./constructors/source")
const validateShootPath = require("./elements/validate-shoot-path")
const getDirsInDir = require("./elements/get-dirs-in-dir")
const getFilesInDirs = require("./elements/get-files-in-dirs")
const mediaRecordsFromFiles = require("./elements/media-records-from-files")


const rename = async function(folderPath) {
    console.log(chalk.blue(`*************\nlaunching rename with folderpath:\n${JSON.stringify(folderPath, null, 4)}`))
    if (validateShootPath(folderPath)) {
        // create new shoot here or at the end?
        const theShoot = new Shoot(folderPath);
        const allTheSubFolders = await getDirsInDir(folderPath);
        // in the future maybe rename the folders from stems
        // add all of these subfolders as sources for the shoot
        const allTheFiles = await getFilesInDirs(allTheSubFolders);
        const allTheMediaRecords = await mediaRecordsFromFiles(allTheFiles);
        // loop through keys in allTheMediaRecords to handle all the files in the various buckets
        for (let key in allTheMediaRecords) {
            for (let index = 0; index < allTheMediaRecords[key].length; index++) {
                const element = allTheMediaRecords[key][index];
            }
        }
        theShoot.log();
        // rename them
        // changeTheNames(allTheNamingOperations);
        // send them to Airtable
    } else {
        console.log(`doesn't look like ${folderPath} is a valid shootFolder`)
        return false
    }
}

async function changeTheNames(operationArray) {
    console.log(`renaming x to y`);
    return("array of naming operations");
}

module.exports = rename