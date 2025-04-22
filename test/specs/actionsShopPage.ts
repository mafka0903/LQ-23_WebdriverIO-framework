import { expect } from "@wdio/globals";
import shopPage from "../pageobjects/shopPage.ts";
import { testData, urls } from "../fixtures/data.fixtures.ts";

describe("Shop page actions", () => {
  beforeEach(() => {
    browser.url(urls.shopPage);
  });

  it("telnyx-15 Сhecking that the currency changes when changing Country/region", async () => {
    await shopPage.footer.scrollIntoView();
    await shopPage.clickLocalizationButton();
    await shopPage.clickCountryChose();
    const priceText = await shopPage.productPrice[0].getText();
    expect(priceText).toContain(testData.Currency.UA);
  });

  it("telnyx-16 Сhecking that the filter Availability is working correctly", async () => {
    await shopPage.clickHeaderMenuShop();
    await shopPage.clickButtonAvailiability();
    await shopPage.clickSelectAvailiability();

    const availableText = await shopPage.selectAvailiability.getText();
    const match = availableText.match(/\d+/);
    const availableCount = match ? parseInt(match[0]) : 0;

    const productCount = await shopPage.productCard.length;

    expect(availableCount).toEqual(productCount);
  });

  it("telnyx-17 Сhecking that sorting products Alphabetically(A-Z) is working correctly", async () => {
    await shopPage.clickHeaderMenuShop();
    await shopPage.clickSortContainer();
    await shopPage.clickSortByOptions(2);
    let productList = await shopPage.productName.map((el) => el.getText());
    let sortedNames = [...productList].sort();
    expect(productList).toEqual(sortedNames);
  });

  it("telnyx-18 Сhecking that sorting products by Price (low to high) is working correctly", async () => {
    await shopPage.clickHeaderMenuShop();
    await shopPage.clickSortContainer();
    await shopPage.clickSortByOptions(4);
    let pricesList = await shopPage.productPrice.map((el) => el.getText());
    let priceListFloat = pricesList.map((price) =>
      parseFloat(price.replace("$", ""))
    );
    let sortedPriceList = [...priceListFloat].sort((a, b) => a - b);
    expect(priceListFloat).toEqual(sortedPriceList);
  });

  it("telnyx-19 Checking that the user has the ability to add a quantity product to the cart", async () => {
    await shopPage.clickHeaderMenuShop();
    await shopPage.clickAddToCard();
    await shopPage.clickIconPlus();
    await browser.pause(5000);
    const oneItemText = await shopPage.oneItemPrice.getText();
    const itemPrice = parseFloat(oneItemText.replace(/[^0-9.]/g, ""));
    const sumPriceText = await shopPage.itemsSumPrice.getText();
    const totalPrice = parseFloat(sumPriceText.replace(/[^0-9.]/g, ""));
    expect(totalPrice).toEqual(itemPrice * 2);
  });

  it("telnyx-20 Checking that the user has the ability to delete product from the cart", async () => {
    await shopPage.clickHeaderMenuShop();
    await shopPage.clickAddToCard();
    await browser.pause(5000);
    await shopPage.clickRemoveFromCartIcon();
    await expect(shopPage.emptyCartText).toBeDisplayed();
  });
});
