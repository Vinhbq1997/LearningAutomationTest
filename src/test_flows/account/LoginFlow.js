import Login from "../../page_objects/account/Login"


class LoginFlow {
    loginWithCredentials(email, password){
        Login.email_txt_feild.setValue(email)
        Login.pwd_txt_feild.setValue(password)
        Login.login_btn.click()

        
    }
    verifyEmailTextfield(email){
        expect(Login.email_txt_feild).toHaveText(email)
    }
}

export default LoginFlow