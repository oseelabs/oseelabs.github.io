/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'default',
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.daisyui.com',
                port: '',
                pathname: '/images/stock/*.webp',
            }
        ],
    }
};

export default nextConfig;
