const fs = require("fs")

const validateShootPath = async function (dirPath) {
    // add some additional validation here
    // regex of path to see if it's structured right
    // offer to create properly structured name? or other feedback
    // regex of subfolders to check structure
    // look for random files
    // see if subfolders contain nothing but acceptable files
    if (fs.existsSync(dirPath) && fs.lstatSync(dirPath).isDirectory()) {
        return true;
    } else {
        return false;
    }
}

module.exports = validateShootPath