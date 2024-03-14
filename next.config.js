/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'api.fecasasdemadeira.com.br',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
