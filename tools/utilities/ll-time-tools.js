const dateFns = require('date-fns')

const { zonedTimeToUtc, utcToZonedTime, format } = require('date-fns-tz')

module.exports.llTimestamp = () => {
    return dateFns.format(new Date(), 'yyyyMMdd.HHmmss.SSS')
}

module.exports.llDate = () => {
    return dateFns.format(new Date(), 'yyyyMMdd')
}

module.exports.secs2hms = (seconds) => {
    if (/\//.test(seconds)) {
        let actualSeconds = parseInt(seconds.split('/')[0])/parseInt(seconds.split('/')[1])
        const tempUTCDate= dateFns.addSeconds(new Date(0), actualSeconds);
        const tzOffset = tempUTCDate.getTimezoneOffset()
        const actualUTCDate = dateFns.addMinutes(tempUTCDate, tzOffset)
        console.log(`actual seconds are ${actualSeconds} and time is ${dateFns.format(actualUTCDate, 'HH:mm:ss')}`);
        console.log(`tz offset is ${tzOffset}`);
        return dateFns.format(actualUTCDate, 'HH:mm:ss');
    } else {
        var tempDate = dateFns.addSeconds(new Date(3600*5*1000), seconds);
        console.log(`seconds are ${seconds} and time is ${dateFns.format(tempDate, 'HH:mm:ss')}`);
        return dateFns.format(tempDate, 'HH:mm:ss');
    }
}

module.exports.secs2tc = (seconds) => {
    if (/\//.test(seconds)) {
        let actualSeconds = parseInt(seconds.split('/')[0])/parseInt(seconds.split('/')[1])
        console.log(`actual seconds are ${actualSeconds}`);
        secondsToHMS(actualSeconds)
    } else {
       secondsToHMS(seconds)
    }
}

function secondsToHMS(seconds) {
    let theFrames = seconds%1
    let remainingSeconds = seconds - theFrames;
    let theSeconds = remainingSeconds%60
    let minutes = (remainingSeconds - theSeconds)/60
    let theMinutes = minutes%60
    let theHours = (minutes-theMinutes)/60
    console.log(`HMS => ${theHours}:${theMinutes}:${theSeconds}.${theFrames}`)
}

function nyLiteralToUTC(dateString) {
    console.log(`converting ${dateString} to GMT date`);
    let theDate = new Date(dateString)
}