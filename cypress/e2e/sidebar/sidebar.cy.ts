import SidebarPage from '../../pages/sidebar/SidebarPage';

describe('Docs Sidebar Navigation (Real Feature)', () => {

  beforeEach(() => {
    SidebarPage.visit();
  });

  it('should display sidebar categories', () => {
    cy.get('aside').within(() => {
      cy.contains('Get Started').should('be.visible');
      cy.contains('End-to-End Testing').should('be.visible');
      cy.contains('Guides').should('be.visible');
    });
  });

  it('should expand "Get Started" and show sub-items', () => {
    SidebarPage.expandCategory('Get Started');

    cy.get('aside').within(() => {
      cy.contains('Why Cypress?').should('be.visible');
      cy.contains('Install Cypress').should('be.visible');
      cy.contains('Open the App').should('be.visible');
    });
  });

  it('should navigate to "Install Cypress"', () => {
    SidebarPage.expandCategory('Get Started');
    SidebarPage.clickLink('Install Cypress');

    cy.url().should('include', 'install-cypress');
    cy.get('main').should('be.visible');
  });

});