"use client";

import Button from "./button";

export default function Timer() {
  return (
    <div className="root">
      <h1>00:00:00</h1>
      <Button>Start</Button>
      <style jsx>{`
        .root {
          display: block flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-end;
          gap: 30px;
        }

        h1 {
          font-size: var(--font-size-xl);
        }
      `}</style>
    </div>
  );
}
