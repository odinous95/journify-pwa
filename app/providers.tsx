"use client";

import { ReactNode } from "react";
import { SerwistProvider } from "@serwist/turbopack/react";
import { Auth0Provider } from "@auth0/nextjs-auth0/client";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Auth0Provider>
      <SerwistProvider swUrl="/serwist/sw.js">
        {children}
      </SerwistProvider>
    </Auth0Provider>
  );
}
