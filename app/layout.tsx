import type { Metadata } from "next";
import Head from "next/head";
import { GeistSans } from "geist/font/sans";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";

export const metadata: Metadata = {
  title: { default: "Fidelity", template: "%s - Fidelity" },
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
        <Head>
        <meta property="og:title" content="Fidelity" />
          <meta property="og:description" content="Holy trinity of fidelity" />
          <meta property="og:url" content={"https://fidelity-orcin.vercel.app"} />
          <meta property="og:image" content={`https://fidelity-orcin.vercel.app/images/og-img.jpg`} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Fidelity" />
        </Head>
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
