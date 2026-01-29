// app/layout.tsx

import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Providers from "./providers";
import Navbar from "../components/ui/navbar";
import { AppContainer } from "@/components/ui/app-container";
import "./globals.css";

const APP_NAME = "Journify";
const APP_DEFAULT_TITLE = "Journify - Track Your Journey";
const APP_TITLE_TEMPLATE = "%s - Journify";
const APP_DESCRIPTION = "Your personal journaling companion with consistency tracking!";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <Providers>
          <Navbar />
          <AppContainer>
            {children}
          </AppContainer>
        </Providers>
      </body>
    </html>
  );
}
