module.exports = {
  components: {
    categories: [
      {
        name: "Basic Components",
        include: [
          "src/components/Image/Image.js",
          "src/components/Text/Text.js",
          "src/components/TextInput/TextInput.js",
          "src/components/View/View.js",
          "src/components/ScrollView/ScrollView.js",
        ],
      },
      {
        name: "User Interface",
        include: [
          "src/components/Button/Button.js",
          "src/components/Switch/Switch.js",
        ],
      },

      {
        name: "Others",
        include: [
          "src/components/ActivityIndicator/ActivityIndicator.js",
          "src/components/ImageBackground/ImageBackground.js",
        ],
      },
    ],
    wrapper: "src/components/UXPinWrapper/UXPinWrapper.js",
    webpackConfig: "uxpin.webpack.config.js",
  },
  name: "react native merge",
  settings: { useUXPinProps: true },
};
