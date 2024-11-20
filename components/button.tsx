"use client";

import React from "react";
import Glass from "./glass";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="root">
        <Glass variant="secondary">{children}</Glass>
      </div>
      <style jsx>{`
        div.root {
          transition-property: transform;
          transition-duration: 0.4s;

          &:hover {
            transform: translateY(-5px);
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
}
