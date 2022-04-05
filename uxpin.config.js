module.exports = {
  components: {
    categories: [
      {
        name: 'Basic Components',
        include: [
          'src/components/Image/Image.js',
          'src/components/Text/Text.js',
          'src/components/View/View.js',
        ],
      },
      {
        name: 'User Interface',
        include: [
          'src/components/Button/Button.js',
        ],
      },
      {
        name: 'List Views',
        include: [
          'src/components/FlatList/FlatList.js',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'react native merge'
};
