import * as React from "react";
import styles from "./page.module.css";

import Hero from "../components/HeroSection";
import Navbar from "root/components/NavBar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
    </main>
  );
}
