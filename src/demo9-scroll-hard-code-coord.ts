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

    //swipe until this locator count > 0
    //*[@text='Art of Asia']


    await driver.setTimeout({ implicit: 0 })
    while (await driver.$$("//*[@text='Art of Asia']").length==0) {
        await driver.swipe({
            from: { x: 1136, y: 1500 },
            to: { x: 1136, y: 861 },
            duration: 1000
        })
    }
    await driver.setTimeout({ implicit: 30000 })

    await driver.$("//*[@text='Art of Asia']").click()


    //scroll and click on The Himalayas




    await driver.pause(3000)

}

invalidLoginTest()




