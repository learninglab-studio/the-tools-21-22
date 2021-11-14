#!/usr/bin/env node

// bring in all the tools needed for text display
var figlet = require('figlet');
var clear = require('clear');
var chalk = require('chalk');
const mk = require('./tools/mk/index');
const sixColorsStart = require('./tools/ll/six-colors-start')
const llAtem = require('./tools/ll/atem-tools')

const { secs2hms, secs2tc } = require('./tools/utilities/ll-time-tools')

require(`dotenv`).config()

// store any arguments passed in using yargs
var yargs = require('yargs').argv;

console.log("launching it.")
console.log(JSON.stringify(yargs, null, 4));

if (yargs.mk) {
    mk(yargs)
} else if (yargs.start || yargs._[0] == "start") {
    sixColorsStart(yargs.start)
} else if (yargs.atem || yargs._[0] == "atem") {
    llAtem.test({
        // ...yargs.atem,
        atemIp: process.env.A8K_IP
    })
} else if (yargs.atemsync || yargs._[0] == "atemsync") {
    llAtem.syncToClock({
        // ...yargs.atem,
        atemIp: process.env.A8K_IP
    })
} else {
    console.log(`sorry, you didn't enter a recognized command.`)
}