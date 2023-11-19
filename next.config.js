/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async headers() {
        return [
          {
            source: "/csp/default-src",
            headers: [
              {
                key: "content-security-policy",
                value: "default-src 'self';",
              },
            ],
          },
        ];
    },
};

module.exports = nextConfig
