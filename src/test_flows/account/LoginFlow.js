import LoginPage from "../../page_objects/account/Login"
import NavBar from "../../page_objects/common/NavBar"
import LoginMessPopup from "../../page_objects/account/LoginMessPopup"
import { expect } from "chai"


class LoginFlow {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    loginWithCredentials(email, password){
        if(!LoginPage.is_on_login_screen()) NavBar.login_icon.click()
        LoginPage.email_txt_feild.setValue(email)
        LoginPage.pwd_txt_feild.setValue(password)
        LoginPage.click_on_login_button()
        return this;
    }
    
    verify_login_successfully(){
        
        const expected_msg_title = "Success"
        const expected_msg_content = "You are logged in!"

        expect(LoginMessPopup.msg_title).toHaveText(expected_msg_title)
        expect(LoginMessPopup.msg_content).toHaveText(expected_msg_content)

        LoginMessPopup.msg_accept_btn.click()
    }
    verify_login_unsuccessfully(){
        if(!this.email && this.password.length >= 8) {
            chaiExpect(LoginPage.is_invalid_email_format_msg_display()).to.equal(true)
            chaiExpect(LoginPage.is_invalid_password_format_msg_display()).to.equal(false)
        }else if(this.email.length > 0 && this.password.length < 8) {
            chaiExpect(LoginPage.is_invalid_email_format_msg_display()).to.equal(false)
            chaiExpect(LoginPage.is_invalid_password_format_msg_display()).to.equal(true)
        }else {
            chaiExpect(LoginPage.is_invalid_email_format_msg_display()).to.equal(true)
            chaiExpect(LoginPage.is_invalid_password_format_msg_display()).to.equal(true)
        }
        
        
    }
}

export default LoginFlow