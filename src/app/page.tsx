import styles from "./page.module.css";
import Hero from "root/components/hero-section";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
}