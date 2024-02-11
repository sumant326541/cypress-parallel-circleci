const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "6b30df12-0cd7-43e5-8e7b-531e27715c4d",
  video:true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
