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
            "appium:noReset":true
        }
    })

    await driver.setTimeout({ implicit: 30000 })

    // await driver.installApp("D:\\Balaji\\Company\\Cyient Nov 2025\\TypescriptAutomationProject\\files\\khan-academy-7-3-2.apk")

    //give package name to launch
    await driver.activateApp("org.khanacademy.android")

    //check for presence of element in 0.5s and picks the first element 
    await driver.$("//android.widget.TextView[@text='Sign in']").click()

    await driver.$("//android.widget.TextView[@text='Sign in']").click()

    await driver.$("//android.widget.EditText[contains(@text,'e-mail address')]").setValue("hello@gmail.com")

    //enter password as welcom123
    await driver.$("//android.widget.EditText[@text='Password']").setValue("welomce123");

    //click on login
    await driver.$("(//android.widget.TextView[@text='Sign in'])[2]").click()

    let actualError: string = await driver.$("//android.widget.TextView[contains(@text,'incorrect')]").getAttribute("text")

    console.log(actualError);

    let actualError1: string = await driver.$("//android.widget.TextView[contains(@text,'incorrect')]").getText()
    console.log(actualError1);
    await driver.pause(3000)

}


invalidLoginTest()




