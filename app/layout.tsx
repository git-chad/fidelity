import Head from "next/head";
import type { Metadata } from "next";
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
  const baseUrl = "https://fidelity-orcin.vercel.app";

  return (
    <ViewTransitions>
      <html className={GeistSans.className} lang="en">
        <Head>
          <title>Fidelity</title>
          <meta name="description" content="Holy trinity of fidelity" />
          <meta property="og:title" content="Fidelity" />
          <meta property="og:description" content="Holy trinity of fidelity" />
          <meta property="og:url" content={baseUrl} />
          <meta property="og:image" content={`${baseUrl}/opengraph-image.jpg`} />
          <meta property="og:image:alt" content="Happy Coding" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Fidelity" />
          <meta name="twitter:image" content={`${baseUrl}/twitter-image.jpg`} />
          <meta name="twitter:image:alt" content="Happy Coding" />
        </Head>
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
