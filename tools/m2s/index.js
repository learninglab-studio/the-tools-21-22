const fs = require('fs')
var xml2js = require('xml2js');
const { llTimestamp, llDate } = require('../utilities/ll-time-tools')
const path = require('path');

module.exports = async function (xml) {
    console.log(`starting m2s with xml: ${xml}`)
    const xmlString = fs.readFileSync(xml, {encoding:'utf8', flag:'r'});
    const parser = new xml2js.Parser
    const parsedXml = await parser.parseStringPromise(xmlString)
        .then((result) => {
            console.log('Done');
            return result
        })
        .catch(function (err) {
        // Failed
        });
        // `data/sample-xml/sample-json`
    console.log(JSON.stringify(parsedXml, null, 4));
    fs.writeFileSync(`${path.dirname(xml)}/${llTimestamp()}`, JSON.stringify(parsedXml, null, 4), { encoding: "utf8" });
}