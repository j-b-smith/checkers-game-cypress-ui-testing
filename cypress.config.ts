import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.gamesforthebrain.com/game/checkers/",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
