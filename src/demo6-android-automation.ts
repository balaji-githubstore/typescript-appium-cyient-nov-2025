import {remote} from "webdriverio"

async function invalidLoginTest() {

    const driver= await remote({
        "protocol":"http",
        "hostname":"127.0.0.1",
        "port":4723,
        "capabilities":{
            "platformName":"Android",
            "appium:automationName":"uiautomator2",
            "appium:deviceName":"oneplus",
            "appium:app":"D:\\Balaji\\Company\\Cyient Nov 2025\\TypescriptAutomationProject\\files\\khan-academy-7-3-2.apk",
            "appium:udid":"f1d22477"
        }
    })

    // const element=await driver.$("//android.widget.TextView[@text='Sign in']")
    // element.click()

    await driver.$("//android.widget.TextView[@text='Sign in']").click()

    await driver.$("//android.widget.TextView[@text='Sign in']").click()

    await driver.$("//android.widget.EditText[contains(@text,'e-mail address')]").setValue("hello@gmail.com")

    await driver.pause(3000)
    
}


invalidLoginTest()




