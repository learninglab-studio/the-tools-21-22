# ingest notes

let's 

- first parse everything and
    - create shoot
    - get directories in the shoot directory
        - should we create cards? or no?
        - should we try to match this angle to something existing in airtable?
    - get files in the directories
    - get each file's ffprobe data
    - get filename and construct new filename
    - create all the objects
        - shoot
        - folders
        - clips
- optionally, rename
- send data to airtable


the idea is to run all of this WITHOUT the rename function for all folders going backwards in time.

Also to have a version of this that can JUST rename based on already-existing information.

Let's keep almost everything in a single file other than the models for Shoot, VideoClip, Still, etc.

Q => how many of these should we do? MediaFiles with a `.type`? or more 


logging this older option here before rewriting as one file to start

```
const chalk = require("chalk")
const fs = require("fs")
// get all the constructors at once with destructuring
const Shoot = require("./constructors/shoot")
const Source = require("./constructors/source")
const validateShootPath = require("./elements/validate-shoot-path")
const getDirsInDir = require("./elements/get-dirs-in-dir")
// const getFilesInDirs = require("./elements/get-files-in-dirs")
// const mediaRecordsFromFiles = require("./elements/media-records-from-files")


const rename = async function(folderPath) {
    console.log(chalk.blue(`*************\nlaunching rename with folderpath:\n${JSON.stringify(folderPath, null, 4)}`))
    if (validateShootPath(folderPath)) {
        // create new shoot here or at the end?
        const theShoot = new Shoot(folderPath);
        const allTheSubFolders = await getDirsInDir(folderPath);
        // in the future maybe rename the folders from stems
        // add all of these subfolders as sources for the shoot
        // const allTheFiles = await getFilesInDirs(allTheSubFolders);
        
        // const allTheMediaRecords = await mediaRecordsFromFiles(allTheFiles);
        // loop through keys in allTheMediaRecords to handle all the files in the various buckets
        for (let key in allTheMediaRecords) {
            for (let index = 0; index < allTheMediaRecords[key].length; index++) {
                const element = allTheMediaRecords[key][index];
            }
        }
        theShoot.dateTest = "Some Date";
        theShoot.log();
        // rename them
        // changeTheNames(allTheNamingOperations);
        // send them to Airtable
    } else {
        console.log(`doesn't look like ${folderPath} is a valid shootFolder`)
        return false
    }
}

async function createNamingOperations(folders){

    // returns array of objects with {oldPath: '/some/path' newPath: '/some/path'}
    var namingOperationsArray = []
    for (let index = 0; index < oldPathsArray.length; index++) {
        const element = oldPathsArray[index];
        
    }
}

async function changeTheNames(operationArray) {
    // accepts array of objects with {oldPath: '/some/path' newPath: '/some/path'}
    console.log(`renaming x to y`);
    return("array of naming operations");
    for (let index = 0; index < operationArray.length; index++) {
        const element = operationArray[index];
        console.log(`we will rename ${element.oldPath} to ${element.newPath}`);
    }
}

module.exports = rename
```