import { Browser, remote } from "webdriverio"


async function workOnCloudTest() {

    let driver: Browser | undefined
    try {
        driver = await remote({
            protocol: "https",
            hostname: "hub-cloud.browserstack.com",
            port: 443,
            path: "/wd/hub",
            user: "balajidinakaran_tMbOnZ",
            key: "dsrHshshLz5tHMM5Kvvu",
            "capabilities": {
                "appium:app": "bs://061d280a619dbbeebc6f21f8853e55082f7ef6c6",
               
                'bstack:options': {
                    deviceName: "iPhone 14 Pro Max",
                    platformVersion: "16",
                    platformName: "ios",

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



         const element= await driver.$("//XCUIElementTypeOther[@name='test-Cart']")
         const loc=await element.getLocation();
         console.log( loc.x+30);
         console.log(loc.y+15);


         //tap on add to cart until checkout count is 1
        while(await driver.$$("//XCUIElementTypeOther[@name='test-CHECKOUT']").length==1)
        {
            await driver.execute("mobile: tap",{x:loc.x+30, y:loc.y+20})
        }


        console.log(await driver.$$("//XCUIElementTypeOther[@name='test-CHECKOUT']").length);
       
        console.log(await driver.$("//XCUIElementTypeOther[@name='test-CHECKOUT']").isDisplayed());


        //scroll until the visiblity
        while(await driver.$("//XCUIElementTypeOther[@name='test-CHECKOUT']").isDisplayed()==false)
        {
            await driver.execute("mobile: scroll",{direction:"down"})
        }
        await driver.$("//XCUIElementTypeOther[@name='test-CHECKOUT']").click()
        


        //scroll to get the name=test-CHECKOUT 
        await driver.execute("mobile: scroll",{elementId:element.elementId, direction:"down",name:"test-CHECKOUT",toVisible:true})



        await driver.execute("mobile: scroll",{direction:"down",predicateString:"name=='test-CHECKOUT'",toVisible:true})


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


