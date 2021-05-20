import { VALID_CREDS} from "../../test_data/account/TC_001_Login"
import LoginFlow from "../../test_flows/account/LoginFlow"

describe('Account Function', function(){
    it('should login successfully', function(){
        const {email, password} = VALID_CREDS
        const loginFlow = new LoginFlow()
        loginFlow
        .loginWithCredentials(email,password) 
        .verify_login_successfully()
    })
})