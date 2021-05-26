import CrendentialForm from "./CredentialForm"

const LOGIN_BUTTON = "~button-LOGIN"
const INVALID_EMAIL_MSG = '//*[@text="Please enter a valid email address"]'
const INVALID_PASSWORD_MSG = '//*[@text="Please enter at least 8 characters"]'

class Login extends CrendentialForm{
    wait_till_for_displayed(){
        $(LOGIN_BUTTON).waitForDisplayed()
    }

    is_on_login_screen(){
        if($(LOGIN_BUTTON).isDisplayed()) return true
        return false
    }

    click_on_login_button(){
        $(LOGIN_BUTTON).click()
    }

    is_invalid_email_format_msg_display(){
        $(INVALID_EMAIL_MSG).waitForDisplayed()
        return $(INVALID_EMAIL_MSG).isDisplayed()
    }

    is_invalid_password_format_msg_display(){
        $(INVALID_PASSWORD_MSG).waitForDisplayed()
        return $(INVALID_PASSWORD_MSG).isDisplayed()
    }
}
export default new Login()