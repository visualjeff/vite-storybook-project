/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  staticDirs: ["../public"],
  stories: ["../src/**/*.stories.@(js|jsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "true",
  },
};
export default config;
