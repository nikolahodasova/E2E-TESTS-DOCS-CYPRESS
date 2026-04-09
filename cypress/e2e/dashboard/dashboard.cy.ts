/*Future feature*/
import DashboardPage from '../../pages/dashboard/DashboardPage';

describe('Dashboard Side Menu', () => {

  beforeEach(() => {
    DashboardPage.visit();
  });

  it('should display Dashboard category in sidebar', () => {
    DashboardPage.elements.dashboardCategory()
      .should('be.visible');
  });

  it('should expand Dashboard and show subcategories', () => {
    DashboardPage.openDashboard();
    DashboardPage.validateSubcategories();
  });

  it('should navigate to Projects subcategory', () => {
    DashboardPage.openDashboard();
    DashboardPage.clickSubcategory('Projects');

    cy.url().should('include', '/projects');
  });

  it('should navigate to Runs subcategory', () => {
    DashboardPage.openDashboard();
    DashboardPage.clickSubcategory('Runs');

    cy.url().should('include', '/runs');
  });

});