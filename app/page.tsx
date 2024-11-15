"use client";

import { useState } from "react";
import "./home.css";

export default function Home() {
  const [list, setList] = useState({
    title: "Daily Stuff",
    items: [
      { id: 1, name: "Exercise", done: true },
      { id: 2, name: "Sleep", done: true },
      { id: 3, name: "Work on project", done: false },
      { id: 4, name: "Do something", done: false },
      { id: 5, name: "This is a new item", done: false },
    ],
  });

  function handleToggleItemStatus(id: number) {
    setList({
      ...list,
      items: list.items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      ),
    });
  }

  return (
    <main className="glass">
      <h1>{list.title}</h1>
      <ul>
        {list.items.map((item) => (
          <li
            key={item.id}
            className={item.done ? "done" : undefined}
            onClick={() => handleToggleItemStatus(item.id)}
          >
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
