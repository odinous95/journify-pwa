// app/serwist/[path]/route.ts
export const dynamic = "force-dynamic";

import { createSerwistRoute } from "@serwist/turbopack";

// 🚫 NO spawnSync, NO git
const revision =
  process.env.NEXT_PUBLIC_BUILD_ID ??
  process.env.VERCEL_GIT_COMMIT_SHA ??
  crypto.randomUUID();

export const { dynamicParams, revalidate, generateStaticParams, GET } =
  createSerwistRoute({
    additionalPrecacheEntries: [{ url: "/~offline", revision }],
    swSrc: "app/sw.ts",
    nextConfig: {},
  });
