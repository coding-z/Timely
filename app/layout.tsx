import { Metadata } from "next";
import React from "react";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Timely",
  description: "Personal planning and time management app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
