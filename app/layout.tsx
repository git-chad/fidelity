import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";

export const metadata: Metadata = {
  title: "Fidelity",
  description: "Holy trinity of fidelity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html className={GeistSans.className} lang="en">
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
