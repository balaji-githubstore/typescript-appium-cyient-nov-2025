//android.view.View[contains(@content-desc,'onwards')]/../android.view.View[1]

import { sourceMapsEnabled } from "process"
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

    // await driver.activateApp("org.khanacademy.android")


    //android.view.View[contains(@content-desc,'onwards')]/../android.view.View[1]


    const elements = await driver.$$("//android.view.View[contains(@content-desc,'onwards')]/../android.view.View[1]")

    const carName0= await elements[0]?.getAttribute("content-desc")
    console.log(carName0);

    for (let i = 0; i < await elements.length; i++) {
        const carName0 = await elements[i]?.getAttribute("content-desc")

        console.log(carName0);
    }




    await driver.pause(3000)

}

invalidLoginTest()



