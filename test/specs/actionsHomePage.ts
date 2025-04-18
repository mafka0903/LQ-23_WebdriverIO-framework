import { expect } from "@wdio/globals";
import homePage from "../pageobjects/homePage.ts";
import { urls } from "../fixtures/data.fixtures.ts";

describe("Home page actions", () => {
  beforeEach(() => {
    homePage.open();
  });
  it("telnyx-1 Checking the opening of the main page", async () => {
    await expect(homePage.telnyxSvg).toBeExisting();
    await expect(homePage.mainMenu).toBeExisting();
    await expect(homePage.expiriensAI).toHaveText(
      expect.stringContaining("Experience ")
    );
  });

  it("telnyx-2 Verify that clicking on a menu option with a dropdown correctly displays a list of available sub-options", async () => {
    await homePage.clickProducts();
    await expect(homePage.dropdownProducts).toBeExisting();
  });

  it("telnyx-3 Check that selecting a menu option without a dropdown redirects the user to the new page", async () => {
    await homePage.clickPricing();
    await expect(browser).toHaveUrl(urls.pricingPage);
  });

  it("telnyx-6 Check that user navigates to a different domain page when clicking Shop", async () => {
    const shopLink = homePage.headerOptions[1];

    await shopLink.waitForDisplayed({ timeout: 15000 });

    const href = await shopLink.getAttribute("href");
    const target = await shopLink.getAttribute("target");

    expect(href).toBe(urls.shopPage);
    expect(target).toBe("_blank");
  });

  it.only("telnyx-9 Сhecking that  Footer Links will redirect to the correct pages", async () => {
    const linkedinLink = homePage.footerSocial[0];
    const twitterLink = homePage.footerSocial[1];
    const facebookLink = homePage.footerSocial[2];

    const hrefLinkedin = await linkedinLink.getAttribute("href");
    const targetLinkedin = await linkedinLink.getAttribute("target");

    const hrefTwitter = await twitterLink.getAttribute("href");
    const targetTwitter = await twitterLink.getAttribute("target");

    const hrefFacebook = await facebookLink.getAttribute("href");
    const targetFacebook = await facebookLink.getAttribute("target");

    expect(hrefLinkedin).toBe(urls.linkedinTelnyx);
    expect(targetLinkedin).toBe("_blank");

    expect(hrefTwitter).toBe(urls.twitterTelnyx);
    expect(targetTwitter).toBe("_blank");

    expect(hrefFacebook).toBe(urls.facebookTelnyx);
    expect(targetFacebook).toBe("_blank");
  });
});
