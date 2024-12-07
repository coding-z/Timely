import { GoCheckbox, GoChevronLeft, GoDotFill } from "react-icons/go";
import { ItemStatus, ListData } from "./lists";

export default function List({ list, onClose }: { list: ListData; onClose: () => void; }) {
  return (
    <>
      <div className="root">
        <header>
          <button>
            <GoChevronLeft size={40} onClick={onClose} />
          </button>
          <h1>{list.title}</h1>
        </header>
        <div className="divider" />
        <ul>
          {list.items.map((item) => (
            <li key={item.id}>
              {item.status === ItemStatus.DONE ? (
                <GoCheckbox size={30} />
              ) : (
                <GoDotFill />
              )}
              <div className="item-content">
                <h2>{item.title}</h2>
                {item.description && <p>{item.description}</p>}
              </div>
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

        header {
          display: block flex;
          flex-direction: row;
          align-items: center;
          gap: 30px;
        }

        .divider {
          background-color: rgb(255 255 255 / 0.2);
          height: 1px;
          width: 100%;
          border-radius: 1px;
        }

        h2 {
          font-size: 18px;
        }

        ul {
          align-self: stretch;
        }

        li {
          padding: 10px;
          border-radius: 5px;
          border: 1px solid transparent;
          position: relative;
          overflow: hidden;
          display: block flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;

          &:hover {
            cursor: pointer;
            border-color: rgb(255 255 255 / 0.2);
            background-color: rgb(255 255 255 / 0.1);
          }
        }
      `}</style>
    </>
  );
}
