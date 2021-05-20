import CrendentialForm from "./CredentialForm"

//Declare Selector values on the page
const LOGIN_BTN = '~button-LOGIN'

class Login extends CrendentialForm {
    get login_btn(){
        $(LOGIN_BTN).waitForDisplayed({timeout:5000})
        return $(LOGIN_BTN)
    }

}
export default new Login()