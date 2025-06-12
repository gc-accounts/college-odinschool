import type { Metadata } from 'next';
import * as React from 'react';
import { Inter, DM_Serif_Display } from 'next/font/google';
import '@/styles/globals.css';
import { siteConfig } from '@/constant/config';
import Script from 'next/script';
import { Toaster } from '@/components/components/ui/toaster';
import WhatsAppChat from '@/components/components/WhatsAppChat';
import { gtmScript, GTM_ID } from '@/lib/gtm';
import { ProgramProvider } from '@/context/ProgramContext';

const inter = Inter({ subsets: ['latin'] });

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'], // DM Serif Display supports only 400 (Regular)
  variable: '--font-dm-serif'
});


// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@th_clarence',
  },
  // authors: [
  //   {
  //     name: 'Theodorus Clarence',
  //     url: 'https://theodorusclarence.com',
  //   },
  // ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script id="gtm" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: gtmScript }} />
      </head>
      <body className={`${inter.className}`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <ProgramProvider>
          {children}
          <WhatsAppChat />
        </ProgramProvider>
        <Toaster />
      </body>
    </html>
  );
}
