// app/providers.tsx
"use client";
import { ReactNode } from "react";
import { SerwistProvider } from "@serwist/turbopack/react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SerwistProvider
      swUrl="/serwist/sw.js"
    >
      {children}
    </SerwistProvider>
  );
}
