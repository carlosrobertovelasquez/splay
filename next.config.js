const withImages = require("next-images");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX(
  withImages({
    fileExtensions: ["jpg", "jpeg", "png", "gif", "webp"],
    pageExtensions: ["js", "jsx", "mdx"],
    webpack(config, options) {
      return config;
    },
    async headers() {
      return [
        {
          // matching all API routes
          source: "/api/:path*",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" },
            {
              key: "Access-Control-Allow-Methods",
              value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
            },
            {
              key: "Access-Control-Allow-Headers",
              value:
                "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
            },
          ],
        },
      ];
    },
    env: {
      NEXT_PUBLIC_FIREBASE_API_KEY: "AIzaSyB6Z3nS7j1TuWcJQQEQ9TWUsSXTYLTg2-0",
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: "splay7-8f0b9.firebaseapp.com",
      NEXT_PUBLIC_FIREBASE_DATABASE_URL: "https://splay7-8f0b9.firebaseio.com",
      NEXT_PUBLIC_FIREBASE_PROJECT_ID: "splay7-8f0b9",
      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: "splay7-8f0b9.appspot.com",
      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: "665609040430",
      NEXT_PUBLIC_FIREBASE_APP_ID: "1:665609040430:web:ea5fd0fb32da95d3b1e5bf",
      NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: "G-CWW5V9EXGN",
    },
  })
);
