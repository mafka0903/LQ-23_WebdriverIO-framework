import basePage from "./basePage.ts";

class solutionsPage extends basePage {
  public open() {
    return super.open("");
  }

  public get seeAllSolutions() {
    return $$(".c-gSgpnm");
  }
  public get seeUseCases() {
    return $(".c-buvHyO.c-buvHyO-iindzWH-css.c-fsSdbV");
  }
  public get filterBy() {
    return $("div .c-hvmQSv");
  }
  public get checkboxfilterBy() {
    return $$(".c-gQHCxf.c-dVBrgH.c-efDovs");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  public async clickSeeUseCases() {
    await this.seeUseCases.click();
  }
  public async clickSeeAllSolutions() {
    await this.seeAllSolutions[5].click();
  }
  public async clickFilterBy() {
    await this.filterBy.click();
  }
  public async clickCheckboxFilterByFirst() {
    await this.checkboxfilterBy[0].click();
  }
  public async clickCheckboxFilterBySecond() {
    await this.checkboxfilterBy[1].click();
  }
}

export default new solutionsPage();
