#!/usr/bin/env node

// bring in all the tools needed for text display
var figlet = require('figlet');
var clear = require('clear');
var chalk = require('chalk');
const mk = require('./tools/mk/index')
const rename = require('./tools/ingest/rename')
const makeFolders = require('./tools/ingest/make-folders')


// store any arguments passed in using yargs
var yargs = require('yargs').argv;

console.log("launching it.")

if (yargs.mk) {
    mk(yargs)
} else if (yargs.rename) {
    rename(yargs.rename)
} else if (yargs.makefolders) {
    makeFolders(yargs.makefolders)
}