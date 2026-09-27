/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [{ source: "/arabic", destination: "/arabic/index.html" }];
  },
};

export default nextConfig;
