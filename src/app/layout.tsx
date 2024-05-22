import { Metadata } from 'next';
import * as React from 'react';
import { ToastContainer } from 'react-toastify';

import '@/styles/globals.css';
import '@/styles/colors.css';
import 'react-toastify/dist/ReactToastify.css';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.png',
    shortcut: '/favicon/favicon.png',
    apple: '/favicon/favicon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/favicon/favicon.png`],
    type: 'website',
    locale: 'pt-br',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <>
          <div className='absolute right-0 bottom-0'>
          <svg width="279" height="397" viewBox="0 0 279 397" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M302.479 59.2173C312.347 66.1522 314.708 79.6794 307.748 89.4043L262.025 154.462L315.05 280.051L298.502 303.774L224.79 207.62L178.949 272.844L190.213 307.12L177.612 324.873L144.648 283.966L94.8266 266.691L107.236 248.678L143.753 247.734L189.241 183.011L73.7279 145.801L90.4434 122.195L226.569 129.543L272.292 64.4858C278.825 54.8354 293.064 52.3503 302.479 59.2173Z" fill="gray" fill-opacity="0.21"/>
            </svg>
          </div>
          {children}
          <ToastContainer />
        </>
      </body>
    </html>
  );
}
