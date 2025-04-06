describe('Spotify UI Glitch - Sign-Up Screen Rotation Test', () => {
    it('should show UI overlap when rotating screen on Sign-Up screen', async () => {
        // Launch Spotify app
        await driver.startActivity('com.spotify.music', 'com.spotify.music.MainActivity');
        await driver.pause(5000);

        // Tap the "Sign up free" button
        const signUpBtn = await $('android=new UiSelector().textContains("Sign up")');
        await signUpBtn.waitForExist({ timeout: 10000 });
        await signUpBtn.click();

        // Wait for sign-up page to load
        await driver.pause(3000);

        // Rotate the screen to landscape
        await driver.setOrientation('LANDSCAPE');
        await driver.pause(2000);

        // OPTIONAL: Take a screenshot for documentation
        await driver.saveScreenshot('./screenshots/SignUp_UIGlitch_Landscape.png');

        // You could assert if an element is overlapped, hidden, or has layout issues
        // For now, this test is observational based on visual evidence
        console.warn('⚠️ Visually inspect Sign-Up screen for UI overlap after rotation.');

        // Rotate back to portrait to clean up
        await driver.setOrientation('PORTRAIT');
    });
});
