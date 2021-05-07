
//Declare Selector values on the page
const EMAIL_TXT_FEILD = '~input-email'
const PWD_TXT_FEILD = '~input-password'
const LOGIN_BTN = '~button-LOGIN'


class LoginWithGlobalWait{
    wait_till_screen_displayed(){
        $(LOGIN_BTN).waitForDisplayed()
    }
    get email_txt_feild(){
        return $(EMAIL_TXT_FEILD)
    }

    get pwd_txt_feild(){
        return $(PWD_TXT_FEILD)
    }

    get login_btn(){
        return $(LOGIN_BTN)
    }

}
export default new LoginWithGlobalWait()