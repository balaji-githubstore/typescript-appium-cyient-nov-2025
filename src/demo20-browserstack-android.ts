import { remote } from "webdriverio"

async function intallApp() {

    const driver = await remote({
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
// bs://061d280a619dbbeebc6f21f8853e55082f7ef6c6
    let actualPageSrc: string = await driver.getPageSource();
    console.log(actualPageSrc);


    // await driver.pressKeyCode(4)


    await driver.deleteSession()
}


intallApp()


// standard_user
// secret_sauce
