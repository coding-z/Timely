import React from "react";
import DigitEditor from "./digit-editor";
import { TimerData } from "./timer";

export default function TimerEditor({ timer }: { timer: TimerData }) {
  return (
    <div className="timer-editor">
      <DigitEditor label="Hours" value={0} />
      <h1>:</h1>
      <DigitEditor label="Minutes" value={0} limit={60} />
      <h1>:</h1>
      <DigitEditor label="Seconds" value={0} limit={60} />
    </div>
  );
}
