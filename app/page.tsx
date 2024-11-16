"use client";

import { CSSProperties, useState } from "react";
import styles from "./home.module.scss";


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
  const [create, setCreate] = useState(false);

  function handleToggleItemStatus(id: number) {
    setList({
      ...list,
      items: list.items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      ),
    });
  }
  const style: CSSProperties = {};

  return (
    <main className={[styles.glass, styles.main].join(" ")}>
      {create ? (
        <>
          <header className={styles.header}>
            <h1>New Task</h1>
            <button className={styles.button} onClick={() => setCreate(false)}>
              Save
            </button>
          </header>
        </>
      ) : (
        <>
          <header className={styles.header}>
            <h1>{list.title}</h1>
            <button className={styles.button} onClick={() => setCreate(true)}>
              New Task
              {/* <span className="material-symbols-rounded">add</span> */}
            </button>
          </header>
          <ul className={styles.ul}>
            {list.items.map((item) => (
              <li
                key={item.id}
                className={[item.done ? styles.done : undefined, styles.li].join(" ")}
                onClick={() => handleToggleItemStatus(item.id)}
              >
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}
