"use client";

import { useState } from "react";

interface ListData {
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
      <h1 id="title">Checklists</h1>
      <ul>
        {lists.map((listData) => (
          <li key={listData.id}>
            <h2>
              {listData.title}
            </h2>
            <p>
              {listData.itemCount} items
            </p>
          </li>
        ))}
      </ul>
      <style jsx>{`
        #title {
          margin-bottom: 30px;
        }
        
        h2 {
          font-size: 18px;
        }
      `}</style>
    </>
  );
}
