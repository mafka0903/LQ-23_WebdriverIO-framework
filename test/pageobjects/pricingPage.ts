import basePage from "./basePage.ts";

class pricingPage extends basePage {
  public open() {
    return super.open("");
  }

  public get communications() {
    return $('//*[contains(text(),"Messaging API")]');
  }

  public get pricingForm() {
    return $("#mktoForm_2553");
  }

  public get downloadFirstName() {
    return $("#FirstName");
  }
  public get downloadLastName() {
    return $("#LastName");
  }

  public get downloadBussinessEmail() {
    return $("#Email");
  }
  public get downloadSubmitButton() {
    return $("span .mktoButton");
  }

  public get messageSuccesfulDownload() {
    return $(".c-PJLV.c-PJLV-kmbBBS-dark-true.c-PJLV-ghYBfS-lead-true");
  }

  public async clickMessagingAPI() {
    await this.communications.click();
  }

  public async typeDownloadFirstName(downloadFirstName: string) {
    await this.downloadFirstName.addValue(downloadFirstName);
  }

  public async typeDownloadLastName(downloadLastName: string) {
    await this.downloadLastName.addValue(downloadLastName);
  }
  public async typeDownloadBussinessEmail(downloadBussinessEmail: string) {
    await this.downloadBussinessEmail.addValue(downloadBussinessEmail);
  }
  public async clickDownlosdSubmitButton() {
    await this.downloadSubmitButton.click();
  }
}

export default new pricingPage();
