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
            "appium:noReset": true
        }
    })

    await driver.setTimeout({ implicit: 30000 })

    await driver.activateApp("org.khanacademy.android")

    //use UiSelector
    //click on explore 
    await driver.$('android=new UiSelector().text("Explore")').click()

    //click on Arts and Humanities 
    await driver.$('android=new UiSelector().text("Arts and humanities")').click()


    await driver.execute("mobile: scroll",{
        "strategy":"-android uiautomator",
        "selector":'UiSelector().text("Art of Asia")'
    })

    //read sms --> last 2 sms and print it
    await driver.execute("mobile: listSms",{
        "number":""
    })

    await driver.$("//*[@text='Art of Asia']").click()
    await driver.pause(3000)

}

invalidLoginTest()




