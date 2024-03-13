import Package from "components/packages/Package";
import Hero from "components/hero-section";

import styles from "./page.module.css";
import WhyUs from "components/why-us/Whyus";
import { Footer } from "root/components/footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <WhyUs />
      <Package />
      <Footer />
    </main>
  );
}
