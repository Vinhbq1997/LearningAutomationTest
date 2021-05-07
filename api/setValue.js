describe('Learning WebdriverIO API', function(){

    it('should input user and password successfully', function(){

    //Declare element selector value
    const LOGIN_ICON_HOME_PAGE = '~Login'
    const EMAIL_TXT_FIELD = '~input-email'
    const PW_TXT_FIELD = '~input-password'
    const LOGIN_BUTTON = '~button-LOGIN'
    // 1. Click on Login on  Home Screen
    $(LOGIN_ICON_HOME_PAGE).click()
    //2. Fill email text field
    $(EMAIL_TXT_FIELD).setValue('abc123@gmail.com')
    //3. Fill password text field
    $(PW_TXT_FIELD).setValue('123456')
    //4. Click on Login button
    $(LOGIN_BUTTON).click()

    browser.pause(3000)
    });

});