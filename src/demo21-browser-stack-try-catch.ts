import { Browser, remote } from "webdriverio"


async function workOnCloudTest() {

    let driver: Browser | undefined
    try {
        driver = await remote({
            protocol: "https",
            hostname: "hub-cloud.browserstack.com",
            port: 443,
            path: "/wd/hub",
            user: "balajidinakaran_tMbOnZ1",
            key: "dsrHshshLz5tHMM5Kvvu",
            "capabilities": {
                "appium:app": "bs://f8734c1b1b5fa7449f2bf4ea2bed7f77555315eb",
               
                'bstack:options': {
                    deviceName: "Samsung Galaxy S22 Ultra",
                    platformVersion: "12.0",
                    platformName: "android",

                    projectName: "BrowserStack Samples",
                    buildName: 'browserstack build',
                    sessionName: 'BStack webdriverio-appium',
                    debug: true,
      networkLogs: true,
    //   source: 'webdriverio:appium-sample-sdk:v1.0'
                }
            }
        })

        console.log(await driver.getPageSource());

        await driver.$("//*[@text='Dismiss']").click()
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
    catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
    finally {
        if (driver)
            await driver.deleteSession()
    }
}

workOnCloudTest()


