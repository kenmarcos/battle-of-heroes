import type { Metadata } from "next";
import { Oxanium } from "next/font/google";

import Header from "@/components/header";
import "./globals.css";
import TanstackProvider from "@/providers/TanstackProvider";

const oxanium = Oxanium({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Battle of Heroes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={oxanium.className}>
        <TanstackProvider>
          <div className="flex h-full flex-col">
            <Header />

            <main className="flex-1">{children}</main>
          </div>
        </TanstackProvider>
      </body>
    </html>
  );
}
