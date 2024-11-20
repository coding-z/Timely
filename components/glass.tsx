"use client";

import React from "react";

export default function Glass({ primary = true, children }: { primary?: boolean; children: React.ReactNode }) {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          border: 1px solid rgb(255 255 255 / 0.2);
          border-right-color: rgb(255 255 255 / 0.1);
          border-bottom-color: rgb(255 255 255 / 0.1);
          border-radius: 5px;
        }
      `}</style>
      <style jsx>{`
        div {
          padding: ${primary ? "30px" : "10px"};
          background-color: ${primary ? "rgb(255 255 255 / 0.1)" : "transparent"};
          backdrop-filter: blur(${primary ? "15px" : "5px"});
          box-shadow: ${primary ? `
            inset 5px 5px 15px rgb(255 255 255 / 0.1), 5px 5px 15px rgb(0 0 0 / 0.1)
          ` : `
            inset 5px 5px 15px rgb(255 255 255 / 0.05), 5px 5px 15px rgb(0 0 0 / 0.05)
          `};
        }
      `}</style>
    </div>
  );
}
