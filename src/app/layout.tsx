import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata : Metadata = {
  title: 'SM Infinite Tech | Leading Software & Digital Agency in South Africa',
  description: 'Premier software development and digital solutions provider. Web, mobile, cloud, and AI services for businesses across South Africa.',
  metadataBase: new URL('https://sminfinitetech.co.za'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SM Infinite Tech | Digital Transformation Experts',
    description: 'Your partner for innovative software solutions and digital strategies in South Africa',
    url: 'https://sminfinitetech.co.za',
    siteName: 'SM Infinite Tech',
    images: [
      {
        url: 'https://sminfinitetech.co.za/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
