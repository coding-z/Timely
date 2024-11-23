import { TimerData } from "../app/page";

export default function Timer({ timer }: { timer: TimerData }) {
  const hours = String(Math.floor(timer.value / 3600)).padStart(2, "0");
  const minutes = String(Math.floor(timer.value % 3600 / 60)).padStart(2, "0");
  const seconds = String(timer.value % 3600 % 60).padStart(2, "0");
  const display = `${hours}:${minutes}:${seconds}`;
  
  return (
    <>
      <article>
        <h1>{display}</h1>
      </article>
      <style jsx>{`
        article {
          padding: 10px;
          background-color: transparent;
          border-radius: 5px;
          border: 1px solid rgb(255 255 255 / 0.2);
          border-right-color: rgb(255 255 255 / 0.1);
          border-bottom-color: rgb(255 255 255 / 0.1);
          box-shadow:
            inset 5px 5px 15px rgb(255 255 255 / 0.05),
            5px 5px 15px rgb(0 0 0 / 0.05);
        }
      `}</style>
    </>
  );
}
