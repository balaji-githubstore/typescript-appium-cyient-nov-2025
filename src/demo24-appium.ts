import {main as appiumServer} from "appium"
import { remote } from "webdriverio";


//install to start the server
//npm install -D appium
//appium driver install uiautomator2 

async function serverStart() {
    
    const server = await appiumServer({
        port:4545,
        "address":"0.0.0.0",
        "logFile":"server.log",
        "loglevel":"info"
        })

        console.log("server running");

        const driver= await remote({
                "protocol":"http",
                "hostname":"127.0.0.1",
                "port":4545,
                "capabilities":{
                    "platformName":"Android",
                    "appium:automationName":"uiautomator2",
                    "appium:deviceName":"oneplus",
                    "appium:udid":"f1d22477"
                }
            })
        
            let actualPageSrc:string= await driver.getPageSource();
            console.log(actualPageSrc);
        
            await driver.pause(3000)

        server.close()
}

serverStart()

