import "./globals.css";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "pzjawa",
  description: "Homepage of pzjawa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
