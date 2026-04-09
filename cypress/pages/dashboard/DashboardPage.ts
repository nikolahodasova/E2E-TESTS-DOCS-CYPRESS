/*Future feature*/
class DashboardPage {
  elements = {
    sidebar: () => cy.get('aside'),

    dashboardCategory: () =>
      cy.contains('nav, aside', 'Dashboard'),

    subCategory: (name: string) =>
      cy.get('aside').contains('a', name)
  };

  visit(): void {
    cy.visit('/');
    this.elements.sidebar().should('be.visible');
  }

  openDashboard(): void {
    this.elements.dashboardCategory()
      .should('be.visible')
      .click();
  }

  validateSubcategories(): void {
    cy.get('aside').within(() => {
      cy.contains('Projects').should('be.visible');
      cy.contains('Runs').should('be.visible');
      cy.contains('Settings').should('be.visible');
    });
  }

  clickSubcategory(name: string): void {
    this.elements.subCategory(name)
      .should('be.visible')
      .click();
  }
}

export default new DashboardPage();