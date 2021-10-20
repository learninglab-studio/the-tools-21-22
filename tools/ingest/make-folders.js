const chalk = require("chalk")
const fs = require("fs")
const path = require("path")

const standardFolders = [
    `amx.a.a1`,
    `amx.a.a2`,
    `amx.a.a3`,
    `amx.a.a4`,
    `amx.a.a5`,
    `amx.a.a6`,
    `amx.a.a7`,
    `amx.a.a8`,
    `amx.a.v1`,
    `amx.a.v2`,
    `amx.a.v3`,
    `amx.a.v4`,
    `amx.a.v5`,
    `amx.a.v6`,
    `amx.a.v7`,
    `amx.a.v8`,
    `amx.a.drp`,
    `amx.a.pgm`,
    `c300.a.qt`,
    `c300.b.qt`,
    `c200.a.h264`,
    `c200.b.h264`,
    `sho.a.prores`,
    `hyper.a.prores`,
    `hyper.b.prores`,
    `hyper.c.prores`,
    `hyper.d.prores`,
]

const makeFolders = async function(folderPath) {
    console.log(chalk.blue(`*************\nlaunching makeFolder with folderpath:\n${JSON.stringify(folderPath, null, 4)}`))
    // TODO: validate shoot path
    // TODO: handle --amx value for different amx devices
    for (let index = 0; index < standardFolders.length; index++) {
        const element = standardFolders[index];
        fs.mkdirSync(path.join(folderPath, element))
    }
}

async function changeTheNames(operationArray) {
    console.log(`renaming x to y`);
    return("array of naming operations");
}

module.exports = makeFolders
