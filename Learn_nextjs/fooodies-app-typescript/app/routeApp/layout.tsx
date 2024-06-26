import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Route test",
  description: "Generated by create next app",
};

export default function RouteLayout({
  children,
  test,
}: Readonly<{
  children: React.ReactNode;
  test: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {test}
      </body>
    </html>
  );
}
