
//Declare Selector values on the page
const EMAIL_TXT_FEILD = '~input-email'
const PWD_TXT_FEILD = '~input-password'

class CrendentialForm {
  
    get email_txt_feild(){
        $(EMAIL_TXT_FEILD).waitForDisplayed({timeout: 5000})
        return $(EMAIL_TXT_FEILD)
    }

    get pwd_txt_feild(){
        $(PWD_TXT_FEILD).waitForDisplayed({timeout:5000})
        return $(PWD_TXT_FEILD)
    }

    input_email(email){
        $(EMAIL_TXT_FEILD).setValue(email)
        return this
    }

    input_pwd(pwd){
        $(PWD_TXT_FEILD).setValue(pwd)
        return this
    }

    wait_till_screen_displayed(){
        $(EMAIL_TXT_FEILD).waitForDisplayed()
    }
    verify_email_text_displayed(value){
        expect(this.email_txt_feild).toHaveText(value,{trim: true})
        chaiExpect(this.email_txt_feild.getText()).to.be.equal(value, "[ERR] the email field is incorrect")

    }
}

export default CrendentialForm 