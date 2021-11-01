#!/usr/bin/env node

// bring in all the tools needed for text display
var figlet = require('figlet');
var clear = require('clear');
var chalk = require('chalk');
const mk = require('./tools/mk/index')
const rename = require('./tools/ingest/rename')
const makeFolders = require('./tools/ingest/make-folders')
const m2s = require('./tools/m2s/index.js')
const { secs2hms, secs2tc } = require('./tools/utilities/ll-time-tools')

// store any arguments passed in using yargs
var yargs = require('yargs').argv;

console.log("launching it.")

if (yargs.mk) {
    mk(yargs)
} else if (yargs.rename) {
    rename(yargs.rename)
} else if (yargs.makefolders) {
    makeFolders(yargs.makefolders)
} else if (yargs.m2s) {
    m2s(yargs.m2s)
} else {
    console.log(`sorry, you didn't enter a recognized command.`)
}