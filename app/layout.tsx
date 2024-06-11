import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import Navbar from '@/components/navigation/navbar';

export const metadata: Metadata = {
  title: { default: 'Fidelity', template: '%s - Fidelity' },
  description: 'Holy trinity of fidelity',
  openGraph: {
    images: '/opengraph-image.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    images: '/twitter-image.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html className={GeistSans.className} lang='en'>
        <head />
        <body>
          <Navbar />
          {children}
        </body>
      </html>
  );
}
