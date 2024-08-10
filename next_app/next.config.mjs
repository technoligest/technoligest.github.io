/** @type {import('next').NextConfig} */

export default (phase) => {
  /**
   * this did not work so I copy pasted from https://github.com/vercel/next.js/blob/5e6b008b561caf2710ab7be63320a3d549474a5b/packages/next/shared/lib/constants.ts#L19-L23
   * import { PHASE_DEVELOPMENT_SERVER } from "next/constants";
   */
  const isDev = phase === "phase-development-server";
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    assetPrefix: isDev ? undefined : "https://yaser.ca",
    output: "export",
  };
  return nextConfig;
};
// const nextConfig = {
//   output: "export",
//   trailingSlash: true,
// };

// export default nextConfig;
