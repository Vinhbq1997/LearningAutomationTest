import Login from "../../page_objects/account/Login"

describe('Learn Function', function(){
    it('should verify email text after input', function(){
        const LOGIN_ICON_HOME_PAGE = '~Login'
        $(LOGIN_ICON_HOME_PAGE).click()

        Login
        .input_email('Vinh')
        .input_pwd('123456')
        .click_on_login_button()
        Login
        .verify_email_text_displayed("Vinh")

    })
})