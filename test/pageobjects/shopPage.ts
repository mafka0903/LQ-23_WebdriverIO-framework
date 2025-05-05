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
  public get productContainer() {
    return $("#ProductGridContainer");
  }

  public get productNameCard() {
    return $('[id^="CardLink--"]');
  }

  public get footer() {
    return $(".footer__content-top.page-width");
  }
  public get localizationButton() {
    return $(
      ".disclosure__button.localization-form__select.localization-selector.link.link--text.caption-large"
    );
  }
  public get countryChose() {
    return $('[data-value="UA"]');
  }
  public get productPrice() {
    return $$(".price__regular");
  }

  public get buttonAvailiability() {
    return $(".facets__summary.caption-large.focus-offset");
  }
  public get selectAvailiability() {
    return $$(".list-menu__item.facets__item")[0];
  }
  public get productCard() {
    return $$(".card-wrapper.product-card-wrapper.underline-links-hover");
  }

  public get sortContainer() {
    return $(".facet-filters__sort.select__select.caption-large");
  }
  public get sortByOptions() {
    return $$("#SortBy option");
  }
  public get productName() {
    return $$(".card__heading.h5");
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

  public get iconPlus() {
    return $$(".quantity__button.no-js-hidden")[1];
  }
  public get oneItemPrice() {
    return $$(".product-option")[0];
  }
  public get itemsSumPrice() {
    return $(".price.price--end");
  }

  public get removeFromCartIcon() {
    return $(".icon.icon-remove");
  }
  public get emptyCartText() {
    return $(".cart__empty-text");
  }

  public async clickSearchIcon() {
    await this.searchIcon.click();
  }
  public async typeSearchField(productName: string) {
    await this.searchField.addValue(productName);
  }
  public async clickSearchFieldButton() {
    await this.searchFieldButton.click();
  }

  public async clickLocalizationButton() {
    await this.localizationButton.click();
  }
  public async clickCountryChose() {
    await this.countryChose.click();
  }

  public async clickButtonAvailiability() {
    await this.buttonAvailiability.click();
  }
  public async clickSelectAvailiability() {
    await this.selectAvailiability.click();
  }

  public async clickSortContainer() {
    await this.sortContainer.click();
  }
  async clickSortByOptions(index: any) {
    await this.sortByOptions[index].click();
  }

  public async clickHeaderMenuShop() {
    await this.headerMenuShop.click();
  }
  public async clickAddToCard() {
    await this.addToCard.click();
  }
  public async clickIconPlus() {
    await this.iconPlus.click();
  }

  public async clickRemoveFromCartIcon() {
    await this.removeFromCartIcon.click();
  }
}

export default new shopPage();
