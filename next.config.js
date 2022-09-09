const path = require("path");

const nextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
  env: {
    CLIENT_URL: `${process.env.CLIENT_URL}`,
    SITE_NAME: `${process.env.SITE_NAME}`,
    MBC_API: `${process.env.MBC_API}`,
    MBC_PUBLICKEY: `${process.env.MBC_PUBLICKEY}`,
    MBC_SECRETKEY: `${process.env.MBC_SECRETKEY}`,
    GOOGLE_RECAPTCHA_PK: `${process.env.GOOGLE_RECAPTCHA_PK}`,
    GOOGLE_RECAPTCHA_SK: `${process.env.GOOGLE_RECAPTCHA_SK}`,
    REACT_APP_FACEBOOK_APP_ID: `${process.env.REACT_APP_FACEBOOK_APP_ID}`,
  },
  headers: () => {
    const defaultArr = ["'self'"];
    const fontArr = ["'self'", "fonts.gstatic.com"];
    const styleArr = ["'self'", "'unsafe-inline'", "fonts.googleapis.com"];
    const scriptArr = [
      "'self'",
      "'unsafe-eval'",
      "recaptcha.net",
      "www.gstatic.com",
      "www.youtube.com",
      "connect.facebook.net",
      "www.facebook.com",
    ];
    const connectArr = [
      "'self'",
      "ws:",
      "jularbs.com:3000",
      "jularbs.com:8080",
      "mbc-one.s3.amazonaws.com",
      "www.facebook.com",
    ];
    const imgArr = [
      "'self'",
      "data:",
      "mbc-one.s3.ap-southeast-1.amazonaws.com",
    ];
    const frameArr = ["'self'", "www.youtube.com", "https://recaptcha.net/"];
    const frameAncestorsArr = ["'self'"];
    const mediaArr = ["'self'"];
    const objectArr = ["'self'"];

    return [
      {
        source: "/:path*{/}?",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "Content-Security-Policy",
            value:
              `default-src ${defaultArr.join(" ")};` +
              `font-src ${fontArr.join(" ")};` +
              `style-src ${styleArr.join(" ")};` +
              `script-src ${scriptArr.join(" ")};` +
              `connect-src ${connectArr.join(" ")};` +
              `img-src ${imgArr.join(" ")};` +
              `frame-src ${frameArr.join(" ")};` +
              `frame-ancestors ${frameAncestorsArr.join(" ")};` +
              `media-src ${mediaArr.join(" ")};` +
              `object-src ${objectArr.join(" ")};`,
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },

          {
            key: "X-Frame-Options",
            value: "sameorigin",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
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
