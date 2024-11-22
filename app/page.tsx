"use client";

import { useState } from "react";
import Checklist from "../components/checklist";
import Glass from "../components/glass";
import Timer from "../components/timer";

export default function Page() {
  const [iterations, setIterations] = useState(0);
  
  return (
    <Glass iterations={iterations} setIterations={setIterations}>
      {/* <Checklist /> */}
      <Timer iterations={iterations} setIterations={setIterations} />
    </Glass>
  );
}
