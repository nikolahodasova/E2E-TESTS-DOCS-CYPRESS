import { Severity } from '@shelex/cypress-allure-plugin';
export const addAllureMetadata = (feature: string, severity: string) => {
  cy.allure().feature(feature);
  cy.allure().severity(severity as Severity);
};