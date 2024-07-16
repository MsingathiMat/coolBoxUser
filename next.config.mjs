/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.codeddesign.org.za',
          
          },
        ],
      }
};

export default nextConfig;
