class SearchPage {
  elements = {
    searchInput: (): Cypress.Chainable<JQuery<HTMLElement>> =>
      cy.get('input[type="search"]'),

    results: (): Cypress.Chainable<JQuery<HTMLElement>> =>
      cy.get('[class*="search"]')
  };

  search(text: string): void {
    this.elements.searchInput().clear().type(`${text}{enter}`);
  }

  clickFirstResult(): void {
    cy.get('a').contains(/.+/).first().click();
  }
}

export default new SearchPage();