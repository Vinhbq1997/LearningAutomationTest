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
    maxInstance:1,
    sync:true,
    specs:[
        //'./PlaywithMocha.js'
        //'./api/click.js'
        //'./api/setValue.js'
        //'./api/addValue.js'
        //'./api/getValue.js'
        //'./api/switch.js'
        //'./api/WaitforDisPlay.js'
        './api/savescreenShot.js'
    ],
    capabilities:[{
    "platformName": "Android",
    "automationName":"UiAutomator2",
    "udid":"1cbd435520037ece",
    "appPackage":"com.wdiodemoapp",
    "appActivity":".MainActivity"
    }]
}