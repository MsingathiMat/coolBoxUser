/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'deep-house.co.za',
          
          },
        ],
      }
};

export default nextConfig;
