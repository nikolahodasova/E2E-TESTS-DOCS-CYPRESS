import { defineConfig } from 'cypress';
import allureWriter from '@shelex/cypress-allure-plugin/writer';

export default defineConfig({
  e2e: {
    baseUrl: 'https://docs.cypress.io',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    retries: {
      runMode: 2,
      openMode: 0
    },
    viewportWidth: 1280,
    viewportHeight: 800
  }
});