import './commands';
import '@shelex/cypress-allure-plugin';
Cypress.on('uncaught:exception', (err) => {
  // ignore known Cypress docs issues
  if (
    err.message.includes('consent') ||
    err.message.includes('ResizeObserver') ||
    err.message.includes('Script error')
  ) {
    return false;
  }

  return true;
});
beforeEach(() => {
  cy.setCookie('osano_consentmanager', 'true');
});