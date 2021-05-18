import LoginFlow from "../../test_flows/account/LoginFlow"
import testData from "../../test_data/account/TC_006_LoginWithCommomFlow"
describe('Learn Function', function(){
    it('should verify email text after input', function(){
        const LOGIN_ICON_HOME_PAGE = '~Login'
        $(LOGIN_ICON_HOME_PAGE).click()


        const {email,password} = testData.loginData
        let loginFlow = new LoginFlow()
        loginFlow.loginWithCredentials(email, password)
        loginFlow.verifyEmailTextfield(email)
            

    })
})
