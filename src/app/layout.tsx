import type { Metadata } from "next";
import "./base.css";
import Navbar from "components/nav-bar";

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
      <body>
        <main className="main">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
