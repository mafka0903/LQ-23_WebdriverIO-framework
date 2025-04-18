import basePage from "./basePage.ts";

class contactUsPage extends basePage {
  public open() {
    return super.open("");
  }

  public get reasonForContact() {
    return $(".mktoFieldWrap.mktoRequiredField #Reason_for_Contact__c");
  }
  public get contactOption() {
    return $("#Reason_for_Contact__c option");
  }
  public get firstName() {
    return $("#FirstName");
  }
  public get lastName() {
    return $("#LastName");
  }
  public get businessEmail() {
    return $("#Email");
  }
  public get phoneCode() {
    return $("#Phone_Number_Extension__c");
  }
  public get phoneNumber() {
    return $("#Phone_Number_Base__c");
  }
  public get companyWebsite() {
    return $("#Website");
  }
  public get requestDescribe() {
    return $("#Form_Additional_Information__c");
  }
  public get howHearAbout() {
    return $("#How_did_you_hear_about_Telnyx_Open__c");
  }
  public get submitButton() {
    return $("button[type='submit']");
  }
  public get messageSuccessfulSend() {
    return $("h1.c-PJLV");
  }
  public get messageEmptyField() {
    return $("#ValidMsgHow_did_you_hear_about_Telnyx_Open__c");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  public async selectSupport(reasonForContact: string) {
    await this.reasonForContact.selectByVisibleText(reasonForContact);
  }
  public async typeFirstName(firstName: string) {
    await this.firstName.addValue(firstName);
  }
  public async typeLastName(lastName: string) {
    await this.lastName.addValue(lastName);
  }
  public async typeBusinessEmail(businessEmail: string) {
    await this.businessEmail.addValue(businessEmail);
  }
  public async selectCountry(phoneCode: string) {
    await this.phoneCode.selectByVisibleText(phoneCode);
  }
  public async typePhoneNumber(phoneNumber: number) {
    await this.phoneNumber.addValue(phoneNumber);
  }
  public async typeCompanyWebsite(companyWebsite: string) {
    await this.companyWebsite.addValue(companyWebsite);
  }
  public async typeRequestDescribe(requestDescribe: string) {
    await this.requestDescribe.addValue(requestDescribe);
  }
  public async typeHowHearAbout(howHearAbout: string) {
    await this.howHearAbout.addValue(howHearAbout);
  }
  public async clickSubmitButton() {
    await this.submitButton.click();
  }
}

export default new contactUsPage();
