import { defineConfig } from 'cypress';
import allureWriter from '@shelex/cypress-allure-plugin/writer';

export default defineConfig({
  e2e: {
    baseUrl: 'https://docs.cypress.io',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    retries: 2,
    viewportWidth: 1280,
    viewportHeight: 800
  }
});