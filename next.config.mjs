/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [{
      source: '/:path*',
      headers: [
        { key: 'Content-Security-Policy', value: 'frame-ancestors *' },
        { key: 'X-Frame-Options', value: 'ALLOWALL' },
      ],
    }];
  },
};

export default nextConfig;
