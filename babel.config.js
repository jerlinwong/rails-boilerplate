module.exports = function (api) {
  const defaultConfig = require('shakapacker/package/babel/preset')(api);
  const isEnvDevelopment = api.env('development');
  const isEnvTest = api.env('test');

  return {
    presets: [
      ...defaultConfig.presets,
      [
        require.resolve('@babel/preset-react'),
        {
          development: isEnvDevelopment || isEnvTest,
          useBuiltIns: true,
        },
      ],
    ].filter(Boolean),
    plugins: [...defaultConfig.plugins].filter(Boolean),
  };
};
