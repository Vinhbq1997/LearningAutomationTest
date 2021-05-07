describe('Learning WebdriverIO API', function(){

    it('AddValue API successfully', function(){

    //Declare element selector value
    const LOGIN_ICON_HOME_PAGE = '~Login'
    const EMAIL_TXT_FIELD = '~input-email'

    // 1. Click on Login on  Home Screen
    $(LOGIN_ICON_HOME_PAGE).click()
    //2. Fill email text field
    $(EMAIL_TXT_FIELD).addValue('abc123')
    $(EMAIL_TXT_FIELD).addValue('@gmail.com')

    //3. Demonstrate about AddValue
    $(EMAIL_TXT_FIELD).setValue('new@gmail.com')

    //4 Clear the text field
    $(EMAIL_TXT_FIELD).clearValue()
    browser.pause(3000)
    });

});