"use client";

import React from "react";

export default function Glass({
  variant = "primary",
  children,
}: {
  variant?: "primary" | "secondary" | "hover";
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          border: ${variant === "hover"
            ? "1px solid transparent"
            : "1px solid rgb(255 255 255 / 0.2)"};
          border-right-color: ${variant === "hover"
            ? "transparent"
            : "rgb(255 255 255 / 0.1)"};
          border-bottom-color: ${variant === "hover"
            ? "transparent"
            : "rgb(255 255 255 / 0.1)"};
          border-radius: 5px;
          padding: ${variant === "primary" ? "30px" : "10px"};
          background-color: ${variant === "primary"
            ? "rgb(255 255 255 / 0.1)"
            : "transparent"};
          backdrop-filter: ${variant === "primary"
            ? "blur(15px)"
            : variant === "secondary"
            ? "blur(5px)"
            : "none"};
          box-shadow: ${variant === "primary"
            ? `
            inset 5px 5px 15px rgb(255 255 255 / 0.1),
            5px 5px 15px rgb(0 0 0 / 0.1)
          `
            : variant === "secondary"
            ? `
            inset 5px 5px 15px rgb(255 255 255 / 0.05),
            5px 5px 15px rgb(0 0 0 / 0.05)
          `
            : "none"};

          ${variant === "hover" &&
          `
            &:hover {
              border: 1px solid rgb(255 255 255 / 0.2);
              border-right-color: rgb(255 255 255 / 0.1);
              border-bottom-color: rgb(255 255 255 / 0.1);
              background-color: rgb(255 255 255 / 0.1);
              box-shadow:
                inset 5px 5px 15px rgb(255 255 255 / 0.05),
                5px 5px 15px rgb(0 0 0 / 0.05);
            }
          `}
        }
      `}</style>
    </div>
  );
}
