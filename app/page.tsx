// import styles from "./home.module.css";
import "./home.css";

export default function Home() {
  return (
    <main className="glass">
      <h1>List Name</h1>
      <ul>
        <li className="done">
          <p>Exercise</p>
        </li>
        <li className="done">
          <p>Sleep</p>
        </li>
        <li>
          <p>Work on project</p>
        </li>
        <li>
          <p>Do something</p>
        </li>
      </ul>
    </main>
  );
}
