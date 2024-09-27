import type { Metadata } from "next";
import { inter } from "./themes/fonts";
import "./globals.css";
import "rsuite/dist/rsuite.min.css";



export const metadata: Metadata = {
  title: "Bank OCR POC for bKash",
  description:
    "The application is a POC developed for bKash to read bank cheques using an OCR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Bank Cheque OCR: POC</title>
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
