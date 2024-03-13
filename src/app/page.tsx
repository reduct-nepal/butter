import styles from "./page.module.css";
import Hero from "components/hero-section/Hero";
import WhyUs from "components/why-us/Whyus";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <WhyUs />
    </main>
  );
}
