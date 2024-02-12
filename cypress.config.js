const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "o4hm43",
  video:true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
