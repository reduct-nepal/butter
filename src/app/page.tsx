import Hero from "components/HeroSection";

import styles from "./page.module.css";
import WhyUs from "components/WhyUs/Whyus";
import Footer from "components/Footer";
import Pricing from "components/Pricing";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <WhyUs />
      <Pricing />
      <Footer />
    </main>
  );
}
