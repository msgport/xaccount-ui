import withSerwistInit from '@serwist/next';

const withSerwist = withSerwistInit({
  swSrc: 'src/app/sw.ts',
  swDest: 'public/sw.js'
});
/** @type {import('next').NextConfig} */
const nextConfig = withSerwist({});

export default nextConfig;
