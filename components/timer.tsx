"use client";

import {
  ChangeEvent,
  FocusEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import Button from "./button";

function TimerInput() {
  const ref = useRef<HTMLInputElement>(null);
  const [cursor, setCursor] = useState<{
    start: number | null;
    end: number | null;
  }>({ start: null, end: null });
  const [value, setValue] = useState("00:00:00");

  useEffect(() => {
    ref.current.setSelectionRange(cursor.start, cursor.end);
  }, [cursor.start, cursor.end]);

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setCursor({ start: null, end: null });
  }

  function handleSelectChange(event: SyntheticEvent<HTMLInputElement, Event>) {
    setCursor({
      start: ref.current.selectionStart,
      end: ref.current.selectionEnd,
    });
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const start = ref.current.selectionStart;
    const end = ref.current.selectionEnd;
    let value = event.target.value;
    const asArray = value.split("");

    // Detect the type of change and calculate the result
    switch (event.nativeEvent["inputType"]) {
      case "insertText":
        asArray.splice(start, 1);
        value = asArray.join("");
        break;
      case "deleteContentBackward":
      case "deleteContentForward":
        asArray.splice(start, 0, "0");
        value = asArray.join("");
    }

    // Apply the result if valid
    if (/^\d{2}:[0-5]\d:[0-5]\d$/.test(value)) {
      setValue(value);
    }

    setCursor({ start, end });
  }

  return (
    <>
      <input
        ref={ref}
        value={value}
        onChange={handleChange}
        onSelect={handleSelectChange}
        onBlur={handleBlur}
      />
      <style jsx>{`
        input {
          background-color: transparent;
          font-size: var(--font-size-xl);
          width: 230.406px; // TODO: Calculate dynamically?
          height: 62px; // ^
          border: none;
          padding: 0;

          &::selection {
            background-color: rgb(255 255 255 / 0.2);
            color: white;
          }

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
