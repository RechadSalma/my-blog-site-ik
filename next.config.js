/** @type {import('next').NextConfig} */

// const withMDX = require("@next/mdx")({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: [],
//     // If you use `MDXProvider`, uncomment the following line.
//     // providerImportSource: "@mdx-js/react",
//   },
// });

// module.exports = withMDX({
//   // Append the default value with md extensions
//   pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
//   reactStrictMode: true,
// });

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/404",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
