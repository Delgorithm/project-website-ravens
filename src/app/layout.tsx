import type { Metadata } from "next";
import "./globals.css";

import Menu from "@/components/menu/menu";

export const metadata: Metadata = {
  title: "PP Eiko Demo",
  description: "Using PP Eiko font in Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={"antialiased"}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
