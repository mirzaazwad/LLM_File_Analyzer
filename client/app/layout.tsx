import type { Metadata } from "next";
import { inter } from "./themes/fonts";
import "./globals.css";
import "rsuite/dist/rsuite.min.css";



export const metadata: Metadata = {
  title: "Synthetic Data Generator",
  description:
    "This application acts as a synthetic data generator that essentially generates relevant data given a pre-prompt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Synthetic Data Generator using Files</title>
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg"
          sizes="lg"
          className="w-auto h-auto"
          fetchPriority="high"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
