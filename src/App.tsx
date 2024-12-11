import React from "react";
import "./globals.css";
import Timer, { TimerData, TimerStatus } from "./components/timer";

const mock: TimerData = {
  value: 0,
  initialValue: 0,
  status: TimerStatus.READY
};

export default function App() {
  return (
    <main>
      <Timer timer={mock} />
    </main>
  );
}
