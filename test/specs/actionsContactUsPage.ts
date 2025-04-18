import { expect } from "@wdio/globals";
import homePage from "../pageobjects/homePage.ts";
import { testData } from "../fixtures/data.fixtures.ts";
import contactUsPage from "../pageobjects/contactUsPage.ts";

describe("ContactUs page actions", () => {
  beforeEach(() => {
    homePage.open();
  });
  it("telnyx-4 Checking that the contact form is sent successfully when all required fields are filled in", async () => {
    await homePage.clickContactUs();
    await contactUsPage.selectSupport(testData.Dropdown.reasonForContact);
    await contactUsPage.typeFirstName(testData.DataForContactUs.firstName);
    await contactUsPage.typeLastName(testData.DataForContactUs.lastName);
    await contactUsPage.typeBusinessEmail(
      testData.DataForContactUs.businessEmail
    );
    await contactUsPage.selectCountry(testData.Dropdown.phoneCode);
    await contactUsPage.typePhoneNumber(testData.DataForContactUs.phoneNumber);
    await contactUsPage.typeCompanyWebsite(
      testData.DataForContactUs.companyWebsite
    );
    await contactUsPage.typeRequestDescribe(
      testData.DataForContactUs.requestDescribe
    );
    await contactUsPage.typeHowHearAbout(
      testData.DataForContactUs.howHearAbout
    );
    await contactUsPage.clickSubmitButton();
    await expect(contactUsPage.messageSuccessfulSend).toBeExisting();
  });

  it("telnyx-5 Checking that the contact form submission does not occur if there are no required fields", async () => {
    await homePage.clickContactUs();
    await contactUsPage.selectSupport(testData.Dropdown.reasonForContact);
    await contactUsPage.typeFirstName(testData.DataForContactUs.firstName);
    await contactUsPage.typeLastName(testData.DataForContactUs.lastName);
    await contactUsPage.typeBusinessEmail(
      testData.DataForContactUs.businessEmail
    );
    await contactUsPage.selectCountry(testData.Dropdown.phoneCode);
    await contactUsPage.typePhoneNumber(testData.DataForContactUs.phoneNumber);
    await contactUsPage.typeCompanyWebsite(
      testData.DataForContactUs.companyWebsite
    );
    await contactUsPage.typeRequestDescribe(
      testData.DataForContactUs.requestDescribe
    );
    await contactUsPage.clickSubmitButton();
    await expect(contactUsPage.messageEmptyField).toBeExisting();
  });
});
