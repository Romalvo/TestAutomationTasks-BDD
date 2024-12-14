const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const {createEsbuildPlugin} = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on('file:preprocessor', bundler);
      addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: [
      "cypress/e2e/desktop/*.feature", //Path for feature files tested on desktop view
      "cypress/e2e/mobile/*.feature" //Path for feature files tested on mobile view
    ],
    baseUrl: "https://boostcasino.com", // Base URL for the site you're testing
  },
});
