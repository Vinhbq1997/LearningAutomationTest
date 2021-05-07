
describe('Learning WebdriverIO API', function(){

    it('Should click on Login successfully', function(){
        const LOGIN_ICON = '~Login'

        $(LOGIN_ICON).click()
        browser.pause(3000)

    })
})
