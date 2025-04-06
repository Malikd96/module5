/*describe('Spotify Login Flow', () => {
    it('should log in using email and password', async () => {
        await driver.startActivity('com.spotify.music', 'com.spotify.music.MainActivity');
        await driver.pause(8000);

        const currentPackage = await driver.getCurrentPackage();
        if (currentPackage !== 'com.spotify.music') {
            throw new Error('Spotify app is not in focus.');
        }

        const initialLoginBtn = await $('android=new UiSelector().textContains("Log in")');
        await initialLoginBtn.waitForExist({ timeout: 10000 });
        await initialLoginBtn.click();

        const continueWithEmail = await $('android=new UiSelector().textContains("Continue with email")');
        await continueWithEmail.waitForExist({ timeout: 10000 });
        await continueWithEmail.click();

        const emailField = await $('android=new UiSelector().className("android.widget.EditText").instance(0)');
        await emailField.waitForExist({ timeout: 10000 });
        await emailField.click();
        await emailField.setValue('96malikdavis@gmail.com');

        const passwordField = await $('android=new UiSelector().className("android.widget.EditText").instance(1)');
        await passwordField.waitForExist({ timeout: 10000 });
        await passwordField.click();
        await passwordField.setValue('jwmalikd96');

        const loginBtn = await $('android=new UiSelector().text("Log in")');
        await loginBtn.waitForExist({ timeout: 10000 });
        await loginBtn.click();

        // CAPTCHA handling
        let captchaVisible = false;
        try {
            const captcha = await $('android=new UiSelector().textContains("We need to make sure")');
            await captcha.waitForExist({ timeout: 8000 });
            if (await captcha.isDisplayed()) {
                captchaVisible = true;
                console.log('CAPTCHA detected. Cannot proceed further in automation.');
            }
        } catch (err) {
            console.log('No CAPTCHA detected, continuing...');
        }

        if (captchaVisible) return;

        // Only continue if no CAPTCHA
        const homeScreen = await $('android=new UiSelector().descriptionContains("Home")');
        await homeScreen.waitForExist({ timeout: 15000 });
    });
});*/
