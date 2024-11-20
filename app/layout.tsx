import { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import React from "react";
import StyledJsxRegistry from "./registry";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Timely",
  description: "Personal planning and time management web app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" dir="ltr" className={geistMono.className}>
      <body>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
