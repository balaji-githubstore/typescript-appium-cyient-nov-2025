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

    const settingsElement = await driver.$("~Settings")
    const {x,y} = await settingsElement.getLocation()

    const {width,height}= await settingsElement.getSize()

    await driver.performActions([
            {
                type: "pointer",
                id: "finger1",
                parameters: { pointerType: "touch" },
                actions: [
                    { type: "pointerMove", duration: 0, x: x+10, y: y+10 }, // start
                    { type: "pointerDown", button: 0 },
                    { type: "pause", duration: 5000 },
                    {type: "pointerMove", duration: 500, x: 300, y: 300 }, // end
                    { type: "pointerUp", button: 0 }
                ]
            }
        ]);

    const origin = await driver.$('#source')
    const targetOrigin = await driver.$('#target')
    // await driver.touchAction({action:"tap",x:45,y:33})
    driver.action('pointer')
        .move({ duration: 0, origin, x: 0, y: 0 })
        .down({ button: 0 }) // left button
        .pause(10)
        .move({ duration: 0, origin: targetOrigin })
        .up({ button: 0 })
        .perform()

    // await driver.pause(3000)

}

invalidLoginTest()




