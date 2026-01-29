"use client";

import { ReactNode } from "react";
import { SerwistProvider } from "@serwist/turbopack/react";
import { Auth0Provider } from "@auth0/nextjs-auth0/client";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Auth0Provider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SerwistProvider swUrl="/serwist/sw.js">
          {children}
        </SerwistProvider>
      </ThemeProvider>
    </Auth0Provider>
  );
}
