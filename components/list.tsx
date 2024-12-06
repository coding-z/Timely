import { ListData } from "./lists";

export default function List({ list }: { list: ListData }) {
  return (
    <>
      <h1>{list.title}</h1>
      <style jsx>{`

      `}</style>
    </>
  );
}
