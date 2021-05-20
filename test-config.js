let chai = require("chai")

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
    capabilities:[{
    "platformName": "Android",
    "automationName":"UiAutomator2",
    "udid":"1cbd435520037ece",
    //"udid":"192.168.69.103:5555", 
    "appPackage":"com.wdiodemoapp",
    "appActivity":".MainActivity"
    }],

    before: function() {
        global.chaiExpect = chai.expect
    }
}