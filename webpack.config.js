const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');

const r = (p) => path.resolve(__dirname, p);

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ['nativewind'],
      },
    },
    argv
  );

  config.resolve.alias['@screens'] = r('screens/');
  config.resolve.alias['@components'] = r('components/');

  config.module.rules.push({
    test: /\.css$/i,
    use: ['postcss-loader'],
  });

  return config;
};
