/// <reference types="cypress" />
import cypress from 'cypress';

Cypress.Commands.add('search', (text: string) => {
  cy.get('input[type="search"]').clear().type(`${text}{enter}`);
});

Cypress.Commands.add('openDashboard', () => {
  cy.contains('Dashboard').click();
});

Cypress.Commands.add('selectMenuItem', (name: string) => {
  cy.contains(name).click();
});

Cypress.Commands.add('switchToSpanish', () => {
  cy.get('[data-testid="language-switcher"]').click();
  cy.contains('Español').click();
});