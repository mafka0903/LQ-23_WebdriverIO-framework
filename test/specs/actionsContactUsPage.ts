import { expect } from "@wdio/globals";
import homePage from "../pageobjects/homePage.ts";
import { testData } from "../fixtures/data.fixtures.ts";
import contactUsPage from "../pageobjects/contactUsPage.ts";

describe("ContactUs page actions", () => {
  beforeEach(() => {
    homePage.open();
  });
  it("telnyx-2 Checking that the contact form is sent successfully when all required fields are filled in", async () => {
    await homePage.clickHeaderOptions(2);
    await contactUsPage.selectSupport(testData.Dropdown.reasonForContact);
    await contactUsPage.typeFirstName(testData.DataForContactForms.firstName);
    await contactUsPage.typeLastName(testData.DataForContactForms.lastName);
    await contactUsPage.typeBusinessEmail(
      testData.DataForContactForms.businessEmail
    );
    await contactUsPage.selectCountry(testData.Dropdown.phoneCode);
    await contactUsPage.typePhoneNumber(
      testData.DataForContactForms.phoneNumber
    );
    await contactUsPage.typeCompanyWebsite(
      testData.DataForContactForms.companyWebsite
    );
    await contactUsPage.typeRequestDescribe(
      testData.DataForContactForms.requestDescribe
    );
    await contactUsPage.typeHowHearAbout(
      testData.DataForContactForms.howHearAbout
    );
    await contactUsPage.clickSubmitButton();
    await expect(contactUsPage.messageSuccessfulSend).toBeExisting();
  });

  it("telnyx-3 Checking that the contact form submission does not occur if there are no required fields", async () => {
    await homePage.clickHeaderOptions(2);
    await contactUsPage.selectSupport(testData.Dropdown.reasonForContact);
    await contactUsPage.typeFirstName(testData.DataForContactForms.firstName);
    await contactUsPage.typeLastName(testData.DataForContactForms.lastName);
    await contactUsPage.typeBusinessEmail(
      testData.DataForContactForms.businessEmail
    );
    await contactUsPage.selectCountry(testData.Dropdown.phoneCode);
    await contactUsPage.typePhoneNumber(
      testData.DataForContactForms.phoneNumber
    );
    await contactUsPage.typeCompanyWebsite(
      testData.DataForContactForms.companyWebsite
    );
    await contactUsPage.typeRequestDescribe(
      testData.DataForContactForms.requestDescribe
    );
    await contactUsPage.clickSubmitButton();
    await expect(contactUsPage.messageEmptyField).toBeExisting();
  });
});
