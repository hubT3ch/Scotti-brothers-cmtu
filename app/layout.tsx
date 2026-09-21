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

export const metadata: Metadata = {
  title: {
    default: "Scotti Brothers Can't Make This Up! Podcast",
    template: "%s | CMTU Podcast",
  },

  description:
    "Scotti Brothers Can't Make This Up! Podcast — conversations with artists, entertainers, creators and industry voices.",

  applicationName: "CMTU Podcast",

  manifest: "/manifest.webmanifest",

  icons: {
    icon: [
      {
        url: "/icons/cmtu-icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icons/cmtu-icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  appleWebApp: {
    capable: true,
    title: "CMTU Podcast",
    statusBarStyle: "black",
  },

  other: {
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
