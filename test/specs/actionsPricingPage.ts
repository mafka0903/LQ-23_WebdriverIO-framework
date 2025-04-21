import { expect } from "@wdio/globals";
import homePage from "../pageobjects/homePage.ts";
import { testData } from "../fixtures/data.fixtures.ts";
import pricingPage from "../pageobjects/pricingPage.ts";

describe("Pricing page actions", () => {
  beforeEach(() => {
    homePage.open();
  });
  it("telnyx-6 Check that Download pricing is performed successfully", async () => {
    await homePage.clickMenuElements(2);
    await pricingPage.clickMessagingAPI();
    await pricingPage.downloadFirstName.waitForDisplayed({ timeout: 20000 });
    await pricingPage.typeDownloadFirstName(
      testData.DataForContactForms.firstName
    );
    await pricingPage.typeDownloadLastName(
      testData.DataForContactForms.lastName
    );
    await pricingPage.typeDownloadBussinessEmail(
      testData.DataForContactForms.businessEmail
    );

    await pricingPage.clickDownlosdSubmitButton();
    await expect(pricingPage.messageSuccesfulDownload).toBeExisting();
  });
});
