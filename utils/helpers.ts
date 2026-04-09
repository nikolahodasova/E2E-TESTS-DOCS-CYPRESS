export const generateRandomText = (length: number = 8): string => {
  return Math.random().toString(36).substring(2, 2 + length);
};

export const wait = (ms: number): Cypress.Chainable => {
  return cy.wait(ms);
};