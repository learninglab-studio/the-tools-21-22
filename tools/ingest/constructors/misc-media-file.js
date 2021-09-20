const format = (require('date-fns')).format;
const parse = (require('date-fns')).parse;
var path = require('path');

module.exports = function MiscRecord(mediaPath) {
    // maybe split photo and video in the future
    // regex to find type
    // for now, json-metadata-type tells us if exiftool or ffprobe json
    this.initialFolderPath = shootPath;
    this.shootId = path.basename(shootPath);
    this.dateString = this.shootId.substr(0,8);
    // this.date = new Date(this.dateString);
    this.date = parse("20210912", "yyyyMMdd", new Date());
    this.formattedDate = format(this.date, 'MM/dd/yyyy')
    this.cameras = [];
    this.subfolders = [];
    this.clips = [];
    this.stills = [];
    this.notes = ""
}
  
