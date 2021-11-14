var cp = require('child_process');
const fs = require(`fs`);
const { Atem } = require('atem-connection');

module.exports.test = async (options) => {
    console.log(`starting the ATEM`);
    var stream = fs.createWriteStream("/Users/ll-studio/Development/the-tools-21-22/.logs/atem-output/atem-logs.txt", {flags:'a'});
    const myAtem = new Atem();
    myAtem.on('info', console.log)
    myAtem.on('error', console.error)
    myAtem.connect(options.atemIp)
    // myAtem.on('stateChanged', (state, pathToChange) => {
    //     stream.write(`\n\n${new Date().toISOString()}\n${JSON.stringify(state)}`);
    //     console.log(`state changed at ${new Date().toISOString()}`) // catch the ATEM state.
    //     console.log(JSON.stringify(state, null, 4))
    // })
    myAtem.on('connected', () => {
        myAtem.changeProgramInput(3).then(() => {
            fs.writeFileSync(`/Users/ll-studio/Development/the-tools-21-22/.logs/atem-output/atem-state-${new Date().toISOString()}.json`, JSON.stringify(myAtem.state, null, 4))
            console.log('Program input set');
            console.log(`now ending the connection`);
            myAtem.disconnect()
        })
    })
    myAtem.on('disconnected', () => {
        console.log(`now disconnected from the ATEM. bye.`);
        process.exit()  
    })
}



module.exports.syncToClock = async (options) => {
    console.log(`starting the ATEM connection to sync`);
    const myAtem = new Atem(options.atemIp);
    myAtem.on('info', console.log)
    myAtem.on('error', console.error)
    myAtem.connect(options.atemIp)
    myAtem.on('connected', () => {
        let now = new Date()
        myAtem.setTime(now.getHours(), now.getMinutes(), (now.getSeconds()+1), 7).then(() => {
            // console.log(`new ATEM Time is ${JSON.stringify(myAtem.state.info.lastTime, null, 4)}`);
            fs.writeFileSync(`/Users/ll-studio/Development/the-tools-21-22/.logs/atem-output/atem-state-${new Date().toISOString()}.json`, JSON.stringify(myAtem.state, null, 4))
            console.log(`now ending the connection`);
            myAtem.disconnect()
        });
    })
    myAtem.on('disconnected', () => {
        console.log(`now disconnected from the ATEM. bye.`);
        process.exit()  
    })
}


