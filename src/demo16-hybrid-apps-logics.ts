import {remote} from "webdriverio"

async function hybridAppTest() {

    const driver= await remote({
        "protocol":"http",
        "hostname":"127.0.0.1",
        "port":4723,
        "capabilities":{
            "platformName":"Android",
            "appium:automationName":"uiautomator2",
            "appium:deviceName":"oneplus",
            "appium:chromedriverExecutable":"D:\\Balaji\\Company\\Cyient Nov 2025\\TypescriptAutomationProject\\files\\chromedriver.exe"

        }
    })

    await driver.setTimeout({implicit:30000})
    await driver.activateApp("com.docusign.ink");

    await driver.$("//android.widget.Button[@text='Log In']").click()

    let contexts= await driver.getContexts()
    console.log(contexts);

    for(let cxt of contexts)
    {
           console.log(cxt);
           await driver.switchContext(cxt)
           if(await driver.$$("//input[@data-qa='username']").length>0)
           {
                break
           }
    }
   
    //currently we will be in the WEB_VIEW where //input[@data-qa='username'] is present
     await driver.$("//input[@data-qa='username']").setValue("jack123")
     //click on NEXT

}


hybridAppTest()