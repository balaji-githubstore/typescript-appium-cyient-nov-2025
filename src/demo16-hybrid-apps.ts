import {remote} from "webdriverio"

async function hybridAppTest() {

    const driver= await remote({
        "protocol":"http",
        "hostname":"127.0.0.1",
        "port":4723,
        "capabilities":{
            "platformName":"Android",
            "appium:automationName":"uiautomator2",
            "appium:deviceName":"oneplus",
            "appium:chromedriverExecutable":"D:\\Balaji\\Company\\Cyient Nov 2025\\TypescriptAutomationProject\\files\\chromedriver.exe"

        }
    })

    await driver.setTimeout({implicit:30000})
    await driver.activateApp("com.docusign.ink");

    // const ele= await driver.$("//android.widget.Button[@text='Log In']")
    // ele.waitForDisplayed({timeout:30000})
    // ele.click()
    await driver.$("//android.widget.Button[@text='Log In']").click()

    let contexts= await driver.getContexts()
    console.log(contexts);

    await driver.switchContext("WEBVIEW_chrome")

    // console.log(await driver.getPageSource());

    //input[@data-qa='username']
    await driver.$("//input[@data-qa='username']").setValue("jack123")

    //span[text()='NEXT']
}


hybridAppTest()