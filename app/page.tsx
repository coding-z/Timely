"use client";

import { useState } from "react";
import Checklist from "../components/checklist";
import Glass from "../components/glass";
import Timer from "../components/timer";

export default function Page() {
  const [shine, setShine] = useState(0);
  
  return (
    <Glass shine={shine}>
      {/* <Checklist /> */}
      {/* <Timer iterations={iterations} setIterations={setIterations} /> */}
      <h1>Hello</h1>
      <button onClick={() => {
        setShine(5);
      }}>Start</button>
      <button onClick={() => {
        setShine(0);
      }}>Stop</button>
    </Glass>
  );
}
