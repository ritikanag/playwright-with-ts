import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import users from '../test-data/users.json';


// test('Login with valid user', async ({ page }) => {
//   await page.goto('');

//   await page.fill('#user-name', users.validUser.username);
//   await page.fill('#password', users.validUser.password);
//   await page.click('#login-button');

//   await expect(page).toHaveURL(/inventory/);
// });


test('Valid Login Flow', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(
    users.validUser.username,
    users.validUser.password
  );

  await expect(page).toHaveURL(/inventory/);
});
