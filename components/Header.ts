class Header {
  languageSwitcher() {
    return cy.get('[data-testid="language-switcher"]');
  }

  openLanguageMenu() {
    this.languageSwitcher().click();
  }
}

export default new Header();