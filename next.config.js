const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["rickandmortyapi.com"],
  },
  // swcMinify: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    // disable: process.env.NODE_ENV !== "production",
    fallbacks: {
      image: "/portal.gif",
    },
  },
});
