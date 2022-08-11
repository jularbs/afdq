const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
      },
    });
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
};

module.exports = nextConfig;
