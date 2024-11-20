import React from "react";
import StyledJsxRegistry from "./registry";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timely",
  description: "Personal planning and time management web app"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" dir="ltr">
      <body>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
