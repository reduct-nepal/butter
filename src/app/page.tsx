import Package from "components/packages/Package";
import Hero from "components/hero-section";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Package />
    </main>
  );
}

