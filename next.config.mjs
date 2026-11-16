const repoName = process.env.NEXT_PUBLIC_PAGES_BASE_PATH || '';
const { basePath } = useRouter();

<img src={`${basePath}/assets/images/logo.png`} alt="Logo" />


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: repoName,
  assetPrefix: repoName,
  swcMinify: false, 
};

export default nextConfig;