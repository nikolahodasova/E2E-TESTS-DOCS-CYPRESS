class SidebarPage {
  elements = {
    sidebar: () => cy.get('aside'),

    category: (name: string) =>
      cy.get('aside').contains('button, summary, div', name),

    link: (name: string) =>
      cy.get('aside').contains('a', name)
  };

  visit(): void {
    cy.visit('/');
    this.elements.sidebar().should('be.visible');
  }

  expandCategory(name: string): void {
    this.elements.category(name)
      .should('be.visible')
      .click();
  }

  clickLink(name: string): void {
    this.elements.link(name)
      .should('be.visible')
      .click();
  }
}

export default new SidebarPage();