
//Declare Selector values on the page
const EMAIL_TXT_FEILD = '~input-email'
const PWD_TXT_FEILD = '~input-password'

class CrendentialForm {
    wait_till_screen_displayed(){
        $(EMAIL_TXT_FEILD).waitForDisplayed({timeout:5000})
    }
    
    get email_txt_feild(){
        $(EMAIL_TXT_FEILD).waitForDisplayed({timeout: 5000})
        return $(EMAIL_TXT_FEILD)
    }

    get pwd_txt_feild(){
        $(PWD_TXT_FEILD).waitForDisplayed({timeout:5000})
        return $(PWD_TXT_FEILD)
    }
}

export default CrendentialForm 