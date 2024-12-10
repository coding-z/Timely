"use client";

import { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { GoChecklist, GoClock } from "react-icons/go";
import { features } from "process";

enum Features {
  LISTS,
  TIMERS
}

export default function Page() {
  const [page, setPage] = useState(Features.LISTS);
  
  return (
    <>
      <h1>Home</h1>
      <style jsx>{`
        
      `}</style>
    </>
  );
}
