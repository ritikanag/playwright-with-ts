import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import users from '../test-data/users.json';


// test('Login with valid user', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');

//   await page.fill('#user-name', users.validUser.username);
//   await page.fill('#password', users.validUser.password);
//   await page.click('#login-button');

//   await expect(page).toHaveURL(/inventory/);
// });
// Declare a variable that will later store a LoginPage object.
let loginPage: LoginPage; 

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
});

test('Valid Login Flow', async ({ page }) => {
    await loginPage.login(
        users.validUser.username,
        users.validUser.password
    );
    await expect(page).toHaveURL(/inventory/);
});

test('Locked  User Login Flow', async ({ page }) => {
    await loginPage.login(
        users.lockedUser.username,
        users.lockedUser.password
    );
    await loginPage.expectLockedUserError();
});
