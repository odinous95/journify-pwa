// // app/serwist/[path]/route.ts
// export const dynamic = "force-dynamic";

// import { createSerwistRoute } from "@serwist/turbopack";

// // 🚫 NO spawnSync, NO git
// const revision =
//   process.env.NEXT_PUBLIC_BUILD_ID ??
//   process.env.VERCEL_GIT_COMMIT_SHA ??
//   crypto.randomUUID();

// export const { dynamicParams, revalidate, generateStaticParams, GET } =
//   createSerwistRoute({
//     additionalPrecacheEntries: [{ url: "/~offline", revision }],
//     swSrc: "app/sw.ts",
//     nextConfig: {},
//   });
import { spawnSync } from "node:child_process";
import { createSerwistRoute } from "@serwist/turbopack";

// Using `git rev-parse HEAD` might not the most efficient
// way of determining a revision. You may prefer to use
// the hashes of every extra file you precache.
const revision =
  spawnSync("git", ["rev-parse", "HEAD"], { encoding: "utf-8" }).stdout ??
  crypto.randomUUID();

export const { dynamic, dynamicParams, revalidate, generateStaticParams, GET } =
  createSerwistRoute({
    additionalPrecacheEntries: [{ url: "/~offline", revision }],
    swSrc: "app/sw.ts",
    // Copy relevant Next.js configuration (assetPrefix,
    // basePath, distDir) over if you've changed them.
    nextConfig: {},
  });
