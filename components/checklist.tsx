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
    <>
      <h1>{checklist.title}</h1>
      <ul>
        {checklist.items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
