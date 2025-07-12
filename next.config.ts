
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  distDir: 'build',
  output: 'export', // Required for Tauri static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
