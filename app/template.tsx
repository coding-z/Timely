"use client";

import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div id="root">
        <header>
          <button>Lists</button>
          <button>Timers</button>
          <button>Calendar</button>
        </header>
        <main>
          {children}
        </main>
      </div>
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
          padding: 0;
          overflow-x: hidden;
          width: 100vw;
          min-height: 100vh;
          height: 100vh;
        }

        #root {
          display: block flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 100%;
          padding: 50px;
        }

        header {
          display: block flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: stretch;
          gap: 10px;
        }
      `}</style>
    </>
  );
}
