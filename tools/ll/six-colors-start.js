var figlet = require('figlet');
var clear = require('clear');
var chalk = require('chalk');
var cp = require('child_process');

const appsToStart = [
    {
        app: "Google Chrome",
        file: "https://github.com/learninglab-studio"
    },
    {
        app: "/Applications/Blackmagic ATEM Switchers/ATEM Software Control.app",
        file: ""
    }
]

module.exports = async (options) => {
    for (let i = 0; i < appsToStart.length; i++) {
        cp.spawnSync ('open', [
            '-a', appsToStart[i].app,
            appsToStart[i].file
        ])
    }
}
