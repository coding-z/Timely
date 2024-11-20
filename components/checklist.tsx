"use client";

import Glass from "./glass";

interface ChecklistItem {
  id: number;
  name: string;
}

interface Checklist {
  title: string;
  items: ChecklistItem[];
}

const mockData: Checklist = {
  title: "Stuff to do",
  items: [
    { id: 1, name: "Start project" },
    { id: 2, name: "Finish project" },
    { id: 3, name: "Be quick and efficient" },
    { id: 4, name: "Do something useful" }
  ]
};

export default function Checklist({ checklist = mockData }: { checklist?: Checklist; }) {
  return (
    <div>
      <h1>{checklist.title}</h1>
      <ul>
        {checklist.items.map((item) => (
          <li key={item.id}>
            <Glass variant="hover">
              {item.name}
            </Glass>
          </li>
        ))}
      </ul>
      <style jsx>{`
        div {
          display: block flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 30px;
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

        li:not(:first-child):hover::before, li:not(:last-child):hover + li::before {
          visibility: hidden;
        }
      `}</style>
    </div>
  );
}
