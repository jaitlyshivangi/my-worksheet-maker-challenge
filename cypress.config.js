const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  video: true,
  defaultCommandTimeout: 10000,
  viewportWidth: 1280,
  viewportHeight: 720,
  chromeWebSecurity: false,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: false,
    json: true,
    timestamp: 'YYYY-MM-DD HH:mm:ss',
  },
  e2e: {
    baseUrl: 'https://standards.myworksheetmaker.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    }
  },
});
