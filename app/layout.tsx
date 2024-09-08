import "@/app/globals.css";
import Footer from "@/app/components/Footer";
import localFont from "next/font/local";
import type { Metadata } from "next";

const misans = localFont({
  src: "./fonts/MiSans-Medium.woff2"
});

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
      <body className={misans.className}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
