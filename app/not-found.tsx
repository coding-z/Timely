import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={`${styles.glass} ${styles.main}`}>
      <h1>404</h1>
      <div className={styles.divider}></div>
      <div>
        <p>Error fetching page</p>
        <Link href="/" className={styles.link}>
          <p>Return home</p>
        </Link>
      </div>
    </main>
  );
}
