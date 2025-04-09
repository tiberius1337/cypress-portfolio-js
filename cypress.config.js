import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,

  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,

  pageLoadTimeout: 60000,
  requestTimeout: 10000,
  defaultCommandTimeout: 10000,

  e2e: {
    testIsolation: false
  },

  env: {
    "hideXHR": true
  }
});
