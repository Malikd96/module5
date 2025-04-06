exports.config = {
    runner: 'local',
    specs: [
        './test/specs/invalid.test.js'
      ],

    maxInstances: 1,
capabilities: [{
  platformName: "Android",
  "appium:platformVersion": "16", // API 34+
  "appium:deviceName": "emulator-5554",
  "appium:automationName": "UiAutomator2",
  "appium:appPackage": "com.spotify.music", // or your Module 5 package if switching apps
  "appium:appActivity": "com.spotify.music.MainActivity",
  "appium:noReset": true,
  "appium:newCommandTimeout": 300
}],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 20000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
