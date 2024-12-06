"use client";

import { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { GoChecklist, GoClock } from "react-icons/go";
import Lists from "../components/lists";
import Timers from "../components/timers";

enum Features {
  LISTS,
  TIMERS
}

export default function Page() {
  const [page, setPage] = useState(Features.LISTS);
  
  return (
    <>
      <div id="root">
        <header>
          <button>
            <GoChecklist size={40} />
          </button>
          <button>
            <GoClock size={40} />
          </button>
          <button>
            <CiCalendar size={40} />
          </button>
        </header>
        <main>
          {page === Features.LISTS && <Lists />}
          {page === Features.TIMERS && <Timers />}
        </main>
      </div>
      <style jsx>{`
        #root {
          flex-grow: 1;
          width: 100%;
          display: block flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        header {
          position: absolute;
          top: 50px;
          left: 50px;
          display: block flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: stretch;
          gap: 10px;
          background-color: rgb(255 255 255 / 0.1);
          backdrop-filter: blur(20px);
          padding: 10px;
          border-radius: 5px;
          border: 1px solid rgb(255 255 255 / 0.2);
          box-shadow:
            5px 5px 20px rgb(0 0 0 / 0.1),
            inset 5px 5px 20px rgb(255 255 255 / 0.1);
        }

        main {
          background-color: rgb(255 255 255 / 0.1);
          backdrop-filter: blur(20px);
          padding: 30px;
          border-radius: 5px;
          border: 1px solid rgb(255 255 255 / 0.2);
          box-shadow:
            5px 5px 20px rgb(0 0 0 / 0.1),
            inset 5px 5px 20px rgb(255 255 255 / 0.1);
        }
      `}</style>
    </>
  );
}
