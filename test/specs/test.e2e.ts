import { expect } from "@wdio/globals";
import homePage from "../pageobjects/homePage.ts";

describe("telnyx-1 Home page actions", () => {
  it("checking the opening of the main page", async () => {
    await homePage.open();

    await expect(homePage.telnyxSvg).toBeExisting();
    await expect(homePage.mainMenu).toBeExisting();
    await expect(homePage.expiriensAI).toHaveText(
      expect.stringContaining("Experience ")
    );
  });
});
