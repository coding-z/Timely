import Link from "next/link";
import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <main className={[styles.glass, styles.main].join(" ")}>
      <h1>404</h1>
      <div className={styles.divider}></div>
      <div>
        <p>Error fetching page</p>
        <Link href="/" className="link">
          Return home
        </Link>
      </div>
    </main>
  );
}
