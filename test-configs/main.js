let chai = require("chai")
const allure = require('allure-commandline')
exports.config = {
    runner: 'local',
    port: 4723,
    host: 'localhost',
    path: '/wd/hub',
    logLevel:'info',
    framework:'mocha',
    mocha0pts: {
        uid:'bdd',
        require:['@babel/register'],
        timeout:600000
    },
    waitforTimeout: 5000,
    maxInstance:1,
    sync:true,
    specs:[
        './src/test_script/account/TC_001_Login.js'
    ],
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],
    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    before: function() {
        global.chaiExpect = chai.expect
    }
}