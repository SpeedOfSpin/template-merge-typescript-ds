module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/UXPin/Button/Button.tsx',
          'src/components/UXPin/Edits/TextInput.tsx',
          'src/components/UXPin/Labels/Text.tsx',
          'src/components/UXPin/Headers/H1.tsx',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.tsx',
    webpackConfig: 'webpack.config.js',
  },
  name: 'TypeScript Design System',
};
