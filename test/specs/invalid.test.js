describe('TC002: Login with Invalid Credentials', () => {
    it('should show error on wrong login', async () => {
        await driver.startActivity('com.spotify.music', 'com.spotify.music.MainActivity');
        await driver.pause(8000);

        const loginBtn = await $('android=new UiSelector().textContains("Log in")');
        await loginBtn.waitForExist({ timeout: 10000 });
        await loginBtn.click();

        const emailOpt = await $('android=new UiSelector().textContains("Continue with email")');
        await emailOpt.waitForExist({ timeout: 10000 });
        await emailOpt.click();

        const emailField = await $('android=new UiSelector().className("android.widget.EditText").instance(0)');
        await emailField.setValue('invaliduser@example.com');

        const passwordField = await $('android=new UiSelector().className("android.widget.EditText").instance(1)');
        await passwordField.setValue('wrongpassword123');

        const loginSubmit = await $('android=new UiSelector().text("Log in")');
        await loginSubmit.click();

        const errorMessage = await $('android=new UiSelector().textContains("incorrect")'); // Adjust this string!
        await errorMessage.waitForExist({ timeout: 15000 });

        expect(await errorMessage.isDisplayed()).toBe(true);
    });
});
