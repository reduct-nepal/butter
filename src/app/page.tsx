import Package from "components/packages/Package";
import Hero from "components/hero-section";

import styles from "./page.module.css";
import WhyUs from "components/why-us/Whyus";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <WhyUs />
      <Package />
    </main>
  );
}

