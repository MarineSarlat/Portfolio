const repoName = process.env.NEXT_PUBLIC_PAGES_BASE_PATH || '';

/** @type {import('import').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: repoName,
  assetPrefix: repoName,
};

export default nextConfig;