import type { Metadata } from "next";
import { IBM_Plex_Serif } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600"],
});

const switzer = localFont({
  variable: "--font-body",
  src: [
    {
      path: "../fonts/switzer/Switzer-Variable.woff2",
      style: "normal",
    },
    {
      path: "../fonts/switzer/Switzer-VariableItalic.woff2",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://website-nessim.vercel.app"),
  title: "Nessim's Portfolio",
  description: "Portfolio landing page",
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSerif.variable} ${switzer.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
