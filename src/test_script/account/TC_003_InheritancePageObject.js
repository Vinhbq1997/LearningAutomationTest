import LoginPage from '../../page_objects/account/Login'


describe('Account Function', function(){
    it('Should use inheritance PO successfully', function(){
        const LOGIN_ICON_HOME_PAGE = '~Login'
        $(LOGIN_ICON_HOME_PAGE).click()

        LoginPage.wait_till_screen_displayed()
        LoginPage.email_txt_feild.setValue('Vinh')
        LoginPage.pwd_txt_feild.setValue('123456')
        LoginPage.login_btn.click()

    })
})