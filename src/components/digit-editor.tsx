import React from "react";
import "./timer.css";

export default function DigitEditor({
  label,
  value,
  limit = 100
}: {
  label: string;
  value: string | number;
  limit?: number;
}) {
  const before = (((Number(value) - 1) % limit) + limit) % limit;
  const after = (Number(value) + 1) % limit;
  
  return (
    <div className="digit-editor">
      <p>{label}</p>
      <h1>{String(before).padStart(2, "0")}</h1>
      <input
        value={String(value).padStart(2, "0")}
        className="digit-editor"
      />
      <h1>{String(after).padStart(2, "0")}</h1>
    </div>
  );
}
