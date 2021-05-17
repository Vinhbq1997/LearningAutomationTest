import LoginFlow from "../../test_flows/account/LoginFlow"

describe('Learn Function', function(){
    it('should verify email text after input', function(){
        const LOGIN_ICON_HOME_PAGE = '~Login'
        $(LOGIN_ICON_HOME_PAGE).click()

        let email = "teo"
        let password = "123456789"

        let loginFlow = new LoginFlow()
        loginFlow.loginWithCredentials(email, password)
        loginFlow.verifyEmailTextfield(email)
            

    })
})
