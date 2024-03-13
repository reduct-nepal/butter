import Package from "root/components/packages/Package";
import styles from "./page.module.css";
import Hero from "components/hero-section/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Package />
    </main>
  );
}
