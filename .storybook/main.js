const path = require("path");

module.exports = {
  stories: ["../components/**/*.stories.@(tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"];

    config.resolve.alias = {
      ...config.resolve.alias,
      "@/": path.resolve(__dirname, "../"),
      "@/styles/colors": path.resolve(__dirname, "../styles/colors.js"),
    };

    return config;
  },
};
