import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { paths } = require("./content/quiz/paths.json");
const currentStudies = {
  "sanctuary-foundations": "sanctuary",
  "daniels-prophecies": "2300-days",
  "sabbath-truth": "sabbath",
  "signs-of-the-end": "three-angels",
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Keep previously advertised, unfinished course URLs useful without losing
  // the original sanctuary introduction or its saved progress identifiers.
  async redirects() {
    return [
      ...Object.entries(currentStudies)
        .filter(([id]) => id !== "sanctuary-foundations")
        .map(([id, topic]) => ({
          source: `/quiz/${id}`,
          destination: `/quiz/${topic}`,
          permanent: false,
        })),
      ...paths.flatMap((path) =>
        path.modules
          .filter(
            (module) =>
              !(
                path.id === "sanctuary-foundations" &&
                module === "sanctuary-intro"
              ),
          )
          .map((module) => ({
            source: `/quiz/${path.id}/${module}`,
            destination: `/quiz/${currentStudies[path.id] || path.id}`,
            permanent: false,
          })),
      ),
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
    ],
  },
};

export default nextConfig;
