"use client";

import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <style jsx global>{`
        :root {
          --spacing-primary: 30px;
          --spacing-secondary: 10px;
          --font-size-md: 16px;
          --font-size-xl: 48px;
          --border-radius: 5px;
          --color-main: rgb(255 255 255 / 0.8);
          --background-color-primary: rgb(255 255 255 / 0.1);
          --background-color-secondary: transparent;
          --shard-color: rgb(255 255 255 / 0.5);
          --border-style: solid;
          --border-width: 1px;
          --border-color:
            rgb(255 255 255 / 0.4)
            rgb(255 255 255 / 0.2)
            rgb(255 255 255 / 0.2)
            rgb(255 255 255 / 0.4);
          --blur-primary: blur(10px);
          --blur-secondary: blur(5px);
          --box-shadow-primary:
            inset 5px 5px 15px rgb(255 255 255 / 0.1),
            5px 5px 15px rgb(0 0 0 / 0.1);
          --box-shadow-secondary:
            inset 5px 5px 15px rgb(255 255 255 / 0.05),
            5px 5px 15px rgb(0 0 0 / 0.05);
        }

        html {
          box-sizing: border-box;

          *, *::before, *::after {
            box-sizing: inherit;
            font-family: inherit;
            font-optical-sizing: inherit;
            font-weight: inherit;
            font-style: inherit;
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
          color: var(--color-main);

          * {
            color: inherit;
          }
        }

        h1, h2, h3, h4, h5, h6, p {
          margin: 0;
        }

        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  );
}
