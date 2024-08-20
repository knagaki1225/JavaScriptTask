/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  distDir: 'docs',
  basePath: "/JavaScriptTask", // リポジトリ名を指定
  assetPrefix: "/JavaScriptTask/", // 同じくリポジトリ名を指定
};

export default nextConfig;

