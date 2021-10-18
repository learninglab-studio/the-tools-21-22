const format = (require('date-fns')).format;
const parse = (require('date-fns')).parse;
var path = require('path');

module.exports = function Shoot(shootPath) {
    this.initialFolderPath = shootPath;
    this.shootId = path.basename(shootPath);
    this.dateString = this.shootId.substr(0,8);
    // this.date = new Date(this.dateString);
    this.date = parse("20210912", "yyyyMMdd", new Date());
    this.formattedDate = format(this.date, 'MM/dd/yyyy')
    this.cameras = [];
    this.files = [];
    this.subfolders = [];
    this.clips = [];
    this.stills = [];
    this.notes = "";
    this.rename = function(){console.log("would rename here");};
    this.log = function(){console.log(JSON.stringify(this, null, 4))}
}
  
