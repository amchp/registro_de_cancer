import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "./_layout/Navbar";

export const metadata: Metadata = {
  title: "Registro de Cancer",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-grow">
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
