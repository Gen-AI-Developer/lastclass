import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <h1>This is First Next JS Project on Vercel</h1>
      </div>
    </div>
  );
}
