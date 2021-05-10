import LoginPage from "../../page_objects/account/LoginWithMethodChaining"

describe('Learn Page Object', function(){
    it('should use method chaining successfully', function(){
        const LOGIN_ICON_HOME_PAGE = '~Login'
        $(LOGIN_ICON_HOME_PAGE).click()

        LoginPage
        .wait_screen_displayed()
        .input_email('Vinh')
        .input_pwd('123456')
        .click_on_loginbtn()
        .get_dashboard_name()

    })
})