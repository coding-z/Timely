"use client";

import { useState } from "react";

export interface ListData {
  id: number;
  title: string;
  itemCount: number;
}

export default function Lists() {
  const [lists, setLists] = useState<ListData[]>([
    {
      id: 0,
      title: "Daily To-Do",
      itemCount: 4
    },
    {
      id: 1,
      title: "Pre-Flight",
      itemCount: 10
    },
    {
      id: 2,
      title: "Weekly Review",
      itemCount: 8
    }
  ]);
  
  return (
    <>
      <div className="root">
        <h1 id="title">Checklists</h1>
        <div className="divider" />
        <ul>
          {lists.map((listData) => (
            <li key={listData.id} className="list-item">
              <h2>
                {listData.title}
              </h2>
              <p>
                {listData.itemCount} items
              </p>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .root {
          display: block flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 30px;
        }
        
        h2 {
          font-size: 18px;
        }

        .divider {
          background-color: rgb(255 255 255 / 0.2);
          height: 1px;
          width: 100%;
          border-radius: 1px;
        }

        ul {
          align-self: stretch;
        }

        .list-item {
          padding: 10px;
          border-radius: 5px;
          border: 1px solid transparent;

          &:hover {
            border-color: rgb(255 255 255 / 0.2);
            cursor: pointer;
            background-color: rgb(255 255 255 / 0.1);
          }
        }
      `}</style>
    </>
  );
}
