const { defineConfig } = require('cypress');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify');

async function setupNodeEvents(on, config){
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on('file:preprocessor', browserify.default(config));

  return config;
}

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportHeight: 800,
  viewportWidth: 1500,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents,
    baseUrl: 'https://sandbox.remotepass.com/',
    specPattern: '**/*.feature',
  },
})
