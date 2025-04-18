import { expect } from "@wdio/globals";
import shopPage from "../pageobjects/shopPage.ts";
import { testData, urls } from "../fixtures/data.fixtures.ts";

describe("Shop page actions", () => {
  beforeEach(() => {
    browser.url(urls.shopPage);
  });
  it.only("telnyx-7 Checking that the user has the ability to add a product to the cart", async () => {
    await shopPage.clickHeaderMenuShop();
    await shopPage.clickAddToCard();
    await expect(shopPage.productInTheCard).toBeDisplayed();
  });
  it("telnyx-8 Checking the search function", async () => {
    await shopPage.clickSearchIcon();
    await shopPage.typeSearchField(testData.Products.telnyxHat);
    await shopPage.clickSearchFieldButton();
    const productName = await shopPage.productNameCard.getText();
    expect(productName.trim()).toBe(testData.Products.telnyxHat);
  });
});
