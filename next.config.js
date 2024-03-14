/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fecasasdemadeira.com.br',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
