import LoginPage from '../../page_objects/account/Login.js'
describe('Account Function', function(){

    it('should raise an error for wrong crendentials', function(){

    //Declare element selector value
    const LOGIN_ICON_HOME_PAGE = '~Login'
    // 1. Click on Login on  Home Screen
    $(LOGIN_ICON_HOME_PAGE).click()
    //2. Fill email text field
    LoginPage.email_txt_feild.setValue("Vinh")
    //3. Fill password text field
    LoginPage.pwd_txt_feild.setValue('123456')
    //4. Click on Login button
    LoginPage.login_btn.click()

    browser.pause(3000)
    });

});