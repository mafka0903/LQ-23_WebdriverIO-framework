import { browser } from "@wdio/globals";

export default class basePage {
  public open(path: string) {
    return browser.url(`${path}`);
  }
}
