
//Declare Selector values on the page
const EMAIL_TXT_FEILD = '~input-email'
const PWD_TXT_FEILD = '~input-password'
const LOGIN_BTN = '~button-LOGIN'


class Login {
    get email_txt_feild(){
        $(EMAIL_TXT_FEILD).waitForDisplayed()
        return $(EMAIL_TXT_FEILD)
    }

    get pwd_txt_feild(){
        $(PWD_TXT_FEILD).waitForDisplayed()
        return $(PWD_TXT_FEILD)
    }

    get login_btn(){
        $(LOGIN_BTN).waitForDisplayed()
        return $(LOGIN_BTN)
    }

}

export default new Login()