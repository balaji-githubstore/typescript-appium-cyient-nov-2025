import { remote } from "webdriverio"

async function invalidLoginTest() {

    const driver = await remote({
        "protocol": "http",
        "hostname": "127.0.0.1",
        "port": 4723,
        "capabilities": {
            "platformName": "Android",
            "appium:automationName": "uiautomator2",
            "appium:deviceName": "oneplus",
            "appium:udid": "f1d22477",
            "appium:appPackage":"org.khanacademy.android",
            "appium:appActivity":"org.khanacademy.android.ui.library.MainActivity"
        }
    })

    await driver.$("//android.widget.TextView[@text='Sign in']").click()

    await driver.$("//android.widget.TextView[@text='Sign in']").click()

    await driver.$("//android.widget.EditText[contains(@text,'e-mail address')]").setValue("hello@gmail.com")

    //enter password as welcom123

    //click on login

    await driver.pause(3000)

}


invalidLoginTest()




