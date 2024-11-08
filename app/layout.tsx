import type { Metadata } from 'next';
// import { Roboto_Slab } from "next/font/google";
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});
const RobotoSlab = localFont({
  src: './fonts/Roboto_Slab/static/RobotoSlab-Medium.ttf',
  variable: '--font-roboto-slab',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'English for beginners',
  description: 'lesson lesson lesson',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          href="public/android/android-launchericon-192-192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="512x512"
          href="public/android/android-launchericon-512-512.png"
        />

        <meta name="theme-color" content="#435468" />
        <meta name="description" content="an English for beginners" />
      </head>
      <body
        className={`${geistSans.variable} ${RobotoSlab.variable}  ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
