describe('Learning WebdriverIO API', function(){

    it('Learning toggle switch button', function(){

         const FORMS_ICON_HOME_PAGE = '~Forms'
         const SWITCH_BUTTON = '~switch'
        //1. Go to the forms field
        $(FORMS_ICON_HOME_PAGE).click()
        //2. Toggle the Switch button
        $(SWITCH_BUTTON).click()
        //3. Wait a little for result
        browser.pause(3000)
    })
})
