const path = require('path');

// plugins
exports.plugins = [
  require.resolve('@alipay/kobe-plugin-polyfill'),
  require.resolve('./kobe-plugin-base'),
  require.resolve('@alipay/kobe-plugin-media'),
  require.resolve('@alipay/kobe-plugin-react16'),
  require.resolve('@alipay/kobe-plugin-spm'),
  require.resolve('@alipay/kobe-plugin-exlog'),
  require.resolve('@alipay/kobe-plugin-mock'),
  require.resolve('@alipay/kobe-plugin-common'),
  require.resolve('@ali/kobe-plugin-global'),
  require.resolve('@alipay/kobe-plugin-framework'),
  require.resolve('@alipay/kobe-plugin-page'),
  require.resolve('@alipay/kobe-plugin-fireworm'),
  require.resolve('@alipay/kobe-plugin-beta'),
  require.resolve('@alipay/kobe-plugin-watermark'),
];

// plugin config
exports.config = {
  common: {
    entry: './src/common',
  },
  media: {
    svgSprite: [
      path.resolve('./src/common/assets'),
      /@alipay\/mo-/,
    ],
  },
  // drill: false,
  // drill: {
  //   channels: ['merchant', 'kbservcenter-m'],
  // },
  watermark: false,
  spm: {
    type: 'aplus',
    platform: 'PC',
  },
};

// webpack config
exports.wconfig = {
};

// extend commands
exports.extensions = [
  require.resolve('@alipay/kobe-extension-deploy'),
  require.resolve('@alipay/kobe-extension-open'),
  require.resolve('@alipay/kobe-extension-proxy'),
  require.resolve('@alipay/kobe-extension-add'),
];
