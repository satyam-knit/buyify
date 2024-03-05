/**
 * @type {import('next').NextConfig}
 */
module.exports = {
    // output: 'export',
    // images: { unoptimized: true }
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'files.stripe.com',

            },
        ],
    },

    reactStrictMode: false,
    eslint: {
        ignoreDuringBuilds: true,
    },

}

