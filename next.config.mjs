import path from "path";

export default {
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")],
  },
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  images: {
    domains: [
      "testapi.nascontradingplc.com", // production
      "localhost", // local backend
      "127.0.0.1", // alternative local backend
    ],
  },
};
