import { GoChevronLeft } from "react-icons/go";
import { ListData } from "./lists";

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
      `}</style>
    </>
  );
}
