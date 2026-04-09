/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    search(text: string): Chainable<void>;
    openDashboard(): Chainable<void>;
    selectMenuItem(name: string): Chainable<void>;
    switchToSpanish(): Chainable<void>;
  }
}