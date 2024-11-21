"use client";

import Glass from "./glass";
import { VscCircle } from "react-icons/vsc";
import { LuCheck } from "react-icons/lu";
import { useState } from "react";
import Button from "./button";

interface ChecklistItem {
  id: number;
  name: string;
  done: boolean;
}

interface Checklist {
  title: string;
  items: ChecklistItem[];
}

const mockData: Checklist = {
  title: "Stuff to do",
  items: [
    { id: 1, name: "Start project", done: false },
    { id: 2, name: "Finish project", done: true },
    { id: 3, name: "Be quick and efficient", done: true },
    { id: 4, name: "Do something useful", done: false },
  ],
};

export function ChecklistItem({ item, key }: { item: ChecklistItem, key: number }) {
  return (
    <li key={key}>
      
    </li>
  );
}

export default function Checklist({ data = mockData }: { data?: Checklist }) {
  const [checklist, setChecklist] = useState(data);

  return (
    <div className="root">
      <header>
        <h1>{checklist.title}</h1>
        <Button>New Task</Button>
      </header>
      <ul>
        {checklist.items.map((item) => (
          <li
            key={item.id}
            onClick={(event) => {
              setChecklist({
                ...checklist,
                items: checklist.items.map((current) =>
                  current.id === item.id
                    ? {
                        ...current,
                        done: !current.done,
                      }
                    : current
                ),
              });
            }}
          >
            <Glass>
              <div className="item-layout">
                {item.done ? <LuCheck /> : <VscCircle />}
                {item.name}
              </div>
            </Glass>
          </li>
        ))}
      </ul>
      <style jsx>{`
        div.root {
          display: block flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: stretch;
          gap: 30px;
          min-width: 300px;
          width: 500px;
        }

        header {
          display: block flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .item-layout {
          display: block flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          gap: 10px;
        }

        li:hover {
          cursor: pointer;
        }

        h1 {
          margin-left: 11px;
        }

        li:not(:first-child) {
          position: relative;
          margin-top: -1px;

          &::before {
            content: "";
            position: absolute;
            display: block;
            height: 1px;
            width: calc(100% - 22px);
            border-radius: 1px;
            background-color: rgb(255 255 255 / 0.35);
            top: 0;
            left: 11px;
          }
        }

        li:not(:first-child):hover::before,
        li:not(:last-child):hover + li::before {
          visibility: hidden;
        }
      `}</style>
    </div>
  );
}
