import LoginPage from '../../page_objects/account/LoginWithGlobalWait.js'
describe('Account Function', ()=>{

    it('should raise an error for wrong crendentials', ()=>{
    const LOGIN_ICON_HOME_PAGE = '~Login'
    $(LOGIN_ICON_HOME_PAGE).click()


    LoginPage.wait_till_screen_displayed()
    LoginPage.email_txt_feild.setValue("Vinh")
    LoginPage.pwd_txt_feild.setValue('123456')
    LoginPage.login_btn.click()

    browser.pause(3000)
    });

});