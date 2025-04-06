# Spotify Mobile App - QA Testing Project

This project showcases end-to-end automated testing of the **Spotify mobile application** using **WebdriverIO**, **Appium**, and a custom Android emulator. The tests validate login functionality and capture defect behavior for invalid login attempts and UI responsiveness issues.

---

## 📱 Testing Approach

- **Framework**: WebdriverIO (Mocha, Chai)
- **Device**: Android Emulator (Pixel 4, API Level 16)
- **Test Automation Tool**: Appium
- **Execution Mode**: Local

### ✔️ Test Scenarios Covered

| Test Case | Description                                | Status |
|-----------|--------------------------------------------|--------|
| TC001     | Login with valid credentials               | ✅ PASS |
| TC002     | Login with invalid credentials             | ❌ FAIL (Crash)
| TC003     | Screen rotation during Sign-Up             | ⚠️ UI Glitch

---

## 🧪 Key Findings & Insights

### ✅ TC001: Valid Login
- **Outcome**: Passed.
- **Behavior**: User successfully logs into the app.
- **Evidence**: Screenshot shows home screen UI post-login.

### ❌ TC002: Invalid Login (Defect D001)
- **Outcome**: Failed.
- **Behavior**: App crashes when invalid credentials are submitted.
- **Expected**: "Invalid credentials" message.
- **Severity**: High  
- **Evidence**: Crash log and emulator screen captured post-failure.

### ⚠️ TC003: Sign-Up UI Glitch on Rotation (Defect D002)
- **Outcome**: Visual layout issues observed.
- **Behavior**: UI elements overlap after rotating the screen on the Sign-Up screen.
- **Expected**: Responsive layout on all orientations.
- **Severity**: Medium  
- **Evidence**: Screenshots before and after rotation show overlap.

---

## 🛠️ Recommendations

- **Fix crash on invalid login attempts** to prevent app termination.
- **Improve UI responsiveness** on screen orientation changes.
- **Optimize performance** for network conditions like 3G and Edge.
- **Implement validation handling** to prevent app crashes on invalid input.

---

## 📎 Files Included

- `test/specs/*.js`: Mocha test scripts.
- `Mobile_Testing_Report_Spotify.docx`: Final report with summary, evidence, and recommendations.
- `screenshots/`: UI evidence for each test case.

---

## 👨‍💻 Author

Malik Davis  
*QA Engineer in training | Mobile Automation Enthusiast* 
---
