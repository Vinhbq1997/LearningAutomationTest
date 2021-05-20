import LoginPage from "../../page_objects/account/Login"
import NavBar from "../../page_objects/common/NavBar"
import LoginMessPopup from "../../page_objects/account/LoginMessPopup"


class LoginFlow {
    loginWithCredentials(email, password){
        NavBar.login_icon.click()
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
}

export default LoginFlow