"use client";

import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <style jsx global>{`
        html {
          box-sizing: border-box;

          *, *::before, *::after {
            box-sizing: inherit;
          }
        }

        body {
          display: block flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0;
          overflow-x: hidden;
          width: 100vw;
          min-height: 100vh;
          height: 100vh;
          background-image: linear-gradient(135deg, #f97794 10%, #623aa2 100%);
          color: rgb(255 255 255 / 0.8);

          * {
            color: inherit;
            font-family: inherit;
            font-optical-sizing: inherit;
            font-weight: inherit;
            font-style: inherit;
          }
        }

        h1, h2, h3, h4, h5, h6, p {
          margin: 0;
        }
      `}</style>
    </>
  );
}