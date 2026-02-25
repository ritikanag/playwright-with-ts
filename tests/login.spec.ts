import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import users from '../test-data/users.json';


// Declare a variable that will later store a LoginPage object. this is for approach 2 test
let loginPage: LoginPage; 

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.goto();
});


test('has title', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Swag Labs/);
});

// APPROACH 1  :: DIRECT PAGE INTERACTION (WITHOUT PAGE OBJECT MODEL)
test('Login with valid user', async ({ page }) => {
  await page.goto('');

  await page.fill('#user-name', users.validUser.username);
  await page.fill('#password', users.validUser.password);
  await page.click('#login-button');

  await expect(page).toHaveURL(/inventory/);
});

// APPROACH 2  :: PAGEOBJECT MODEL DESIGN PATTERN
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
