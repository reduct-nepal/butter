import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";

import "./base.css";

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Butter",
  description:
    "Butter is a SEO Agency that offers pain point SEO for B2B SaaS companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className={ubuntu.className}>{children}</main>
      </body>
    </html>
  );
}
