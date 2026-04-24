import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.evrecharge.org'),
  title: "EV Recharge — Mobile EV Fleet Charging | Grid-Independent, 100% Renewable",
  description: "Mobile, grid-independent DC charging for EV fleets. Deployed at your depot in 5 days. Zero capex, 100% renewable. Trusted by Euler Motors, Delhivery, ZYPP Electric.",
  openGraph: {
    title: "EV Recharge — Mobile EV Fleet Charging",
    description: "Mobile, grid-independent DC charging for EV fleets. Deployed at your depot in 5 days.",
    url: "https://www.evrecharge.org",
    siteName: "EV Recharge",
    images: [
      {
        url: "/og-image.jpg", // placeholder, assuming standard Next.js og-image location
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EV Recharge — Mobile EV Fleet Charging",
    description: "Grid-independent DC charging for EV fleets. Deployed in 5 days.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen bg-white text-[#0B0F14]">
        {children}
      </body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  );
}
