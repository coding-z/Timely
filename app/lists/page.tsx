"use client";

import { useState } from "react";
import List from "../../components/list";
import { GoChevronLeft } from "react-icons/go";

export enum ItemStatus {
  TODO,
  DONE
}

export interface ListItemData {
  id: number;
  title: string;
  description?: string;
  status: ItemStatus;
}

export interface ListData {
  id: number;
  title: string;
  itemCount: number;
  items: ListItemData[];
}

export default function Page() {
  const [lists, setLists] = useState<ListData[]>([
    {
      id: 0,
      title: "Daily To-Do",
      itemCount: 3,
      items: [
        {
          id: 0,
          title: "Get Up",
          status: ItemStatus.TODO,
          description: "This is self-explanatory"
        },
        {
          id: 1,
          title: "Eat Lunch",
          status: ItemStatus.DONE,
          description: "This is very good"
        },
        {
          id: 2,
          title: "Work on Project",
          status: ItemStatus.DONE,
          description: "I'm doing this right now"
        }
      ]
    },
    {
      id: 1,
      title: "Pre-Flight",
      itemCount: 2,
      items: [
        {
          id: 0,
          title: "Check Fuel",
          status: ItemStatus.TODO
        },
        {
          id: 1,
          title: "Attach Wings",
          status: ItemStatus.DONE
        }
      ]
    },
    {
      id: 2,
      title: "Weekly Review",
      itemCount: 0,
      items: []
    }
  ]);
  const [current, setCurrent] = useState<number | null>(null);
  
  return (
    <>
      {current !== null ? (
        <List list={lists[current]} onClose={() => setCurrent(null)} />
      ) : (
        <div className="root">
          <h1>Checklists</h1>
          <div className="divider" />
          <ul>
            {lists.map((listData) => (
              <li
                key={listData.id}
                className="list-item"
                onClick={() => setCurrent(listData.id)}
              >
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
      )}
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
          position: relative;
          overflow: hidden;
          transform: translateY(0);
          transition: transform 0.4s;

          &::after {
            content: "";
            display: block;
            position: absolute;
            background-color: rgb(255 255 255 / 0.5);
            height: 100%;
            width: 25%;
            top: 0;
            right: 0;
            transform: skewX(45deg) translateX(calc(100% + 33px));
            transition: transform 0.4s;
          }

          &:hover {
            cursor: pointer;
            border-color: rgb(255 255 255 / 0.2);
            transform: translateY(-5px);
            background-color: rgb(255 255 255 / 0.1);

            &::after {
              transform: skewX(45deg) translateX(calc(-400% - 33px));
            }
          }
        }
      `}</style>
    </>
  );
}
