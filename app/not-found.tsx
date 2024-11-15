import Link from "next/link";
import "./not-found.css";

export default function NotFound() {
  return (
    <main className="glass">
      <h1>404</h1>
      <div className="divider"></div>
      <div>
        <p>Error fetching page</p>
        <Link href="/" className="link">
          Return home
        </Link>
      </div>
    </main>
  );
}
