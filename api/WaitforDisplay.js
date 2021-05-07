describe('Learning WebdriverIO API', function(){

    it('Learning wait for display', function(){
        const LOGIN_ICON_HOME_PAGE = '~Login'
        const FORMS_ICON_HOME_PAGE = '~Forms'
        const SWITCH_BUTTON = '~switch'
        //1. Go to Login form
        $(LOGIN_ICON_HOME_PAGE).click()
        //2.Wait 4 seconds, Try manually click on the form screen
        //3. Toggle the Switch button
        $(SWITCH_BUTTON).waitForDisplayed({timeout:6000})
        $(SWITCH_BUTTON).click()
        //3. Wait a little for result
        browser.pause(3000)

    })
})