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
            "appium:browserName": "chrome"
        }
    })

    await driver.setTimeout({ implicit: 30000 })

    await driver.url("https://www.facebook.com/")
    await driver.$("//input[@id='email']").setValue("hello113")
   
    await driver.$("//input[@id='pass']").setValue("hello113")

    await driver.$("//button[@login='login']").setValue("hello113")
}

invalidLoginTest()




