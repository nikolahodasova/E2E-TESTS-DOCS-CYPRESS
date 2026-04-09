class BasePage {
  visit(path: string = '/'): void {
    cy.visit(path);
  }
}

export default new BasePage();