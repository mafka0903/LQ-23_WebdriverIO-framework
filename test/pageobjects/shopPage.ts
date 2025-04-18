class shopPage {
  public get searchIcon() {
    return $(".header__search");
  }
  public get searchField() {
    return $("#Search-In-Modal");
  }
  public get searchFieldButton() {
    return $(".search__button.field__button");
  }
  public get searchResult() {
    return $(".h2.center");
  }
  public get productNameCard() {
    return $("#CardLink--6960027533390");
  }

  public get headerMenuShop() {
    return $("#HeaderMenu-shop");
  }
  public get productGridContainer() {
    return $("#ProductGridContainer");
  }
  public get addToCard() {
    return $(".quick-add.no-js-hidden");
  }
  public get yourCard() {
    return $(".drawer__inner");
  }
  public get productInTheCard() {
    return $(".drawer__cart-items-wrapper");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  public async clickSearchIcon() {
    await this.searchIcon.click();
  }
  public async typeSearchField(productName: string) {
    await this.searchField.addValue(productName);
  }
  public async clickSearchFieldButton() {
    await this.searchFieldButton.click();
  }

  public async clickHeaderMenuShop() {
    await this.headerMenuShop.click();
  }
  public async clickAddToCard() {
    await this.addToCard.click();
  }
}

export default new shopPage();
