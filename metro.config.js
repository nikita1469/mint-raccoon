const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

module.exports = {
  ...config,
  transformer: {
    ...config.transformer,
    minifierConfig: {
      keep_classnames: false,
      keep_fnames: false,
      mangle: true,
      compress: {
        unused: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        drop_console: true,
        sequences: true,
        properties: true,
      },
    },
  },
};
