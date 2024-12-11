import React from "react";
import TimerEditor from "./timer-editor";
import "./timer.css";

export enum TimerStatus {
  READY,
  RUNNING,
  PAUSED,
  COMPLETE
}

export interface TimerData {
  value: number;
  initialValue: number;
  status: TimerStatus;
}

export default function Timer({ timer }: { timer: TimerData; }) {
  return (
    <div className="timer">
      <TimerEditor timer={timer} />
    </div>
  );
}
