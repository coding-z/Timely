"use client";

import { ChangeEvent, useState } from "react";
import Button from "./button";

function TimerInput() {
  const [value, setValue] = useState("00:00:00");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }
  
  return (
    <>
      <input value={value} onChange={handleChange} />
      <style jsx>{`
        input {
          background-color: transparent;
          font-size: var(--font-size-xl);
          width: 230.406px;   // TODO: Calculate dynamically?
          height: 62px;       // ^
          border: none;
          padding: 0;

          &:focus {
            outline: none;
          }
        }
      `}</style>
    </>
  );
}

export default function Timer() {
  return (
    <div className="root">
      {/* <h1>00:00:00</h1> */}
      <TimerInput />
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
