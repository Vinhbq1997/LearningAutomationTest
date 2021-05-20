import DashBoard from "./DashBoard"

const EMAIL_TXT_FEILD = '~input-email'
const PWD_TXT_FEILD = '~input-password'
const LOGIN_BTN = '~button-LOGIN'

class LoginWithMethodChaining {
    wait_screen_displayed(){
        $(EMAIL_TXT_FEILD).waitForDisplayed()
        return this
    }

    input_email(email){
        $(EMAIL_TXT_FEILD).setValue(email)
        return this
    }

    input_pwd(pwd){
        $(PWD_TXT_FEILD).setValue(pwd)
        return this
    }

    click_on_loginbtn(){
        $(LOGIN_BTN).click()
        return DashBoard
    }
}

export default new LoginWithMethodChaining()