"use client";

import Timer from "../components/timer";

export interface TimerData {
  id: number;
  value: number;
}

const timers: TimerData[] = [
  { id: 0, value: 0 },
  { id: 1, value: 60 },
  { id: 2, value: 3661 }
];

export default function Page() {
  return (
    <>
      <main>
        <ul>
          {timers.map((timer) => (
            <li key={timer.id}>
              <Timer key={timer.id} timer={timer} />
            </li>
          ))}
        </ul>
      </main>
      <style jsx>{`
        main {
          padding: 30px;
          background-color: rgb(255 255 255 / 0.1);
          border-radius: 5px;
          border: 1px solid rgb(255 255 255 / 0.2);
          border-right-color: rgb(255 255 255 / 0.1);
          border-bottom-color: rgb(255 255 255 / 0.1);
          backdrop-filter: blur(10px);
          box-shadow:
            inset 5px 5px 15px rgb(255 255 255 / 0.1),
            5px 5px 15px rgb(0 0 0 / 0.1);
        }

        li:not(:first-child) {
          margin-top: 10px;

          &::before {
            display: block;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
