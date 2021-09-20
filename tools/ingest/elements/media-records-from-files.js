// from the paths, create media records, including metadata, new filePaths, etc.
const MediaRecord = require("../constructors/video-file")

const mediaRecordsFromFiles = async function (fileArray) {
    var mediaRecords = [];
    // sort into types
    for (let index = 0; index < fileArray.length; index++) {
        const element = fileArray[index];

        // const record = new MediaRecord(element)
        // mediaRecords.push(record)
    }
    return mediaRecords;
}

module.exports = mediaRecordsFromFiles