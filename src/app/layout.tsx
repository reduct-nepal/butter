import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./base.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "butter",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
