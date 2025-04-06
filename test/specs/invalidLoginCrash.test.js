/*describe('Spotify Login Flow - Invalid Credentials Crash Test', () => {
    it('should crash or behave unexpectedly on invalid login', async () => {
        await driver.startActivity('com.spotify.music', 'com.spotify.music.MainActivity');
        await driver.pause(8000);

        const loginButton = await $('android=new UiSelector().textContains("Log in")');
        await loginButton.waitForExist({ timeout: 10000 });
        await loginButton.click();

        const continueWithEmail = await $('android=new UiSelector().textContains("Continue with email")');
        await continueWithEmail.waitForExist({ timeout: 10000 });
        await continueWithEmail.click();

        const emailField = await $('android=new UiSelector().className("android.widget.EditText").instance(0)');
        await emailField.waitForExist({ timeout: 10000 });
        await emailField.setValue('invaliduser@example.com');

        const passwordField = await $('android=new UiSelector().className("android.widget.EditText").instance(1)');
        await passwordField.waitForExist({ timeout: 10000 });
        await passwordField.setValue('wrongpass');

        const finalLoginBtn = await $('android=new UiSelector().text("Log in")');
        await finalLoginBtn.waitForExist({ timeout: 10000 });
        await finalLoginBtn.click();

        // Attempt to validate error or crash
        try {
            const errorPopup = await $('android=new UiSelector().textContains("incorrect")');
            await errorPopup.waitForExist({ timeout: 10000 });
            expect(await errorPopup.isDisplayed()).toBe(true);
        } catch (err) {
            console.error('Possible app crash or no error UI appeared.');
            throw new Error('App may have crashed on invalid login.');
        }
    });
}); */
