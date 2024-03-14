/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.fecasasdemadeira.com.br',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
