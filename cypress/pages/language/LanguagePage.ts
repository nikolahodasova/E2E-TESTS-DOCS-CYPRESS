/*Future feature */
class LanguagePage {
  elements = {
    languageSwitcher: (): Cypress.Chainable<JQuery<HTMLElement>> =>
      cy.get('[data-testid="language-switcher"]'),

    spanishOption: (): Cypress.Chainable<JQuery<HTMLElement>> =>
      cy.contains('Español')
  };

  switchToSpanish(): void {
    this.elements.languageSwitcher().click();
    this.elements.spanishOption().click();
  }
}

export default new LanguagePage();