/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'production' ? '/EclairBakery-Pastry' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/EclairBakery-Pastry/' : '',
    trailingSlash: true,
}

module.exports = nextConfig 