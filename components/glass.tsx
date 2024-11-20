"use client";

import React from "react";

export default function Glass({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          border: 1px solid rgb(255 255 255 / 0.2);
          border-right-color: rgb(255 255 255 / 0.1);
          border-bottom-color: rgb(255 255 255 / 0.1);
          border-radius: var(--border-radius);
          padding: 30px;
          background-color: rgb(255 255 255 / 0.1);
          backdrop-filter: blur(15px);
          box-shadow: inset 5px 5px 15px rgb(255 255 255 / 0.1),
            5px 5px 15px rgb(0 0 0 / 0.1);
        }
      `}</style>
    </div>
  );
}
