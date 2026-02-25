import { Page, Locator, expect } from '@playwright/test';

export class ProductPage {

  private inventoryContainer: Locator;
  private cartBadge: Locator;

  constructor(private page: Page) {
    this.inventoryContainer = page.locator('.inventory_list');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  private addToCartButton(productName: string): Locator {
    return this.page.locator('.inventory_item')
      .filter({ hasText: productName })
      .locator('button');
  }

  async addProduct(productName: string) {
    await this.addToCartButton(productName).click();
  }

  async addMultipleProducts(products: string[]) {
    for (const product of products) {
      await this.addProduct(product);
    }
  }

  async expectCartCount(count: number) {
    await expect(this.cartBadge).toHaveText(String(count));
  }
}

