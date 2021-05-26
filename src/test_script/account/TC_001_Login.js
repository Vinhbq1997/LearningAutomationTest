import { VALID_CREDS,INVALID_CREDS} from "../../test_data/account/TC_001_Login"
import LoginFlow from "../../test_flows/account/LoginFlow"

describe('Account Function', function(){
    it('should login successfully', function(){
        const {email, password} = VALID_CREDS
        const loginFlow = new LoginFlow(email,password)
        loginFlow
        .loginWithCredentials() 
        .verify_login_successfully()
    })
    it('should see valid msg when login unsuccessfully', function(){
        const {email, password} = INVALID_CREDS
        const loginFlow = new LoginFlow(email,password)
        loginFlow
        .loginWithCredentials() 
        .verify_login_unsuccessfully()
    })
})