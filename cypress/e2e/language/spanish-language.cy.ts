/*Future feature */
import BasePage from '../../pages/base/BasePage';
import LanguagePage from '../../pages/language/LanguagePage';

describe('Language Switching', () => {

  beforeEach(() => {
    BasePage.visit('/');
  });

  it('Switch to Spanish', () => {
    LanguagePage.switchToSpanish();
    cy.contains('Introducción').should('exist');
  });

  it('Persists after reload', () => {
    LanguagePage.switchToSpanish();
    cy.reload();
    cy.contains('Introducción').should('exist');
  });

});