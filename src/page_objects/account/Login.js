import CrendentialForm from "./CredentialForm"

const LOGIN_BUTTON = "~button-LOGIN"

class Login extends CrendentialForm{
    wait_till_for_displayed(){
        $(LOGIN_BUTTON).waitForDisplayed()
    }

    click_on_login_button(){
        $(LOGIN_BUTTON).click()
    }
}
export default new Login()