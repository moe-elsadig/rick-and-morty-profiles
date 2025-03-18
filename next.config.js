const withPWA = require("next-pwa");

module.exports = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "rickandmortyapi.com",
                pathname: "/**",
            },
        ],
    },
    // swcMinify: true,
    ...withPWA({
        pwa: {
            dest: "public",
            register: true,
            skipWaiting: true,
            // disable: process.env.NODE_ENV !== "production",
            fallbacks: {
                image: "/portal.gif",
                image: "/favicon.ico",
            },
        },
    }),
};
