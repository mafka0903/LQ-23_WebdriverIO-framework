import { $ } from "@wdio/globals";
import Page from "./basePage.ts";

class homePage extends Page {
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

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  // public async login(username: string, password: string) {
  //   await this.inputUsername.setValue(username);
  //   await this.inputPassword.setValue(password);
  //   await this.btnSubmit.click();
  // }

  /**
   * overwrite specific options to adapt it to page object
   */
}

export default new homePage();
