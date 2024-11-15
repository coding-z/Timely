import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={`${styles.glass} ${styles.main}`}>
      <h1>List Name</h1>
      <ul className={styles.ul}>
        <li className={`${styles.done} ${styles.li}`}>
          <p>Exercise</p>
        </li>
        <li className={`${styles.done} ${styles.li}`}>
          <p>Sleep</p>
        </li>
        <li className={styles.li}>
          <p>Work on project</p>
        </li>
        <li className={styles.li}>
          <p>Do something</p>
        </li>
      </ul>
    </main>
  );
}
