
describe('Learning WebdriverIO API', function(){

    it('should take screenshot', function(){
        
        const FORMS_ICON_HOME_PAGE = '~Forms'
        const SWITCH_BUTTON = '~switch'
       //1. Go to the forms field
        $(FORMS_ICON_HOME_PAGE).click()
        //2. take a button's picture1
        $(SWITCH_BUTTON).saveScreenshot("screenshot/button1.png")
         //2. Toggle the Switch button
        $(SWITCH_BUTTON).click()
       //3. take a home page's picture
        browser.saveScreenshot('./screenshot/API_Learning_saveScreenshot.png')
        //4. take a button's picture2
        $(SWITCH_BUTTON).saveScreenshot("./screenshot/button2.png")


         

    })
})