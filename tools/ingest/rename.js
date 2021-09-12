const chalk = require("chalk")
const fs = require("fs")
const Shoot = require("./constructors/shoot")

const rename = async function(folderPath) {
    console.log(chalk.blue(`*************\nlaunching rename with folderpath:\n${JSON.stringify(folderPath, null, 4)}`))
    if (fs.existsSync(folderPath) && fs.lstatSync(folderPath).isDirectory()) {
        console.log(`looks like ${folderPath} is indeed a directory, let's hope it's a shoot folder`)
        var theShoot = new Shoot(folderPath);
        console.log(`have a new shoot:\n${JSON.stringify(theShoot, null, 4)}`)
    } else {
        console.log(`unfortunately, ${folderPath} isn't a directory---check it again`)
    }
}

module.exports = rename