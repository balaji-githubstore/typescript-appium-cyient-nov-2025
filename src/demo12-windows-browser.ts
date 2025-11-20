import { remote } from "webdriverio"

async function invalidLoginTest() {

    const driver = await remote({
        "capabilities": {
            "browserName":"chrome"
        }
    })

    await driver.url("https://www.facebook.com/")
    await driver.$("//input[@id='m_login_email']").setValue("hello113")
   
    await driver.$("//input[@id='pass']").setValue("hello113")

    await driver.$("//button[@login='login']").setValue("hello113")
}

invalidLoginTest()




