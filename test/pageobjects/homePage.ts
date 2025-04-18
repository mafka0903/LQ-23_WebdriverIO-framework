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

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  public async clickProducts() {
    await this.menuElements[0].click();
  }

  public async clickPricing() {
    await this.menuElements[2].click();
  }

  public async clickContactUs() {
    await this.headerOptions[2].click();
  }
  public async clickShop() {
    await this.headerOptions[1].click();
  }
}

export default new homePage();
