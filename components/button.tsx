"use client";

import React from "react";
import Glass from "./glass";

export default function Button({ children, ...props }: { children: React.ReactNode; props?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>; }) {
  return (
    <>
      {/* <div className="root">
        <Glass variant="secondary">{children}</Glass>
      </div> */}
      <button {...props}>{children}</button>
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
