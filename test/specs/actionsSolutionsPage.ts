import { expect } from "@wdio/globals";
import homePage from "../pageobjects/homePage.ts";
import solutionsPage from "../pageobjects/solutionsPage.ts";

describe("Solutions page actions", () => {
  beforeEach(() => {
    homePage.open();
  });
  it("telnyx-7 Check that Filter work correctly on solutions page", async () => {
    await homePage.clickMenuElements(1);
    await solutionsPage.clickSeeAllSolutions();
    await solutionsPage.clickSeeUseCases();
    await solutionsPage.clickFilterBy();
    await solutionsPage.clickCheckboxFilterByFirst();
    await solutionsPage.clickCheckboxFilterBySecond();
    await expect(solutionsPage.filterBy).toHaveText("2 filters selected");
  });
});
