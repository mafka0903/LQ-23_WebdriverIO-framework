import basePage from "./basePage.ts";

class homePage extends basePage {
  public open() {
    return super.open("");
  }

  public get telnyxSvg() {
    return $(".c-UazGY .mchNoDecorate svg");
  }
  public get mainMenu() {
    return $("#main-menu");
  }
  public get expiriensAI() {
    return $("h1 .c-PJLV");
  }

  public get menuElements() {
    return $$(".c-swQxl");
  }
  public get dropdownProducts() {
    return $(".c-jLWzSx");
  }

  public get headerOptions() {
    return $$("div .c-hzhYFJ");
  }

  public get sotialTable() {
    return $$("ul.c-ejcPbY");
  }

  public get footerSocial() {
    return $$(".c-ejcPbY .c-tKuzq.mchNoDecorate");
  }

  public get dropdownWhyTelnyx() {
    return $$(".c-cnsGFs");
  }

  public get singUpButton() {
    return $(".c-chsSYu .c-bhURco");
  }
  public get singUpForm() {
    return $(".c-gHxecU.c-gHxecU-bYrJHQ-form-true");
  }

  public get ReceiveCallForm() {
    return $(".c-feDRcx");
  }
  public get companyNameCallForm() {
    return $("#business_name");
  }
  public get domainCallForm() {
    return $("#domain");
  }
  public get mobilePhoneCallForm() {
    return $("#phone_number");
  }
  public get EmailCallForm() {
    return $$("#email")[0];
  }
  public get buildMyVoiceBotButton() {
    return $('[data-content="Build my Voice Bot"]');
  }
  public get messagePleaseAcceptTerms() {
    return $("#terms_and_conditions_message");
  }

  public get asistantAI() {
    return $(".c-bGYNvC");
  }
  public get questionField() {
    return $(".c-fJsHXZ");
  }
  public get sendQestionButton() {
    return $(".c-cODSYQ.c-gGVcDH");
  }

  public get enterBussinesEmailField() {
    return $$("#email")[1];
  }

  public get submitButton() {
    return $(".c-eXJNdE.c-eXJNdE-cZntuR-desktop-true");
  }

  public get messageNorCorrectEmail() {
    return $('#email[data-gtm-form-interact-field-id="0"]');
  }

  public async clickMenuElements(index: number) {
    await this.menuElements[index].click();
  }

  public async clickHeaderOptions(index: number) {
    await this.headerOptions[index].click();
  }

  public async clickSingUpButton() {
    await this.singUpButton.click();
  }

  public async typeCompanyNameCallForm(companyNameCallForm: string) {
    await this.companyNameCallForm.addValue(companyNameCallForm);
  }
  public async typeDomainCallForm(domainCallForm: string) {
    await this.domainCallForm.addValue(domainCallForm);
  }
  public async typePhoneNumberReceiveCallForm(mobilePhoneCallForm: number) {
    await this.mobilePhoneCallForm.addValue(mobilePhoneCallForm);
  }
  public async typeEmailCallForm(EmailCallForm: string) {
    await this.EmailCallForm.addValue(EmailCallForm);
  }
  public async clickBuildMyVoiceBotButton() {
    await this.buildMyVoiceBotButton.click();
  }

  public async clickAsistantAI() {
    await this.asistantAI.click();
  }
  public async typeQuestionField(questionField: string) {
    await this.questionField.addValue(questionField);
  }

  public async typeBussinesEmail(enterBussinesEmailField: string) {
    await this.enterBussinesEmailField.addValue(enterBussinesEmailField);
  }
  public async clickSubmitButton() {
    await this.submitButton.click();
  }
}

export default new homePage();
