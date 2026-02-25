import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/addProduct';
import { LoginPage } from '../pages/loginPage';
import addProduct from '../test-data/addProduct.json'

let loginPage: LoginPage;
let productPage: ProductPage; 

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.goto();
});

test('add mmultiple product', async ({ page }) => {
  const productsPage = new ProductPage(page);
  const productNames = addProduct.map(p => p.name);
  await productsPage.addMultipleProducts(productNames);
  await productsPage.expectCartCount(productNames.length);
});

