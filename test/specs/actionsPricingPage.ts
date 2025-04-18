import { expect } from "@wdio/globals";
import homePage from "../pageobjects/homePage.ts";
import { testData } from "../fixtures/data.fixtures.ts";
import pricingPage from "../pageobjects/pricingPage.ts";

describe("Pricing page actions", () => {
  beforeEach(() => {
    homePage.open();
  });
  it("telnyx-10 Check that Download pricing is performed successfully", async () => {
    await homePage.clickPricing();
    await pricingPage.clickMessagingAPI();
    await pricingPage.downloadFirstName.waitForDisplayed({ timeout: 20000 });
    await pricingPage.typeDownloadFirstName(
      testData.DataForContactUs.firstName
    );
    await pricingPage.typeDownloadLastName(testData.DataForContactUs.lastName);
    await pricingPage.typeDownloadBussinessEmail(
      testData.DataForContactUs.businessEmail
    );

    await pricingPage.clickDownlosdSubmitButton();
    await expect(pricingPage.messageSuccesfulDownload).toBeExisting();
  });
});
