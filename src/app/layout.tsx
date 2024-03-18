import type { Metadata } from "next";
import "./base.css";
import Navbar from "root/components/NavBar";

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
        <main className="main">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
