import {remote} from "webdriverio"

async function intallApp() {

    const driver= await remote({
        "protocol":"http",
        "hostname":"127.0.0.1",
        "port":4723,
        "capabilities":{
            "platformName":"Android",
            "appium:automationName":"uiautomator2",
            "appium:deviceName":"oneplus",
            "appium:app":"D:\\Balaji\\Company\\Cyient Nov 2025\\TypescriptAutomationProject\\files\\khan-academy-7-3-2.apk"
        }

    })

    let actualPageSrc:string= await driver.getPageSource();
    console.log(actualPageSrc);

    await driver.pause(3000)
    
}


intallApp()




