"use client";

import {
  ChangeEvent,
  FocusEvent,
  SyntheticEvent,
  useRef,
  useState,
} from "react";
import Button from "./button";

function TimerInput({ value, onValueChange }) {
  const ref = useRef<HTMLInputElement>(null);
  const [cursor, setCursor] = useState<number | null>(null);

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setCursor(null);
  }

  function handleSelectChange(event: SyntheticEvent<HTMLInputElement, Event>) {
    const start = ref.current.selectionStart;
    const end = ref.current.selectionEnd;
    const eventType = event.nativeEvent.type;
    const key = event.nativeEvent["key"];

    if (cursor === null && eventType === "keyup") {
      // Gained focus by keyboard
      ref.current.selectionStart = 0;
      ref.current.selectionEnd = 1;
      setCursor(0);
    } else if (eventType === "mouseup") {
      // Handle click
      if (start < 8) {
        ref.current.selectionEnd = start + 1;
        setCursor(start);
      } else {
        ref.current.selectionStart = 7;
        setCursor(7);
      }
    } else if (eventType === "keyup" && key === "ArrowRight" && start < 8) {
      // Handle valid key right
      ref.current.selectionEnd = start + 1;
      setCursor(start);
    } else if (eventType === "keyup" && key === "ArrowLeft" && end > 0) {
      // Handle valid key left
      ref.current.selectionStart = end - 1;
      setCursor(end - 1);
    } else {
      // Else invalid and ensure no change
      ref.current.selectionStart = cursor;
      ref.current.selectionEnd = cursor + 1;
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (/^\d{2}:[0-5]\d:[0-5]\d$/.test(event.target.value)) {
      onValueChange(event.target.value);
    }
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
          caret-color: transparent;

          &::selection {
            background-color: ${cursor === null
              ? "transparent"
              : "rgb(255 255 255 / 0.35)"};
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

// Different visual states for Timer
// - Adjusting time
// - Timer running
// - Timer paused (can't adjust)
// - Timer complete

// Triggers for state changes
// - Start button pressed (adjusting -> running)
// - Pause button pressed (running -> paused)
// - Resume button pressed (paused -> running)
// - Cancel/reset button pressed (paused -> adjusting)
// - Timer complets (running -> complete)
// - Timeout alert finishes (complete -> adjusting)

enum TimerStatus {
  ADJUSTING,
  RUNNING,
  PAUSED,
  COMPLETE
}

export default function Timer() {
  const [formattedValue, setFormattedValue] = useState("00:00:00");
  const [status, setStatus] = useState(TimerStatus.ADJUSTING);
  
  return (
    <div className="root">
      {status === TimerStatus.ADJUSTING ? (
        <TimerInput value={formattedValue} onValueChange={setFormattedValue} />
      ) : (
        <h1>{formattedValue}</h1>
      )}
      {status === TimerStatus.RUNNING ? (
        <Button>Pause</Button>
      ) : status === TimerStatus.PAUSED ? (
        <div className="row">
          <Button>Cancel</Button>
          <Button>Resume</Button>
        </div>
      ) : (
        <Button>Start</Button>
      )}
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

        .row {
          display: block flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          gap: 10px;
        }
      `}</style>
    </div>
  );
}
