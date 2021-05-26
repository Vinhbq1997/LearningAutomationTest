const {config} = require('./main')

config.capabilities = [{
    "platformName": "Android",
    "automationName":"UiAutomator2",
    "udid":"1cbd435520037ece",
    //"udid":"192.168.69.103:5555", 
    "appPackage":"com.wdiodemoapp",
    "appActivity":".MainActivity"
}],

exports.config = config