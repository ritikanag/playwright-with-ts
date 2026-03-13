import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/addProduct';
import { LoginPage } from '../pages/loginPage';
import addProduct from '../test-data/addProduct.json'
import users from '../test-data/users.json';

let loginPage: LoginPage;
let productPage: ProductPage; 

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.goto();
  await page.fill('#user-name', users.validUser.username);
  await page.fill('#password', users.validUser.password);
  await page.click('#login-button');
});

test('add mmultiple product', async ({ page }) => {
  const productsPage = new ProductPage(page);
  const productNames = addProduct.map(p => p.name);
  await productsPage.addMultipleProducts(productNames);
  await productsPage.expectCartCount(productNames.length);
});

