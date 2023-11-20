/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: () => [
    {
      source: "/my-portfolio",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store",
        },
      ],
    },
  ],
};

module.exports = nextConfig;
