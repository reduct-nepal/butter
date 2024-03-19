import * as React from "react";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";

import "./base.css";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Butter | Your Content Focused SEO Partner",
  description:
    "Butter is a SEO Agency that offers pain-point SEO for B2B SaaS companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="./favicon.ico"
          sizes="any"
        />
      </head>
      <body>
        <main className={ubuntu.className}>{children}</main>
      </body>
    </html>
  );
}
