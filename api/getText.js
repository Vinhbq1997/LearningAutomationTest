describe('Learning WebdriverIO API', function(){

    it('learn getValue API', function(){

        const FORMS_ICON_HOME_PAGE = '~Forms'
        const INPUT_FIELD = '~text-input'
        const INPUT_DISPLAY = '~input-text-result'
        // 0. Click on Login icon from home screen
        $(FORMS_ICON_HOME_PAGE).click()
        // 1. Try to input some values in text field
        $(INPUT_FIELD).setValue('Hello123456')
        // 2. Get the value from field [you have typed]
        let display_field = $(INPUT_DISPLAY).getText()

        // 3. Print out that value
        console.log(display_field)
    browser.pause(3000)
    });

});