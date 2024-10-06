import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';



  async function setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions):
   Promise<Cypress.PluginConfigOptions> {
    await addCucumberPreprocessorPlugin(on, config);
    on("file:preprocessor",
      createBundler({
        plugins: [createEsbuildPlugin(config)],
      })
    );
    return config;

  }

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  screenshotsFolder: './cypress/screenshots',
  scrollBehavior:'center',
  defaultCommandTimeout: 10000,
  viewportHeight: 1000,
  viewportWidth:1280,
  chromeWebSecurity:false,
  video:false,
  e2e:{
    setupNodeEvents,
    specPattern: "cypress/e2e/**/*.feature", // Spécifiez l'emplacement des fichiers .feature
    baseUrl: "http://localhost:4200", // L'URL de votre application
    reporter: require.resolve("@badeball/cypress-cucumber-preprocessor/pretty-reporter"),
  },
});
