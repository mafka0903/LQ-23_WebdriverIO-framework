import { expect } from "@wdio/globals";
import homePage from "../pageobjects/homePage.ts";
import { testData, urls } from "../fixtures/data.fixtures.ts";

describe("Home page actions", () => {
  beforeEach(() => {
    homePage.open();
  });

  it("telnyx-1 Check that selecting a menu option without a dropdown redirects the user to the new page", async () => {
    await homePage.clickMenuElements(2);
    await expect(browser).toHaveUrl(urls.pricingPage);
  });

  it("telnyx-4 Check that user navigates to a different domain page when clicking Shop", async () => {
    const shopLink = homePage.headerOptions[1];

    await shopLink.waitForDisplayed({ timeout: 15000 });

    const href = await shopLink.getAttribute("href");
    const target = await shopLink.getAttribute("target");

    expect(href).toBe(urls.shopPage);
    expect(target).toBe("_blank");
  });

  it("telnyx-5 Сhecking that  Footer Links will redirect to the correct pages", async () => {
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

  it("telnyx-8 Check that drobdown of Why Telnyx in the main menu is full", async () => {
    await homePage.clickMenuElements(3);
    const dropdownItems = homePage.dropdownWhyTelnyx;
    await expect(dropdownItems).toBeElementsArrayOfSize(4);
  });

  it("telnyx-9 Check that sing up form opened", async () => {
    await homePage.clickSingUpButton();
    await expect(homePage.singUpForm).toBeExisting();
  });

  it("telnyx-10 Check that user can't send form call from Telnyx without agree with terms and conditions", async () => {
    await homePage.ReceiveCallForm.scrollIntoView();
    await homePage.typeCompanyNameCallForm(
      testData.DataForContactForms.requestDescribe
    );
    await homePage.typeDomainCallForm(
      testData.DataForContactForms.companyWebsite
    );
    await homePage.typePhoneNumberReceiveCallForm(
      testData.DataForContactForms.phoneNumber
    );
    await homePage.typeEmailCallForm(
      testData.DataForContactForms.businessEmail
    );
    await homePage.clickBuildMyVoiceBotButton();
    await expect(homePage.messagePleaseAcceptTerms).toBeExisting();
  });

  it("telnyx-11 Check that in Ask our AI assistant only when user type something button Send is activated", async () => {
    await homePage.clickAsistantAI();
    await homePage.typeQuestionField(testData.DataForContactForms.howHearAbout);
    await expect(homePage.sendQestionButton).toBeEnabled();
  });

  it.only("telnyx-12 Check that user cant send uncorrect email on Connect with us field on the bottom of page", async () => {
    await homePage.connectWithUsForm.scrollIntoView();
    await homePage.typeBussinesEmail(
      testData.DataForContactForms.requestDescribe
    );
    await homePage.clickSubmitButton();
    // const errorMessage = await $(
    //   '//*[contains(text(), "Електронна адреса має містити знак")]'
    // );
    // await expect(errorMessage).toBeDisplayed();
  });
});
