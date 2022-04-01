module.exports = {
  components: {
    categories: [
      {
        name: 'Core Components',
        include: [
          'src/components/Button/Button.js',
          '/src/components/FlatList/FlatList.js',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'react native merge'
};
